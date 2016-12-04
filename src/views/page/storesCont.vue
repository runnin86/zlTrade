<template>
  <div class="content" transition="bounce">
    <!--门店图片-->
    <div class="store-pic"><img src="/img/pic-md.jpg">
      <div class="return"><a @click="this.$root.back()"><i class="iconfont">&#xe624;</i></a></div>
    </div>
    <!--门店图片:over-->
    <div class="store-cont">
      <div class="store-cont-top">
        <div class="store-cont-top1">
          <div class="store-cont-top1-left">
            <img src="/img/icon-md.png">
            <div class="s-title">
              <h3>开心汽车生活馆(海潮东路店)</h3>
              <p>8:00 — 18:00</p>
            </div>
          </div>
          <div class="store-cont-top1-right">
            <a href="#"><img src="/img/icon-tel.png"></a>
          </div>
        </div>
        <div class="store-cont-top2">
          <strong>六一中路115号(海潮东路如家酒店停车场内)</strong>
          <span>856m</span>
        </div>
      </div>
      <div class="store-cont-bottom">
        <span><i class="icon">&#xe643;</i>支付宝</span>
        <span><i class="icon">&#xe643;</i>刷卡</span>
        <span><i class="icon">&#xe643;</i>现金</span>
      </div>
    </div>

    <!--汽车服务-->
    <div class="store-serve">
      <div class="store-serve-top">
        <a href="store-serve-list.html">
          <strong>汽车服务</strong><i class="icon">&#xe624;</i>
        </a>
      </div>
      <div class="store-serve-bottom">
        <ul>
          <li>
            <section>
              <h3>普通洗车服务</h3>
              <p>整车泡沫冲洗，轮胎冲洗，车内吸尘，内饰简单清洁除尘。</p>
              <span>￥20.00</span>
            </section>
            <a href="javascript:;" class="a1" onclick="change_show()">购买</a>
            <a href="javascript:;" class="a2" onclick="change_show2()">议价</a>
          </li>
          <li>
            <section>
              <h3>普通洗车服务</h3>
              <p>整车泡沫冲洗，轮胎冲洗，车内吸尘，内饰简单清洁除尘。</p>
              <span>￥20.00</span>
            </section>
            <a href="javascript:;" class="a1" onclick="change_show()">购买</a>
          </li>
          <li>
            <section>
              <h3>普通洗车服务</h3>
              <p>整车泡沫冲洗，轮胎冲洗，车内吸尘，内饰简单清洁除尘。</p>
              <span>￥20.00</span>
            </section>
            <a href="javascript:;" class="a1" onclick="change_show()">购买</a>
            <a href="javascript:;" class="a2" onclick="change_show2()">议价</a>
          </li>
        </ul>
      </div>
    </div>
    <!--汽车服务:over-->

    <!--购买弹窗-->
    <div class="change-dialog" id="change-light">
      <div class="change-dialog-top">
        <h3>兑换码：<strong>AXS123456</strong></h3>
        <p>(请向店员展示您的兑换码)</p>
      </div>
      <div class="change-dialog-bottom">
        <input type="button" class="btn-no" value="取消" onClick="change_hide()">
        <input type="button" class="btn-ok" value="确定" >
      </div>
    </div>
    <div class="black" id="change-fade"></div>

    <div class="change-dialog" id="change-light2">
      <div class="change-dialog-top">
        <input type="text" class="price-txt" placeholder="请输入价格" />
      </div>
      <div class="change-dialog-bottom">
        <input type="button" class="btn-no" value="取消" onClick="change_hide2()">
        <input type="button" class="btn-ok" value="提交" >
      </div>
    </div>
    <div class="black" id="change-fade2"></div>
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
