<template>
  <div class="content" transition="bounce">
  <!--顶部-->
  <div class="com-header">
    <div class="return"><a @click="this.$root.back()"><i class="iconfont">&#xe624;</i></a></div>
    <div class="header-title">商品详情</div>
  </div>
  <div class="header-h"></div>
  <!--顶部:over-->
  <!--图片展示-->
  <div class="used-banner">
    <div class="main_visual" style="height: 100%;">
      <div class="flicking_con">
        <span>
          <a href="javascript:void(0)"
            v-for="i in images | orderBy 'createTime'" track-by="$index">
            {{$index+1+''}}
          </a>
        </span>
      </div>
      <div class="main_image">
        <ul>
          <li v-for="p in images | orderBy 'createTime'">
            <span>
              <a href="javascript:void(0)">
                <img :src="'http://114.215.133.77:8000/images/' + p.resource"/>
              </a>
            </span>
          </li>
        </ul>
        <a href="javascript:;" id="btn_prev"></a>
        <a href="javascript:;" id="btn_next"></a>
      </div>
    </div>
  </div>
  <!--图片展示:over-->
  <div class="cont-title" v-if="info">
    <div class="cont-title1">
      <div class="cont-title1-left">
        <h3>{{info.productName + '-' + info.comments}}</h3>
        <p>{{info.price| currency '¥'}}</p>
      </div>
      <div class="cont-title1-right">
        <a href="#" class="active"><i class="iconfont">&#xe605;</i><p>收藏</p></a>
      </div>
    </div>
  </div>
  <div id="tabBox1" class="tabBox">
    <div class="hd">
      <ul>
        <li><a href="javascript:void(0)">商品介绍</a></li>
        <li><a href="javascript:void(0)">规格参数</a></li>
      </ul>
    </div>
    <div class="bd" id="tabBox1-bd">
      <!--商品介绍-->
      <div class="con">
        <div class="cont-container">
          <img v-for="sp in images | orderBy 'createTime' -1"
            :src="'http://114.215.133.77:8000/images/' + sp.resource"/>
        </div>
      </div>
      <!--商品介绍:over-->
      <!--规格参数-->
      <div class="con">
        <div class="cont-container">
          <p>规格参数后台添加修改规格参数后台添加修改,规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改</p>
          <p>规格参数后台添加修改规格参数后台添加修改,规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改</p>
          <p>规格参数后台添加修改规格参数后台添加修改,规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改</p>
        </div>
      </div>
      <!--规格参数:over-->
    </div>
  </div>
  <!--悬浮-->
  <div class="cont-tool-h"></div>
  <div class="used-tool">
    <input type="button" class="used-btn" style="background-color:#ffb744;"
      value="立即购买" @click="showBuy=true"/>
  </div>
  <!--悬浮:over-->
  <!--购买信息弹窗-->
  <div class="buy-info" id="buy-light" :style="{'display': (showBuy?'block':'none')}">
    <div class="buy-info1">
      <div class="gm-img"><img src="/img/pic-gm.jpg"></div>
      <div class="gm-div">
        <h3>迪加伦 汽车钥匙扣 金属 创意挂件装饰品 bv编织 卡通 车用钥...</h3>
        <p>￥230.00</p>
      </div>
      <div class="gm-close"><i class="icon" @click="showBuy=false">&#xe62f;</i></div>
    </div>
    <div class="buy-info3">
      <strong>购买数量</strong>
      <div class="num">
        <input type="button" class="num-minus" value="-">
        <input type="text" class="num-txt" value="1">
        <input type="button" class="num-add" value="+">
      </div>
    </div>
  </div>
  <div class="black" id="buy-black" @click="showBuy=false" :style="{'display': (showBuy?'block':'none')}"></div>
  <!--购买信息弹窗-->
  </div>
</template>

<script>
import {api} from '../../util/service'
import $ from 'zepto'

export default {
  ready () {
    // 获取商品信息
    this.getInfo(this.$route.params.id)
  },
  data () {
    return {
      showBuy: false,
      info: null,
      images: [],
      attr: null
    }
  },
  methods: {
    /*
     * 初始化轮播图
     * 说明:引入的jquery在initTab中公用,要在vue渲染后再执行,否则vue不会执行
     */
    initBanner () {
      require('../../assets/js/jquery.min')
      require('../../assets/js/jquery.event.drag-1.5.min')
      require('../../assets/js/jquery.touchSlider')
      let ub = require('../../assets/js/used-banner')
      ub.init()
    },
    /*
     * 初始化tab选项卡(在初始轮播图之后执行)
     */
    initTab () {
      // tab选项卡
      let {TouchSlide} = require('../../assets/js/TouchSlide.1.1')
      // 定义tab标签
      TouchSlide({
        slideCell: '#tabBox1',
        endFun: function (i) {
          // 高度自适应
          var bd = document.getElementById('tabBox1-bd')
          bd.parentNode.style.height = bd.children[i].children[0].offsetHeight + 'px'
          if (i > 0) {
            // 添加动画效果
            bd.parentNode.style.transition = '200ms'
          }
        }
      })
    },
    /*
     * 获取信息
     */
    getInfo: function (id) {
      // 获取商品信息
      this.$http.post(api.productDetail, {
        pid: id
      }, {}).then(({data: {code, msg, data}})=>{
        // console.log(data)
        if (code === 1) {
          this.$set('info', data.main)
          this.$set('images', data.photo)
          this.$set('attr', data.attr)
        }
        else {
          $.toast(msg)
          console.error('获取商品信息失败:' + msg)
        }
      }).catch(()=>{
        console.error('无法连接服务器-获取商品信息')
      }).finally(()=>{
        // 初始化轮播图
        this.initBanner()
        // 初始化选项卡
        this.initTab()
      })
    }
  }
}
</script>

<style scoped>
@import './../../assets/css/tabBox-cont.css';

</style>
