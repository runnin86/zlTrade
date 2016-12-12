<template>
  <!--顶部-->
  <div class="com-header">
    <div class="header-title">赠品</div>
  </div>
  <div class="header-h"></div>
  <!-- 顶部:over-->
  <!-- <div class="store-sel">
    <ul>
      <li><a href="#"><span>区域</span></a></li>
      <li><a href="#"><span>默认排序</span></a></li>
    </ul>
  </div>
  <div class="store-sel-h"></div>  -->
  <!--列表:over -->
  <div class="store-list bc-f0f0f0">
    <ul>
      <li v-for="p in list" track-by="$index">
        <!-- <a v-link="{ path: '/stores/cont', replace: false}"> -->
        <a href="javascript:void(0)">
          <div class="md-top">
            <img src="/img/icon-dhzq.png">
            <strong>{{p.brand}}</strong>
          </div>
          <div class="md-bottom">
            <div class="md-img">
              <img :src="'http://img.zulibuy.com/images/' + p.img">
            </div>
            <div class="md-div">
              <h3>{{p.productName}}</h3>
              <div class="md-zf">
                <span><i class="icon">&#xe643;</i>余额</span>
                <span><i class="icon">&#xe643;</i>刷卡</span>
                <span><i class="icon">&#xe643;</i>现金</span>
              </div>
              <p>{{p.productDesc}}</p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
  <!--列表:over-->
</template>

<script>
import {loader} from './../../util/util'
import {api} from './../../util/service'

let num = 1
let size = 100
export default {
  ready () {
    // 默认查询
    this.getProductList()
  },
  data () {
    return {
      list: [],
      pagenum: num,
      pagesize: size,
      loading: false
    }
  },
  methods: {
    /*
     * 查询
     */
    getProductList () {
      // 无分页默认不加载更多
      this.loading = false
      loader.hide()
      this.pagenum = -1
      // 获取商品列表
      this.$http.post(api.productList, {
        pagenum: this.pagenum,
        pagesize: this.pagesize,
        type: '2'
      }, {})
      .then(({data: {code, data, msg}})=>{
        if (code === 1) {
          if (data) {
            if (data.length === 0) {
              this.pagenum = -1
              return
            }
            for (let m of data) {
              this.list.push(m)
            }
          }
        }
        else {
          // $.toast(msg)
        }
      }).catch((e)=>{
        console.error('获取赠品列表失败:' + e)
      }).finally(()=>{
        this.loading = false
        loader.hide()
      })
    }
  }
}
</script>

<style scoped>

</style>
