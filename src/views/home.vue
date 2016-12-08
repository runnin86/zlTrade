<template>
  <!--顶部-->
  <div class="ind-header">
    <div class="logo"><a href="#"><img src="/img/logo.png" alt="易车E族"></a></div>
    <div class="local">
      <a href="javascript:void(0)"><i class="iconfont">&#xe614;</i> <!--北京--></a>
    </div>
  </div>
  <div class="header-h"></div>
  <div class="ind-user">
    <div class="tx">
      <a href="javactipt:void(0)">
        <img src="/img/user-tx1.png">
      </a>
    </div>
    <div class="hy">
      <h3>
        {{user?user.userName:'欢迎您!'}}
        <!-- <img src="/img/icon-vip.png"> -->
        <!-- <span>普通会员</span> -->
      </h3>
      <!-- <p>(温馨提示：XXX就可升级金牌会员)</p> -->
    </div>
  </div>
  <!--顶部:over-->
  <!--图标-->
  <div class="ind-menu" style="display:none;">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <ul>
            <li><a href="#"><img src="/img/icon-xc.png" alt="洗车"><p>洗车</p></a></li>
            <li><a href="#"><img src="/img/icon-tc.png" alt="拖车"><p>拖车</p></a></li>
            <li>
              <a v-link="{ path: '/rentalCar', replace: false}">
                <img src="/img/icon-zc.png" alt="租车"><p>租车</p>
              </a>
            </li>
            <li><a href="#"><img src="/img/icon-wx.png" alt="维修"><p>维修</p></a></li>
            <li><a href="#"><img src="/img/icon-mfyy.png" alt="免费云油"><p>免费运油</p></a></li>
            <li><a href="#"><img src="/img/icon-qcmr.png" alt="汽车美容"><p>汽车美容</p></a></li>
            <li>
              <a v-link="{ path: '/safeCar', replace: false}">
                <img src="/img/icon-cxdb.png" alt="车险代办">
                <p>车险代办</p>
              </a>
            </li>
            <li>
              <a v-link="{path: '/goodsList', replace: false}">
                <img src="/img/icon-jptj.png" alt="精品推荐"><p>精品推荐</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="swiper-slide">
          <ul>
            <li><a href="#"><img src="/img/icon-xc.png" alt="洗车"><p>洗车</p></a></li>
            <li><a href="#"><img src="/img/icon-tc.png" alt="拖车"><p>拖车</p></a></li>
            <li><a href="#"><img src="/img/icon-zc.png" alt="租车"><p>租车</p></a></li>
            <li><a href="#"><img src="/img/icon-wx.png" alt="维修"><p>维修</p></a></li>
            <li><a href="#"><img src="/img/icon-mfyy.png" alt="免费云油"><p>免费运油</p></a></li>
            <li><a href="#"><img src="/img/icon-qcmr.png" alt="汽车美容"><p>汽车美容</p></a></li>
            <li><a href="#"><img src="/img/icon-cxdb.png" alt="车险代办"><p>车险代办</p></a></li>
            <li>
              <a v-link="{path: '/goodsList', replace: false}">
                <img src="/img/icon-jptj.png" alt="精品推荐"><p>精品推荐</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="swiper-slide">
          <ul>
            <li><a href="#"><img src="/img/icon-xc.png" alt="洗车"><p>洗车</p></a></li>
            <li><a href="#"><img src="/img/icon-tc.png" alt="拖车"><p>拖车</p></a></li>
            <li><a href="#"><img src="/img/icon-zc.png" alt="租车"><p>租车</p></a></li>
            <li><a href="#"><img src="/img/icon-wx.png" alt="维修"><p>维修</p></a></li>
            <li><a href="#"><img src="/img/icon-mfyy.png" alt="免费云油"><p>免费运油</p></a></li>
            <li><a href="#"><img src="/img/icon-qcmr.png" alt="汽车美容"><p>汽车美容</p></a></li>
            <li><a href="#"><img src="/img/icon-cxdb.png" alt="车险代办"><p>车险代办</p></a></li>
            <li><a href="#"><img src="/img/icon-jptj.png" alt="精品推荐"><p>精品推荐</p></a></li>
          </ul>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add Pagination -->
      <!--<div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>-->
    </div>
  </div>
  <!--图标:over-->
  <!--三张广告图-->
  <!-- <div class="ind-ads">
    <div class="ads-img"><a href="#"><img src="/img/pic-ad1.png" alt=""></a></div>
    <div class="ads-img"><a href="#"><img src="/img/pic-ad2.png" alt=""></a></div>
    <div class="ads-img mg-b0"><a href="#"><img src="/img/pic-ad3.png" alt=""></a></div>
  </div> -->
  <!--三张广告图:over-->
  <!--列表-->
  <div class="list" style="padding-top:0.4rem;">
    <ul>
      <li>
        <div class="lb-img">
          <a v-link="{path: '/usedCarCont', replace: false}">
            <img src="/img/pic-lb1.png">
          </a>
        </div>
        <div class="lb-div">
          <h3><a href="#">汽车钥匙扣的金属创意是否..</a></h3>
          <p><strong>￥230.00</strong><span>有货</span></p>
        </div>
      </li>
      <li>
          <div class="lb-img">
            <a v-link="{path: '/usedCarCont', replace: false}">
            <img src="/img/pic-lb2.png">
            </a>
          </div>
          <div class="lb-div">
            <h3><a href="#">汽车钥匙扣的金属创意是否..</a></h3>
            <p><strong>￥230.00</strong><span>缺货</span></p>
          </div>
      </li>
      <li>
          <div class="lb-img">
            <a v-link="{path: '/usedCarCont', replace: false}">
              <img src="/img/pic-lb3.png">
            </a>
          </div>
          <div class="lb-div">
            <h3><a href="#">汽车钥匙扣的金属创意是否..</a></h3>
            <p><strong>￥230.00</strong><span>库存紧张</span></p>
          </div>
      </li>
      <li>
        <div class="lb-img"><a v-link="{path: '/goodsCont', replace: false}"><img src="/img/pic-lb1.png"></a></div>
        <div class="lb-div">
          <h3><a href="#">汽车钥匙扣的金属创意是否..</a></h3>
          <p><strong>￥230.00</strong><span>已售10件</span></p>
        </div>
      </li>
    </ul>
  </div>
  <!--列表:over-->
</template>

<script>
import swiper from 'swiper'

export default {
  ready () {
    // swiper初始化
    swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      autoHeight: true // enable auto height
    })
  },
  data () {
    return {
      user: JSON.parse(window.localStorage.getItem('zlUser'))
    }
  },
  methods: {
  }
}
</script>

<style scoped>
@import './../assets/css/swiper.min.css';

.swiper-container {
   width: 100%;
   height: 9rem;
}
.swiper-slide {
width:100%; height:100%;
   text-align: center;
   font-size: 18px;
   background: #fff;

}
.swiper-container .swiper-slide {
   height: 9rem;
}
</style>
