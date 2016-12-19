<template>
  <!--顶部-->
  <div class="com-header">
    <div class="return"><a @click="this.$root.back()"><i class="iconfont">&#xe624;</i></a></div>
    <div class="header-title">我的佣金</div>
  </div>
  <div class="header-h"></div>
  <!--顶部:over-->
  <!--搜索-->
  <div class="store-serve-search"
    style="position: fixed;height:2rem; top: 2.15rem; left: 0; z-index: 10;background-color:floralwhite;">
    <div class="serve-white"><i class="icon">&#xe649;</i>
      <input type="text" v-model="keyword" class="serve-txt" placeholder="请输入……">
    </div>
    <input type="submit" class="serve-btn" style="background-color: #009ad9"
     value="搜索" @click="search">
  </div>
  <!--搜索:over-->
  <div class="content bc-f0f0f0" transition="bounce" v-infinite-scroll="loadMore">
    <!--汽车服务-->
    <div class="store-serve" style="margin-top:2rem;background-color: #f0f0f0;">
      <div v-if="bList" class="store-serve-bottom">
        <ul>
          <li v-for="b in bList" track-by="$index" :class="b.status===2?'grayLi':''">
            <section>
              <h3 :style="{color:(b.status===0?'#9c9c9c':'')}">
                {{b.name}}
                <span style="float:right;margin-right:0.4rem;">{{b.status | statusCommFilter}}</span>
              </h3>
              <div class="cont-title2">
                <span class="span1" style="left:0rem;">
                  {{b.from_phone | phone}}
                </span>
                <span class="span3" style="width:6.2rem;margin-right:2rem;text-align:left;">
                  {{b.create_time | dataFilter 'yyyy-MM-dd HH:mm:ss'}}
                </span>
              </div>
              <span :style="[{'font-weight': 'bold','color':(b.status===0?'#9c9c9c':'')}]">{{b.money | currency '¥'}}</span>
              <span style="float: right;" v-cloak v-if="b | isShowWithdraw">
                <a class="wucbtn" @click="withdrawBro(b['id'])">提现</a>
                <!-- <img src="/img/icon-vip.png"> -->
              </span>
            </section>
          </li>
        </ul>
      </div>
      <div v-cloak v-if="showWarning"
        style="width:100%;text-align:center;margin-top:2rem;margin-bottom:6rem;">
        <div>
          <img src="/img/tips.png" height="24" width="152">
        </div>
        <div style="font-size:0.38rem;color:#A9A9A9;padding-top:0.2rem;">
          您还没有佣金
        </div>
      </div>
    </div>
    <!--汽车服务:over-->
  </div>
</template>

<script>
import $ from 'zepto'
import Vue from 'vue'
import {loader, dateFormat} from '../../util/util'
import {api} from '../../util/service'

Vue.filter('statusCommFilter', function (value) {
  let desc = ''
  switch (value)
  {
    case 0:
      desc = '冻结中'
      break
    case 1:
      desc = ''
      break
    case 2:
      desc = '不可用'
      break
    default:
      desc = ''
      break
  }
  return desc
})

Vue.filter('isShowWithdraw', function (bro) {
  // aid: "pzPNvzRu"
  // create_time: 1482053963000
  // from_phone: "15830849689"
  // id: 104
  // money: 2500
  // name: "一级佣金(客户)"
  // oneLevelCount: 1
  // status: 1
  // team_id: "13403129958"
  // to_phone: "13403129958"
  if (bro['money'] !== 2500 || bro['status'] !== 1) {
    return false
  }
  else {
    if (this.user['userPhone'] === '13403129958') {
      return true
    }
    else if (bro['team_id'] === '13403129958' && bro['oneLevelCount'] > 2) {
      return true
    }
    else {
      return false
    }
  }
})

/*
 * 日期转换
 */
Vue.filter('dataFilter', function (value, format) {
  return dateFormat(new Date(value), format)
})

/*
 * 隐藏手机号码中间四位
 */
Vue.filter('phone', function (val) {
  let phone = val.substr(3, 4)
  let lphone = val.replace(phone, '****')
  return lphone
})

let num = 1
let size = 10
export default {
  ready () {
    loader.show()
    // 默认查询
    this.bList = []
    this.getList()
  },
  data () {
    return {
      user: JSON.parse(window.localStorage.getItem('zlUser')),
      bList: null,
      pagenum: num,
      pagesize: size,
      loading: false,
      showWarning: false,
      keyword: ''
    }
  },
  methods: {
    /*
     * 查询
     */
    getList () {
      let token = window.localStorage.getItem('zlToken')
      // 获取跟单选购列表
      this.$http.get(api.brokerageList, {
        pagenum: this.pagenum,
        pagesize: this.pagesize,
        keyword: this.keyword
      }, {
        headers: {
          'x-token': token
        }
      })
      .then(({data: {code, data, msg}})=>{
        // console.log(data)
        if (code === 1) {
          if (data) {
            if (data.length === 0) {
              this.pagenum = -1
              return
            }
            for (let m of data) {
              this.bList.push(m)
            }
          }
        }
        else {
          $.toast(msg)
        }
      }).catch((e)=>{
        console.error('获取我佣金失败:' + e)
      }).finally(()=>{
        this.loading = false
        loader.hide()
        if (this.bList.length > 0) {
          this.$set('showWarning', false)
        }
        else {
          this.$set('showWarning', true)
        }
      })
    },
    /*
     * 读取更多数据
     */
    loadMore () {
      // 1.加载中 2.pagenum为负数 3.当前记录的条数<当前页数*每页条数
      if (this.loading || this.pagenum === -1) {
        // 满足上述2条件的任一条,均不加载更多
        return
      }
      this.loading = true
      // let scroller = $('.native-scroll')
      loader.show()
      setTimeout(() => {
        // 查询更多数据
        this.pagenum = this.pagenum + 1
        // 执行查询
        this.getList()
        // let scrollTop = scroller[0].scrollHeight - scroller.height()
        // scroller.scrollTop(scrollTop)
      }, 500)
    },
    search () {
      this.pagenum = 1
      this.pagesize = 10
      this.bList = []
      this.getList()
    },
    /*
     * 佣金直接提现
     */
    withdrawBro (id) {
      let token = window.localStorage.getItem('zlToken')
      this.$http.post(api.withdrawByBid, {
        bid: id
      }, {
        headers: {
          'x-token': token
        }
      })
      .then(({data: {code, msg}})=>{
        if (code === 1) {
          // 重新查询
          this.search()
          $.toast('提现申请已提交，请等待审核。')
        }
        else {
          $.toast(msg)
        }
      }).catch((e)=>{
        console.error('直接提现佣金失败:' + e)
      })
    }
  }
}
</script>

<style scoped>
.content {
  position: absolute;
  top: 2.1rem;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.grayLi {
  background-color: #DDDDDD;
}

.wucbtn{
  width: 2rem;
  height: 1rem;
  display: inline-block;
  /*position: absolute;*/
  /*top: 50%;*/
  margin-top: -1rem;
  /*right: 0;*/
  z-index: 5;
  background-color: #aaa744;
  border-radius: 0.2rem;
  font-size: 0.6rem;
  color: #fff;
  text-align: center;
  line-height: 1rem;
}
</style>
