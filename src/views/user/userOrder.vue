<template>
  <!--顶部-->
  <div class="com-header">
    <div class="return">
      <a @click="this.$root.back()">
        <i class="iconfont">&#xe624;</i>
      </a>
    </div>
    <div class="header-title">我的订单</div>
  </div>
  <div class="header-h"></div>
  <!--顶部:over-->
  <div class="content" transition="bounce">
    <div class="tabBox-hd-h"></div>
    <div id="tabBox1" class="tabBox">
      <div class="hd">
        <ul>
          <li><a href="javascript:void(0)">全部</a></li>
          <li><a href="javascript:void(0)">未提</a></li>
          <li><a href="javascript:void(0)">已提</a></li>
          <li><a href="javascript:void(0)">取消</a></li>
        </ul>
      </div>
      <div class="bd" id="tabBox1-bd" style="display:none;">
        <!--全部-->
        <div class="con">
          <ul>
            <!-- <li>
              <a href="#">
                <div class="odlb-top">
                  <strong>订单编号：AED48815646</strong><span>待付款</span>
                </div>
                <div class="odlb-middle">
                  <div class="od-img">
                    <span></span>
                    <img src="/img/pic-odnr.png">
                  </div>
                  <div class="od-div">
                    <div class="od-div-left">
                      360度可调角度 汽车小圆镜盲点镜倒车镜 两个装
                      <p>颜色:黑白&nbsp;&nbsp;尺寸:46码</p>
                    </div>
                    <div class="od-div-right">
                      <p><strong>￥200.00</strong></p>
                      <p>X 1</p>
                    </div>
                  </div>
                </div>
              </a>
              <div class="odlb-bottom">
                <p>共计 1 件商品  合计:<span>￥200.00</span></p>
              </div>
            </li> -->
            <li v-for="o in orderList" track-by="$index">
              <a>
                <div class="odlb-top">
                  <strong>订单编号：{{o.order_no}}</strong>
                  <span>{{o.order_status | statusOrderFilter}}</span>
                </div>
                <div class="odlb-middle">
                  <div class="od-img">
                    <span></span>
                    <img :src="'http://img.zulibuy.com/images/' + o.img">
                  </div>
                  <div class="od-div">
                    <div class="od-div-left">
                      {{o.product_name}}
                      <p>说明:{{o.product_desc}}&nbsp;&nbsp;</p>
                    </div>
                    <div class="od-div-right">
                      <p><strong>{{o.price| currency '¥'}}</strong></p>
                      <p>X {{o.nums}}</p>
                    </div>
                  </div>
                  <div class="od-div">
                    <div class="od-div-left" style="width:3.3rem;">
                      <p>订单日期:&nbsp;&nbsp;</p>
                    </div>
                    <div class="od-div-right" style="width:7.2rem;margin-top:0.2rem;">
                      <p>{{o.order_date | dataFilter 'yyyy-MM-dd HH:mm:ss'}}</p>
                    </div>
                  </div>
                </div>
              </a>
              <div class="odlb-bottom">
                <p>共计 {{o.nums}} 件商品  合计:<span>{{o.total_price| currency '¥'}}</span></p>
              </div>
              <hr/>
            </li>
          </ul>
        </div>
        <!--全部:over-->
        <!--未提-->
        <div class="con">
          <ul>
            <li v-for="o in orderList" track-by="$index">
              <div v-if="o.order_status === 0">
                <a>
                  <div class="odlb-top">
                    <strong>订单编号：{{o.order_no}}</strong>
                    <span>{{o.order_status | statusOrderFilter}}</span>
                  </div>
                  <div class="odlb-middle">
                    <div class="od-img">
                      <span></span>
                      <img :src="'http://img.zulibuy.com/images/' + o.img">
                    </div>
                    <div class="od-div">
                      <div class="od-div-left">
                        {{o.product_name}}
                        <p>说明:{{o.product_desc}}&nbsp;&nbsp;</p>
                      </div>
                      <div class="od-div-right">
                        <p><strong>{{o.price| currency '¥'}}</strong></p>
                        <p>X {{o.nums}}</p>
                      </div>
                    </div>
                    <div class="od-div">
                      <div class="od-div-left" style="width:3.3rem;">
                        <p>订单日期:&nbsp;&nbsp;</p>
                      </div>
                      <div class="od-div-right" style="width:7.2rem;margin-top:0.2rem;">
                        <p>{{o.order_date | dataFilter 'yyyy-MM-dd HH:mm:ss'}}</p>
                      </div>
                    </div>
                  </div>
                </a>
                <div class="odlb-bottom">
                  <p>共计 {{o.nums}} 件商品  合计:<span>{{o.total_price| currency '¥'}}</span></p>
                </div>
                <hr/>
              </div>
            </li>
          </ul>
        </div>
        <!--未提:over-->
        <!--已提-->
        <div class="con">
          <ul>
            <li v-for="o in orderList" track-by="$index">
              <div v-if="o.order_status === 1">
                <a>
                  <div class="odlb-top">
                    <strong>订单编号：{{o.order_no}}</strong>
                    <span>{{o.order_status | statusOrderFilter}}</span>
                  </div>
                  <div class="odlb-middle">
                    <div class="od-img">
                      <span></span>
                      <img :src="'http://img.zulibuy.com/images/' + o.img">
                    </div>
                    <div class="od-div">
                      <div class="od-div-left">
                        {{o.product_name}}
                        <p>说明:{{o.product_desc}}&nbsp;&nbsp;</p>
                      </div>
                      <div class="od-div-right">
                        <p><strong>{{o.price| currency '¥'}}</strong></p>
                        <p>X {{o.nums}}</p>
                      </div>
                    </div>
                    <div class="od-div">
                      <div class="od-div-left" style="width:3.3rem;">
                        <p>订单日期:&nbsp;&nbsp;</p>
                      </div>
                      <div class="od-div-right" style="width:7.2rem;margin-top:0.2rem;">
                        <p>{{o.order_date | dataFilter 'yyyy-MM-dd HH:mm:ss'}}</p>
                      </div>
                    </div>
                  </div>
                </a>
                <div class="odlb-bottom">
                  <p>共计 {{o.nums}} 件商品  合计:<span>{{o.total_price| currency '¥'}}</span></p>
                </div>
                <hr/>
              </div>
            </li>
          </ul>
        </div>
        <!--已提:over-->
        <!--取消-->
        <div class="con">
          <ul>
            <li v-for="o in orderList" track-by="$index">
              <div v-if="o.order_status === 2">
                <a>
                  <div class="odlb-top">
                    <strong>订单编号：{{o.order_no}}</strong>
                    <span>{{o.order_status | statusOrderFilter}}</span>
                  </div>
                  <div class="odlb-middle">
                    <div class="od-img">
                      <span></span>
                      <img :src="'http://img.zulibuy.com/images/' + o.img">
                    </div>
                    <div class="od-div">
                      <div class="od-div-left">
                        {{o.product_name}}
                        <p>说明:{{o.product_desc}}&nbsp;&nbsp;</p>
                      </div>
                      <div class="od-div-right">
                        <p><strong>{{o.price| currency '¥'}}</strong></p>
                        <p>X {{o.nums}}</p>
                      </div>
                    </div>
                    <div class="od-div">
                      <div class="od-div-left" style="width:3.3rem;">
                        <p>订单日期:&nbsp;&nbsp;</p>
                      </div>
                      <div class="od-div-right" style="width:7.2rem;margin-top:0.2rem;">
                        <p>{{o.order_date | dataFilter 'yyyy-MM-dd HH:mm:ss'}}</p>
                      </div>
                    </div>
                  </div>
                </a>
                <div class="odlb-bottom">
                  <p>共计 {{o.nums}} 件商品  合计:<span>{{o.total_price| currency '¥'}}</span></p>
                </div>
                <hr/>
              </div>
            </li>
          </ul>
        </div>
        <!--取消:over-->
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'zepto'
import Vue from 'vue'
import {loader, dateFormat} from '../../util/util'
import {api} from '../../util/service'

/*
 * 日期转换
 */
Vue.filter('dataFilter', function (value, format) {
  return dateFormat(new Date(value), format)
})

Vue.filter('statusOrderFilter', function (value) {
  let desc = ''
  switch (value)
  {
    case 0:
      desc = '待提车'
      break
    case 1:
      desc = '已提车'
      break
    case 2:
      desc = '取消'
      break
    default:
      desc = ''
      break
  }
  return desc
})

let num = 1
let size = 10

export default {
  ready () {
    loader.show()
    // 默认查询
    this.orderList = []
    this.getList()
  },
  data () {
    return {
      orderList: null,
      pagenum: num,
      pagesize: size,
      loading: false,
      showWarning: false
    }
  },
  methods: {
    initTab () {
      require('../../assets/js/jquery.min')
      let {TouchSlide} = require('../../assets/js/TouchSlide.1.1')
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
     * 查询
     */
    getList () {
      let token = window.localStorage.getItem('zlToken')
      // 获取跟单选购列表
      this.$http.get(api.orderList, {
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
              this.orderList.push(m)
            }
          }
        }
        else {
          $.toast(msg)
        }
      }).catch((e)=>{
        console.error('获取我的订单失败:' + e)
      }).finally(()=>{
        this.loading = false
        loader.hide()
        if (this.orderList.length > 0) {
          this.$set('showWarning', false)
        }
        else {
          this.$set('showWarning', true)
        }
        setTimeout(() => {
          this.initTab()
        }, 500)
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

<style scoped>
.tabBox-hd-h{ width:100%; height:1.9rem; overflow:hidden;}
.tabBox { width: 100%; margin:0; }
.tabBox .hd { width: 100%; height: 1.9rem; border-bottom: 1px solid #dddddd; background-color: #fff; position:fixed; top:2.15rem; left:0; z-index:5;}
.tabBox .hd ul { width: 100%; }
.tabBox .hd ul li { width: 25%; height: 1.9rem; display: block; float: left; }
.tabBox .hd ul li a { width: 99%; height: 1.2rem; display: block; text-align: center; line-height: 1.2rem; margin: 0.35rem 0;  font-size: 0.6rem; color: #333; }
.tabBox .hd ul li.on { height: 1.9rem; border-bottom: 0.1rem #009ad9 solid; }
.tabBox .hd ul li.on a { color: #009ad9; }
.tabBox .bd { width: 100%; }
.tabBox .bd ul { width: 100%; }
.tabBox .bd li{ width:100%; display:block; overflow:hidden; margin-top:0.375rem; background-color:#fff;}
.tabBox .bd li a{ width:100%; display:block; overflow:hidden;}
.tabBox .bd li a .odlb-top{ width:15rem; height:1.5rem; margin:0 auto; border-bottom:1px #ebebeb dashed; line-height:1.5rem;}
.tabBox .bd li a .odlb-top strong{ float:left; font-size:0.5rem; color:#5c5c5c;}
.tabBox .bd li a .odlb-top span{ float:right; font-size:0.5rem; color:#ff0002;}
.tabBox .bd li a .odlb-middle{ width:15rem; margin:0 auto; padding:0.5rem 0; overflow:hidden; border-bottom:1px #e7e7e7 dashed;}
.tabBox .bd li a .odlb-middle .od-img { width: 3.75rem; height: 3.75rem; overflow: hidden; float: left; }
.tabBox .bd li a .odlb-middle .od-img a { width: 3.75rem; height: 3.75rem; display: block; text-align: center; vertical-align: middle; }
.tabBox .bd li a .odlb-middle .od-img a span { height: 100%; vertical-align: middle; display: inline-block; }
.tabBox .bd li a .odlb-middle .od-img a img { max-width: 100%; max-height: 100%; vertical-align: middle; }
.tabBox .bd li a .odlb-middle .od-div { width: 10.75rem; overflow: hidden; float: right; }
.tabBox .bd li a .odlb-middle .od-div-left { width: 7.25rem; overflow: hidden; float: left; }
.tabBox .bd li a .odlb-middle .od-div-left a { width: 7.25rem; max-height: 2.55rem; display: block; overflow: hidden; line-height: 0.85rem; font-size: 0.6rem; color: #4e4e4e; }
.tabBox .bd li a .odlb-middle .od-div-left p { font-size: 0.55rem; color: #9c9c9c; padding-top: 0.2rem; }
.tabBox .bd li a .odlb-middle .od-div-right { width: 3.3rem; overflow: hidden; float: right; font-size: 0.55rem; color: #9c9c9c; line-height: 0.85rem; text-align: right; }
.tabBox .bd li a .odlb-middle .od-div-right strong { font-size: 0.6rem; color: #383838; }
.tabBox .bd li .odlb-bottom{ width:15rem; overflow:hidden; margin:0 auto; padding:0.3rem 0 0.3rem;}
.tabBox .bd li .odlb-bottom p{ width:100%; text-align:right; font-size:0.5rem; color:#383838; padding:0.1rem 0;}
.tabBox .bd li .odlb-bottom p span{ font-size:0.6rem; color:#ff0000;}
.tabBox .bd li .odlb-bottom p a{ width:3.1rem; height:1.05rem; display:inline-block; border:1px #c8c8c8 solid; background-color:#fff; border-radius:0.1rem; text-align:center; line-height:1.05rem; font-size:0.55rem; color:#5c5c5c;}
</style>
