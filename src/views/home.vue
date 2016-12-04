<template>
  <!--顶部-->
  <div class="ind-header">
    <div class="logo"><a href="#"><img src="/img/logo.png" alt="易车E族"></a></div>
    <div class="local">
      <a href="#"><i class="iconfont">&#xe614;</i> 北京</a>
    </div>
  </div>
  <div class="header-h"></div>
  <div class="ind-user">
    <div class="tx"><a href="#"><img src="/img/user-tx1.png"></a></div>
    <div class="hy">
      <h3>
        听说昵称越长越牛逼
        <!-- <img src="/img/icon-vip.png"> -->
        <!-- <span>普通会员</span> -->
      </h3>
      <!-- <p>(温馨提示：XXX就可升级金牌会员)</p> -->
    </div>
  </div>
  <!--顶部:over-->
  <!--图标-->
  <div class="ind-menu" style="display:block;">
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
  <div class="ind-ads">
    <div class="ads-img"><a href="#"><img src="/img/pic-ad1.png" alt=""></a></div>
    <div class="ads-img"><a href="#"><img src="/img/pic-ad2.png" alt=""></a></div>
    <div class="ads-img mg-b0"><a href="#"><img src="/img/pic-ad3.png" alt=""></a></div>
  </div>
  <!--三张广告图:over-->
  <!--服务列表-->
  <div class="ind-fw1-div">
    <div class="ind-fw1">
      <div class="fw1">
        <a href="#">
          <div class="fw1-img"><span></span><img src="/img/fw-tcfw.png"></div>
          <div class="fw1-div">
            <h3>拖车服务</h3><p>最快捷 最安全</p>
          </div>
        </a>
      </div>
      <div class="fw2">
        <a href="#">
          <div class="fw2-img"><span></span><img src="/img/fw-bxgm.png"></div>
          <div class="fw2-div">
            <h3>接送服务</h3><p>真正的服务到家</p>
          </div>
        </a>
      </div>
      <div class="fw2">
        <a href="#">
          <div class="fw2-img"><span></span><img src="/img/fw-dbwz.png"></div>
          <div class="fw2-div">
            <h3>代办违章</h3><p>省时省力好帮手</p>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="ind-fw2">
    <ul>
      <li>
        <a href="#">
          <div class="fw-img"><span></span><img src="/img/fw-qcpj.png"></div>
          <div class="fw-div">
            <h3>汽车配件</h3><p>好又多</p>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="fw-img"><span></span><img src="/img/fw-yhxc.png"></div>
          <div class="fw-div">
            <h3>优惠洗车</h3><p>闪闪发光的体验</p>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="fw-img"><span></span><img src="/img/fw-qczh.png"></div>
          <div class="fw-div">
            <h3>汽车装潢</h3><p>至尊品味</p>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="fw-img"><span></span><img src="/img/fw-bxgm.png"></div>
          <div class="fw-div">
            <h3>保险购买</h3><p>低至5折+10%优惠</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
  <div class="ind-fw2">
    <ul>
      <li>
        <a href="#">
          <div class="fw-img"><span></span><img src="/img/fw-qcyh.png"></div>
          <div class="fw-div">
            <h3>汽车养护</h3><p>天天送豪礼</p>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="fw-img"><span></span><img src="/img/fw-fwzq.png"></div>
          <div class="fw-div">
            <h3>服务专区</h3><p>马上上路吧</p>
          </div>
        </a>
      </li>
      <li>
        <a v-link="{ path: '/usedCar', replace: false}">
          <div class="fw-img"><span></span><img src="/img/fw-escmm.png"></div>
          <div class="fw-div">
            <h3>二手车买卖</h3><p>你需要的我有</p>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="fw-img"><span></span><img src="/img/fw-qcwx.png"></div>
          <div class="fw-div">
            <h3>汽车维修</h3><p>最专业的服务</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
  <div class="div-space"></div>
  <!--服务列表:over-->
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
