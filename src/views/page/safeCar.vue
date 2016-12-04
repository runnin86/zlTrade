<template>
  <!--顶部-->
  <div class="com-header">
    <div class="return"><a @click="this.$root.back()"><i class="iconfont">&#xe624;</i></a></div>
    <div class="header-title">车险代办</div>
  </div>
  <div class="header-h"></div>
  <!--顶部:over-->
  <div class="car-list">
    <ul>
      <li>
        <a v-link="{path: '/safeCarCont', replace: false}">
          <div class="car-top">
            <div class="car-img"><span></span><img src="/img/pic-cx1.png"></div>
            <div class="car-div">
              <h3>中国平安保险</h3>
              <p>商业险满1000返200</p>
              <p>最高1000</p>
            </div>
          </div>
          <div class="car-bottom">
            <img src="/img/icon-dian.png">车险新贵，折减特惠，极速响应，安心不贵
          </div>
        </a>
      </li>
      <li>
        <a v-link="{path: '/safeCarCont', replace: false}">
          <div class="car-top">
            <div class="car-img"><span></span><img src="/img/pic-cx2.png"></div>
            <div class="car-div">
              <h3>中国平安保险</h3>
              <p>商业险满1000返200</p>
              <p>最高1000</p>
            </div>
          </div>
          <div class="car-bottom">
            <img src="/img/icon-dian.png">车险新贵，折减特惠，极速响应，安心不贵
          </div>
        </a>
      </li>
      <li>
        <a v-link="{path: '/safeCarCont', replace: false}">
          <div class="car-top">
            <div class="car-img"><span></span><img src="/img/pic-cx3.png"></div>
            <div class="car-div">
              <h3>中国平安保险</h3>
              <p>商业险满1000返200</p>
              <p>最高1000</p>
            </div>
          </div>
          <div class="car-bottom">
            <img src="/img/icon-dian.png">车险新贵，折减特惠，极速响应，安心不贵
          </div>
        </a>
      </li>
      <li>
        <a v-link="{path: '/safeCarCont', replace: false}">
          <div class="car-top">
            <div class="car-img"><span></span><img src="/img/pic-cx1.png"></div>
            <div class="car-div">
              <h3>中国平安保险</h3>
              <p>商业险满1000返200</p>
              <p>最高1000</p>
            </div>
          </div>
          <div class="car-bottom">
            <img src="/img/icon-dian.png">车险新贵，折减特惠，极速响应，安心不贵
          </div>
        </a>
      </li>
      <li>
        <a v-link="{path: '/safeCarCont', replace: false}">
          <div class="car-top">
            <div class="car-img"><span></span><img src="/img/pic-cx2.png"></div>
            <div class="car-div">
              <h3>中国平安保险</h3>
              <p>商业险满1000返200</p>
              <p>最高1000</p>
            </div>
          </div>
          <div class="car-bottom">
            <img src="/img/icon-dian.png">车险新贵，折减特惠，极速响应，安心不贵
          </div>
        </a>
      </li>
      <li>
        <a v-link="{path: '/safeCarCont', replace: false}">
          <div class="car-top">
            <div class="car-img"><span></span><img src="/img/pic-cx3.png"></div>
            <div class="car-div">
              <h3>中国平安保险</h3>
              <p>商业险满1000返200</p>
              <p>最高1000</p>
            </div>
          </div>
          <div class="car-bottom">
            <img src="/img/icon-dian.png">车险新贵，折减特惠，极速响应，安心不贵
          </div>
        </a>
      </li>
    </ul>
  </div>
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
