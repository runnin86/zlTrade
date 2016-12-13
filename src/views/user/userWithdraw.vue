<template>
  <div class="content bc-f0f0f0" transition="bounce" v-infinite-scroll="loadMore">
    <!--顶部-->
    <div class="com-header">
      <div class="return"><a @click="this.$root.back()"><i class="iconfont">&#xe624;</i></a></div>
      <div class="header-title">我的提现</div>
    </div>
    <div class="header-h"></div>
    <!--顶部:over-->
    <!--我的提现-->
    <div class="store-serve" style="background-color: #f0f0f0;">
      <div v-if="wList" class="store-serve-bottom">
        <ul>
          <!-- <li>
       		  <section>
            	<h3>普通洗车服务</h3>
            	<p>整车泡沫冲洗，轮胎冲洗，车内吸尘，内饰简单清洁除尘。</p>
            	<span>￥20.00</span>#ff0000
         		</section>
        	</li> -->
          <li v-for="w in wList" track-by="$index">
            <section>
              <div class="cont-title2">
                <span style="width:6.2rem;margin-right:2rem;text-align:left;">
                  {{w.withdrawDate | dataFilter 'yyyy-MM-dd HH:mm:ss'}}
                </span>
                <span :style="[{'font-weight': 'bold','color':(w.withdrawStatus===0?'#9c9c9c':'')}]">
                  {{w.withdrawMoney | currency '¥'}}
                </span>
                <span style="float:right;margin-right:1.4rem;">
                  {{w.withdrawStatus | statusFilter}}
                </span>
              </div>
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
          您还没有提现记录
        </div>
      </div>
    </div>
    <!--我的提现:over-->
  </div>
</template>

<script>
import $ from 'zepto'
import Vue from 'vue'
import {loader, dateFormat} from '../../util/util'
import {api} from '../../util/service'

Vue.filter('statusFilter', function (value) {
  let desc = ''
  switch (value)
  {
    case 0:
      desc = '审核中'
      break
    case 1:
      desc = '通过'
      break
    case 2:
      desc = '拒绝'
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

let num = 1
let size = 10
export default {
  ready () {
    loader.show()
    // 默认查询
    this.wList = []
    this.getList()
  },
  data () {
    return {
      wList: null,
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
      this.$http.get(api.withdrawList, {
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
              this.wList.push(m)
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
        if (this.wList.length > 0) {
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
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
