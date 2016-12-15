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
      <input type="text" class="serve-txt" placeholder="请输入……">
    </div>
    <input type="submit" class="serve-btn" value="搜索">
  </div>
  <!--搜索:over-->
  <div class="content bc-f0f0f0" transition="bounce" v-infinite-scroll="loadMore">
    <!--汽车服务-->
    <div class="store-serve" style="margin-top:2rem;background-color: #f0f0f0;">
      <div v-if="bList" class="store-serve-bottom">
        <ul>
          <!-- <li>
       		  <section>
            	<h3>普通洗车服务</h3>
            	<p>整车泡沫冲洗，轮胎冲洗，车内吸尘，内饰简单清洁除尘。</p>
            	<span>￥20.00</span>
         		</section>
        	</li> -->
          <li v-for="b in bList" track-by="$index">
            <section>
              <h3 :style="{color:(b.status===0?'#9c9c9c':'')}">
                {{b.name}}
                <span style="float:right;margin-right:0.4rem;">{{b.status | statusCommFilter}}</span>
              </h3>
              <div class="cont-title2">
                <span class="span1" style="left:0rem;">
                  {{b.fromPhone | phone}}
                </span>
                <span class="span3" style="width:6.2rem;margin-right:2rem;text-align:left;">
                  {{b.createTime | dataFilter 'yyyy-MM-dd HH:mm:ss'}}
                </span>
              </div>
              <span :style="[{'font-weight': 'bold','color':(b.status===0?'#9c9c9c':'')}]">{{b.money | currency '¥'}}</span>
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
      desc = ''
      break
    default:
      desc = ''
      break
  }
  return desc
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
      bList: null,
      pagenum: num,
      pagesize: size,
      loading: false,
      showWarning: false
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
        pagesize: this.pagesize
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
    }
  }
}
</script>

<style>
.content {
  position: absolute;
  top: 2.1rem;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
