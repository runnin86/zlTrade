<template>
  <!--顶部-->
  <div class="com-header">
    <div class="return"><a @click="this.$root.back()"><i class="iconfont">&#xe624;</i></a></div>
    <div class="header-title">商品详情</div>
  </div>
  <div class="header-h"></div>
  <!--顶部:over-->
  <div class="content" transition="bounce" style="top:2.1rem;">
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
                  <img :src="'http://img.zulibuy.com/images/' + p.resource"/>
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
          <h3>{{info.productName + (info.comments?'-' + info.comments:'')}}</h3>
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
          <div class="cont-container" v-if="info">
            <div class="cont-title1" style="margin-bottom:0.6rem;">
              <div class="cont-title2">
                <span class="span">
                  商品名称:&nbsp;&nbsp;
                  <a>{{info.productName}}</a>
                </span>
              </div>
              <div class="cont-title2">
                <span class="span">
                  说&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;明:&nbsp;&nbsp;
                  <a>{{{info.comments}}}</a>
                </span>
              </div>
            </div>
            <img v-for="sp in images | orderBy 'createTime' -1"
              :src="'http://img.zulibuy.com/images/' + sp.resource"/>
          </div>
        </div>
        <!--商品介绍:over-->
        <!--规格参数-->
        <div class="con">
          <div class="cont-container">
            <div class="cont-title" v-if="attr">
              <div class="cont-title2">
                <span class="pcSpan1" style="width:auto;">
                  轴距(mm)：<a>{{attr.wheelBase}}</a>
                </span>
                <span class="span3" style="margin-right:2rem;text-align:left;">
                  制动(m)：<a>{{attr.distanceGround}}</a>
                </span>
              </div>
              </br>
              <div class="cont-title2">
                <span class="pcSpan1">
                  电机：<a>{{attr.engine}}</a>
                </span>
                <span class="span3" style="margin-right:2rem;text-align:left;">
                  整车备重：<a>{{attr.transmissionCase}}</a>
                </span>
              </div>
              </br>
              <div class="cont-title2">
                <span class="pcSpan1">
                  高&nbsp;&nbsp;&nbsp;&nbsp;度：<a>{{attr.height}}</a>
                </span>
                <span class="span3" style="margin-right:2rem;text-align:left;">
                  颜&nbsp;&nbsp;&nbsp;&nbsp;色：<a>{{attr.cube}}</a>
                </span>
              </div>
              </br>
              <div class="cont-title2">
                <span class="pcSpan1">
                  方向盘电动助力：<a>{{attr.size === '1' ? '是' : '否'}}</a>
                </span>
                <span class="span3" style="margin-right:2rem;text-align:left;">
                  空调系统：<a>{{attr.specification.size === '1' ? '是' : '否'}}</a>
                </span>
              </div>
              </br>
              <div class="cont-title2">
                <span class="pcSpan1">
                  座位：<a>{{attr.color}}</a>
                </span>
                <span class="span3" style="margin-right:2rem;text-align:left;">
                  中控门锁：<a>{{attr.shelfLife}}</a>
                </span>
              </div>
              </br>
              <div class="cont-title2">
                <span class="pcSpan1">
                  最小离地距离(mm)：<a>{{attr.displacement}}</a>
                </span>
              </div>
              </br>
              <div class="cont-title2">
                <span class="pcSpan1">
                  最小转弯半径(m)：<a>{{attr.nw}}</a>
                </span>
              </div>
              </br>
              <div class="cont-title2">
                <span class="pcSpan1">
                  最大爬坡(％)：<a>{{attr.rpw}}</a>
                </span>
              </div>
              </br>
              <div class="cont-title2">
                <span class="pcSpan1">
                  电池：<a>{{attr.power}}</a>
                </span>
              </div>
              </br>
              <div class="cont-title2">
                <span class="pcSpan1">
                  最高车速(km／h)：<a>{{attr.gWeight}}</a>
                </span>
              </div>
              </br>
              <div class="cont-title2">
                <span class="pcSpan1">
                  续航里程(km)：<a>{{attr.nWeight}}</a>
                </span>
              </div>
              </br>
            </div>
          </div>
        </div>
        <!--规格参数:over-->
      </div>
    </div>
  </div>
  <!--悬浮-->
  <div class="cont-tool-h"></div>
  <div class="used-tool">
    <input type="button" class="used-btn" style="background-color:#ffb744;"
      value="立即预定" @click="doBuy"/>
  </div>
  <!--悬浮:over-->
  <!--预定信息弹窗-->
  <div class="buy-info" id="buy-light" :style="{'display': (showBuy?'block':'none')}">
    <div class="buy-info1">
      <div class="gm-img">
        <img v-if="info" :src="'http://img.zulibuy.com/images/' + info.img">
      </div>
      <div class="gm-div">
        <h3 v-if="info">{{info.productName + '-' + info.productDesc}}</h3>
        <p v-if="info">{{info.price| currency '¥'}}</p>
      </div>
      <div class="gm-close">
        <i class="icon" @click="showBuy=false">&#xe62f;</i>
      </div>
    </div>
    <div class="buy-info3">
      <strong>预定数量</strong>
      <div class="num">
        <input type="button" class="num-minus" value="-" disabled="true" @click="this.buyNum<2?1:this.buyNum--">
        <input type="text" class="num-txt" v-model="buyNum" disabled="true">
        <input type="button" class="num-add" value="+" disabled="true" @click="this.buyNum++">
      </div>
    </div>
  </div>
  <div class="black" id="buy-black" @click="showBuy=false" :style="{'display': (showBuy?'block':'none')}"></div>
  <!--预定信息弹窗-->
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
      buyNum: 1,
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
        if (this.info) {
          setTimeout(() => {
            // 初始化轮播图
            this.initBanner()
            // 初始化选项卡
            this.initTab()
          }, 500)
        }
      })
    },
    doBuy () {
      if (!this.showBuy) {
        this.showBuy = true
        return
      }
      else {
        if (this.info.productId && this.buyNum > 0) {
          let token = window.localStorage.getItem('zlToken')
          this.$http.post(api.saveOrder, {
            pid: this.info.productId,
            num: this.buyNum
          }, {
            headers: {
              'x-token': token
            }
          })
          .then(({data: {code, msg, data}})=>{
            if (code === 1) {
              this.showBuy = false
              this.buyNum = 1
              $.toast('预定成功，请至店内提车')
            }
            else {
              $.toast(msg)
            }
          }).catch((e)=>{
            console.error('预定失败:' + e)
          })
        }
      }
    }
  }
}
</script>

<style scoped>
.pcSpan1 { height: 1rem; display: inline-block; font-size: 0.55rem; color: #9c9c9c; position: absolute; top: 0; left: 0.5rem; }

.tabBox { width: 100%; overflow: hidden; margin:0.25rem 0; background-color:#fff;}
.tabBox .hd { width: 100%; height: 1.9rem; border: 1px solid #dddddd; background-color: #fff; }
.tabBox .hd ul { width: 105%; }
.tabBox .hd ul li { width: 50%; height: 1.9rem; display: block; float: left; }
.tabBox .hd ul li a { width: 99%; height: 1.3rem; display: block; text-align: center; line-height: 1.3rem; margin: 0.35rem 0; border-right: 1px #ddd solid; font-size: 0.6rem; color: #333; }
.tabBox .hd ul li.on { height: 1.9rem; border-bottom: 0.1rem #009ad9 solid; }
.tabBox .hd ul li.on a { color: #009ad9; }
.tabBox .bd { width: 100%; }
.tabBox .bd ul { width: 100%; }
.tabBox .bd ul li { width: 100%; display: block; overflow: hidden; margin: 0.5rem 0 1rem; -moz-box-shadow: 0 2px 5px #dddddd; -webkit-box-shadow: 0 2px 5px #dddddd; box-shadow: 0 2px 5px #dddddd; }
.tabBox .bd ul li .list-img { width: 100%; overflow: hidden; }
.tabBox .bd ul li .list-img img { width: 100%; display: block; }
.tabBox .bd ul li .list-title { padding: 0.2rem 0.5rem; }
.tabBox .bd ul li .list-title a { font-size: 0.875rem; color: #5c5c5c; line-height: 1.2rem; }
.tabBox .bd ul li .list-info { width: 100%; padding: 0.2rem 0 0.8rem; overflow: hidden; background-color: #fff; }
.tabBox .bd ul li .list-info-left { float: left; font-size: 0.8rem; color: #9c9c9c; padding-left: 0.8rem; }
.tabBox .bd ul li .list-info-left span { font-size: 1.2rem; color: #eb7629; padding-right: 0.3rem; }
.tabBox .bd ul li .list-info-right { float: right; font-size: 0.8rem; color: #9c9c9c; padding-right: 0.8rem; text-align: right; }
.tabBox .bd ul li .list-info-right img { height: 1rem; vertical-align: middle; margin: 0 0.3rem 0.2rem; }
.tabBox .bd ul li .list-info-right span { color: #6dbc69; }
.tabBox .bd ul li .list-info-right label { font-size: 1rem; color: #b4b4b4; padding: 0 0.5rem; }
</style>
