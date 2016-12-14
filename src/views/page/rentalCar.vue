<template>
  <!--顶部-->
  <div class="com-header">
    <div class="return"><a @click="this.$root.back()"><i class="iconfont">&#xe624;</i></a></div>
    <div class="header-title">租车</div>
  </div>
  <div class="header-h"></div>
  <!--顶部:over-->
  <!--筛选弹窗-->
  <div class="used-dialog" id="used-light" :style="{'display': (showSel?'block':'none')}">
    <div class="used-dialog-top">
      <a href="javascript:;" @click="showSel=false"><i class="icon">&#xe624;</i></a>
      <h3>价格 · 品牌 · 车型</h3>
    </div>
    <div class="used-dialog-top-h"></div>
    <div class="used-dialog-middle">
      <div class="sxbox">
        <div class="sxbox-top"><strong>价格</strong><span>100-200</span></div>
        <div class="sxbox-bottom">
          <div class="sxbox-bottom-container">
            <label>不限</label><label class="active">100-200</label><label>201-400</label><label>401-600</label><label>601-1000</label><label>1001-2000</label><label>2001-4000</label><label>4000+</label>
          </div>
        </div>
      </div>
      <div class="sxbox">
        <div class="sxbox-top"><strong>品牌</strong><span>奥迪</span></div>
        <div class="sxbox-bottom">
          <div class="sxbox-bottom-container">
            <label>宝马</label><label class="active">奥迪</label><label>奔驰</label><label>别克</label><label>现代</label><label>大众</label><label>长安</label><label>奔驰</label><label>别克</label><label>现代</label><label>大众</label><label>长安</label><label>奔驰</label><label>别克</label><label>现代</label><label>大众</label><label>长安</label><label>奔驰</label><label>别克</label><label>现代</label><label>大众</label><label>长安</label><label>奔驰</label><label>别克</label><label>现代</label><label>大众</label><label>长安</label>
          </div>
        </div>
      </div>
      <div class="sxbox">
        <div class="sxbox-top"><strong>车型</strong><span>0-5万</span></div>
        <div class="sxbox-bottom">
          <div class="sxbox-bottom-container">
            <label>SUV</label><label class="active">经济型</label><label>商务型</label><label>跑车</label><label>皮卡</label><label>面包车</label><label>商务型</label><label>跑车</label><label>皮卡</label><label>面包车</label>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br />
    </div>
    <div class="used-dialog-bottom-h"></div>
    <div class="used-dialog-bottom">
      <input type="button" class="btn-ok"  value="确定"/>
      <input type="button" class="btn-no" value="取消" @click="showSel=false" />
    </div>
  </div>
  <div class="used-black" id="used-fade" :style="{'display': (showSel?'block':'none')}"></div>
  <!--筛选弹窗:over-->
  <div class="tabBox-hd-h"></div>
  <div id="tabBox1" class="tabBox">
    <div class="hd">
      <ul>
        <li><a href="javascript:void(0)">综合排序</a></li>
        <li><a href="javascript:void(0)">价格</a></li>
        <input type="button" class="sx-btn" value="筛选" @click="showSel=true" />
      </ul>
    </div>
    <div class="bd" id="tabBox1-bd">
      <!--综合排序-->
      <div class="con">
        <ul>
          <li>
            <a v-link="{path: '/usedCarCont', replace: false}">
              <div class="used-img"><span></span><img src="/img/pic-esc1.png"></div>
              <div class="used-div">
                <h3>凯美瑞 2012款 俊瑞 2.0S耀动版  </h3>
                <p>3.1万公里 / 2012年 / 商家</p>
                <div class="used-price">
                  <span>100</span>天
                </div>
              </div>
            </a>
          </li>
          <li>
            <a v-link="{path: '/usedCarCont', replace: false}">
              <div class="used-img"><span></span><img src="/img/pic-esc2.png"></div>
              <div class="used-div">
                <h3>凯美瑞 2012款 俊瑞 2.0S耀动版  </h3>
                <p>3.1万公里 / 2012年 / 商家</p>
                <div class="used-price">
                  <span>300</span>天
                </div>
              </div>
            </a>
          </li>
          <li>
            <a v-link="{path: '/usedCarCont', replace: false}">
              <div class="used-img"><span></span><img src="/img/pic-esc3.png"></div>
              <div class="used-div">
                <h3>凯美瑞 2012款 俊瑞 2.0S耀动版  </h3>
                <p>3.1万公里 / 2012年 / 商家</p>
                <div class="used-price">
                  <span>200</span>天
                </div>
              </div>
            </a>
          </li>
          <li>
            <a v-link="{path: '/usedCarCont', replace: false}">
              <div class="used-img"><span></span><img src="/img/pic-esc1.png"></div>
              <div class="used-div">
                <h3>凯美瑞 2012款 俊瑞 2.0S耀动版  </h3>
                <p>3.1万公里 / 2012年 / 商家</p>
                <div class="used-price">
                  <span>150</span>天
                </div>
              </div>
            </a>
          </li>
          <li>
            <a v-link="{path: '/usedCarCont', replace: false}">
              <div class="used-img"><span></span><img src="/img/pic-esc2.png"></div>
              <div class="used-div">
                <h3>凯美瑞 2012款 俊瑞 2.0S耀动版  </h3>
                <p>3.1万公里 / 2012年 / 商家</p>
                <div class="used-price">
                  <span>180</span>天
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <!--综合排序:over-->
      <!--价格-->
      <div class="con">
        <li>
          <a v-link="{path: '/usedCarCont', replace: false}">
            <div class="used-img"><span></span><img src="/img/pic-esc1.png"></div>
            <div class="used-div">
              <h3>凯美瑞 2012款 俊瑞 2.0S耀动版  </h3>
              <p>3.1万公里 / 2012年 / 商家</p>
              <div class="used-price">
                <span>100</span>天
              </div>
            </div>
          </a>
        </li>
        <li>
          <a v-link="{path: '/usedCarCont', replace: false}">
            <div class="used-img"><span></span><img src="/img/pic-esc2.png"></div>
            <div class="used-div">
              <h3>凯美瑞 2012款 俊瑞 2.0S耀动版  </h3>
              <p>3.1万公里 / 2012年 / 商家</p>
              <div class="used-price">
                <span>300</span>天
              </div>
            </div>
          </a>
        </li>
        <li>
          <a v-link="{path: '/usedCarCont', replace: false}">
            <div class="used-img"><span></span><img src="/img/pic-esc3.png"></div>
            <div class="used-div">
              <h3>凯美瑞 2012款 俊瑞 2.0S耀动版  </h3>
              <p>3.1万公里 / 2012年 / 商家</p>
              <div class="used-price">
                <span>200</span>天
              </div>
            </div>
          </a>
        </li>
      </div>
      <!--价格:over-->
    </div>
  </div>
</template>

<script>
require('../../assets/js/jquery.min')
let {TouchSlide} = require('../../assets/js/TouchSlide.1.1')

export default {
  ready () {
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
  data () {
    return {
      showSel: false
    }
  },
  methods: {
  }
}
</script>

<style>
.tabBox-hd-h{ width:100%; height:1.9rem; overflow:hidden;}
.tabBox { width: 100%; margin:0; }
.tabBox .hd { width: 100%; height: 1.9rem; border-bottom: 1px solid #dddddd; background-color: #fff; position:fixed; top:2.15rem; left:0; z-index:2;}
.tabBox .hd ul { width: 100%; }
.tabBox .hd ul li { width: 33.33%; height: 1.9rem; display: block; float: left; }
.tabBox .hd ul li a { width: 99%; height: 1.2rem; display: block; text-align: center; line-height: 1.2rem; margin: 0.35rem 0;  font-size: 0.6rem; color: #333; border-right: 1px #c8c8c8 solid;}
.tabBox .hd ul li.on { height: 1.9rem; border-bottom: 0.1rem #009ad9 solid; }
.tabBox .hd ul li.on a { color: #009ad9; }
.tabBox .bd { width: 100%; }
.tabBox .bd ul { width: 100%; padding-bottom: 0.375rem; overflow: hidden;}
.tabBox .bd li{ width:100%; display:block; overflow:hidden; margin-top:0.375rem;}
.tabBox .bd li a{ width:100%; display:block; overflow:hidden; padding: 0.5rem 0; background-color: #fff;}
.tabBox .bd li a .used-img{ width: 5.25rem; height: 3.5rem; overflow: hidden; float: left; margin-left: 0.5rem; text-align: center; vertical-align: middle;}
.tabBox .bd li a .used-img span{ height: 100%; display: inline-block; vertical-align: middle;}
.tabBox .bd li a .used-img img{ max-width: 100%; max-height: 100%; vertical-align: middle;}
.tabBox .bd li a .used-div{ width: 9.3rem; height: 3.5rem; overflow: hidden; float: left; margin-left: 0.5rem; position: relative;}
.tabBox .bd li a .used-div h3{ width: 9.3rem; max-height: 1.8rem; overflow: hidden; font-size: 0.65rem; color: #383838; line-break: 0.9rem;}
.tabBox .bd li a .used-div p{ font: 0.55rem; color: #9c9c9c; padding-top: 0.1rem;}
.tabBox .bd li a .used-div .used-price{ width: 9.3rem; height: 1rem; background-color: #fff; overflow: hidden; position: absolute; bottom: 0; left: 0; font-size: 0.5rem; color: #ff0000; line-height: 1rem;}
.tabBox .bd li a .used-div .used-price span{ font-size: 0.75rem;}
.tabBox .hd .sx-btn{width: 33.33%; height: 1.9rem; display: block; float: left; border: none; background: none; cursor: pointer; font-size: 0.6rem; color: #333; text-align: center; }
</style>
