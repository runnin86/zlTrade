<template>
  <!--顶部-->
  <div class="com-header">
   <div class="return"><a @click="this.$root.back()"><i class="iconfont">&#xe624;</i></a></div>
   <div class="header-title">商品列表</div>
  </div>
  <div class="header-h"></div>
  <!--顶部:over-->
  <!--排序-->
  <div class="list-sort">
   <ul>
    <li><a href="#"><span>综合<img src="/img/icon-px.png"></span></a></li>
    <li><a href="#"><span>销量<img src="/img/icon-px-up.png"></span></a></li>
    <li><a href="#"><span>价格<img src="/img/icon-px-down.png"></span></a></li>
   </ul>
  </div>
  <!--排序:over-->
  <!--列表-->
  <div class="list">
   <ul>
    <li>
     <div class="lb-img">
       <a v-link="{path: '/goodsCont', replace: false}">
         <img src="/img/pic-lb1.png">
       </a>
     </div>
     <div class="lb-div">
      <h3><a href="#">汽车钥匙扣的金属创意是否..</a></h3>
      <p><strong>￥230.00</strong><span>已售10件</span></p>
     </div>
    </li>
    <li>
     <div class="lb-img">
       <a v-link="{path: '/goodsCont', replace: false}">
         <img src="/img/pic-lb2.png">
       </a>
     </div>
     <div class="lb-div">
      <h3><a href="#">汽车钥匙扣的金属创意是否..</a></h3>
      <p><strong>￥230.00</strong><span>已售10件</span></p>
     </div>
    </li>
    <li>
     <div class="lb-img"><a v-link="{path: '/goodsCont', replace: false}"><img src="/img/pic-lb3.png"></a></div>
     <div class="lb-div">
      <h3><a href="#">汽车钥匙扣的金属创意是否..</a></h3>
      <p><strong>￥230.00</strong><span>已售10件</span></p>
     </div>
    </li>
    <li>
     <div class="lb-img"><a v-link="{path: '/goodsCont', replace: false}"><img src="/img/pic-lb1.png"></a></div>
     <div class="lb-div">
      <h3><a href="#">汽车钥匙扣的金属创意是否..</a></h3>
      <p><strong>￥230.00</strong><span>已售10件</span></p>
     </div>
    </li>
    <li>
     <div class="lb-img"><a v-link="{path: '/goodsCont', replace: false}"><img src="/img/pic-lb2.png"></a></div>
     <div class="lb-div">
      <h3><a href="#">汽车钥匙扣的金属创意是否..</a></h3>
      <p><strong>￥230.00</strong><span>已售10件</span></p>
     </div>
    </li>
    <li>
     <div class="lb-img"><a v-link="{path: '/goodsCont', replace: false}"><img src="/img/pic-lb3.png"></a></div>
     <div class="lb-div">
      <h3><a href="#">汽车钥匙扣的金属创意是否..</a></h3>
      <p><strong>￥230.00</strong><span>已售10件</span></p>
     </div>
    </li>
    <li>
     <div class="lb-img"><a v-link="{path: '/goodsCont', replace: false}"><img src="/img/pic-lb1.png"></a></div>
     <div class="lb-div">
      <h3><a href="#">汽车钥匙扣的金属创意是否..</a></h3>
      <p><strong>￥230.00</strong><span>已售10件</span></p>
     </div>
    </li>
    <li>
     <div class="lb-img"><a v-link="{path: '/goodsCont', replace: false}"><img src="/img/pic-lb2.png"></a></div>
     <div class="lb-div">
      <h3><a href="#">汽车钥匙扣的金属创意是否..</a></h3>
      <p><strong>￥230.00</strong><span>已售10件</span></p>
     </div>
    </li>
    <li>
     <div class="lb-img"><a v-link="{path: '/goodsCont', replace: false}"><img src="/img/pic-lb3.png"></a></div>
     <div class="lb-div">
      <h3><a href="#">汽车钥匙扣的金属创意是否..</a></h3>
      <p><strong>￥230.00</strong><span>已售10件</span></p>
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
export default {
  ready () {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
