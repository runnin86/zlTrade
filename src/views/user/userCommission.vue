<template>
  <div class="content bc-f0f0f0" transition="bounce" v-infinite-scroll="loadMore">
    <!--顶部-->
    <div class="com-header">
      <div class="return"><a @click="this.$root.back()"><i class="iconfont">&#xe624;</i></a></div>
      <div class="header-title">我的佣金</div>
    </div>
    <div class="header-h"></div>
    <!--顶部:over-->
    <!--搜索-->
    <div class="store-serve-search"
      style="position: fixed;height:2rem; top: 2.15rem; left: 0; z-index: 10;background-color:#f0f0f0;">
      <div class="serve-white"><i class="icon">&#xe649;</i>
        <input type="text" class="serve-txt" placeholder="请输入……">
      </div>
      <input type="submit" class="serve-btn" value="搜索">
    </div>
    <!--搜索:over-->
    <!--汽车服务-->
    <div class="store-serve" style="margin-top:2rem;">
      <div class="store-serve-bottom">
        <ul>
          <li>
       		  <section>
            	<h3>普通洗车服务</h3>
            	<p>整车泡沫冲洗，轮胎冲洗，车内吸尘，内饰简单清洁除尘。</p>
            	<span>￥20.00</span>
         		</section>
        	</li>
        	<li>
       		  <section>
            	<h3>普通洗车服务</h3>
            	<p>整车泡沫冲洗，轮胎冲洗，车内吸尘，内饰简单清洁除尘。</p>
            	<span>￥20.00</span>
         		</section>
        	</li>
        	<li>
       		  <section>
            	<h3>普通洗车服务</h3>
            	<p>整车泡沫冲洗，轮胎冲洗，车内吸尘，内饰简单清洁除尘。</p>
            	<span>￥20.00</span>
         		</section>
        	</li>
        	<li>
       		  <section>
            	<h3>普通洗车服务</h3>
            	<p>整车泡沫冲洗，轮胎冲洗，车内吸尘，内饰简单清洁除尘。</p>
            	<span>￥20.00</span>
         		</section>
        	</li>
        	<li>
       		  <section>
            	<h3>普通洗车服务</h3>
            	<p>整车泡沫冲洗，轮胎冲洗，车内吸尘，内饰简单清洁除尘。</p>
            	<span>￥20.00</span>
         		</section>
        	</li>
        	<li>
       		  <section>
            	<h3>普通洗车服务</h3>
            	<p>整车泡沫冲洗，轮胎冲洗，车内吸尘，内饰简单清洁除尘。</p>
            	<span>￥20.00</span>
         		</section>
        	</li>
          <li v-for="b in bList" track-by="$index">
            <section>
              <h3>普通洗车服务</h3>
              <p>整车泡沫冲洗，轮胎冲洗，车内吸尘，内饰简单清洁除尘。</p>
              <span>{{b.money | currency '¥'}}</span>
            </section>
          </li>
        </ul>
      </div>
    </div>
    <!--汽车服务:over-->
  </div>
</template>

<script>
import $ from 'zepto'
import {loader} from '../../util/util'
import {api} from '../../util/service'

let num = 1
let size = 5
export default {
  ready () {
    // 默认查询
    this.getList()
  },
  data () {
    return {
      bList: [],
      pagenum: num,
      pagesize: size,
      loading: false
    }
  },
  methods: {
    /*
     * 自选订单查询(追号)
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
      })
    }
  }
}
</script>

<style>

</style>
