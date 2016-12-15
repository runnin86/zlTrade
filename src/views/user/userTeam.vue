<template>
<!--顶部-->
<div class="com-header">
  <div class="return"><a @click="this.$root.back()"><i class="iconfont">&#xe624;</i></a></div>
  <div class="header-title">我的团队</div>
</div>
<div class="content team bc-f0f0f0" transition="bounce">
  <!--顶部:over-->
  <div class="list-block">
    <ul>
      <li class="item-content2 item-link"  @click="showInfo('expertHistory',$event)">
        <div class="item-inner">
          <div class="item-title2" style="font-size:0.6rem;">
            <img src="/img/一级用户icon.png" width="27" height="21"
              style="margin-right:0.4rem;margin-bottom:-0.16rem;">
            一级客户
          </div>
          <div class="item-title2">
            <img src="/img/人数icon.png" width="24" height="12"
              style="margin-left:-1.8rem;margin-right:0.5rem;margin-bottom:0.18rem;">
            {{one.length > 0 ? one.length : ''}}
          </div>
          <div class="item-title2">
            <img src="/img/销量icon.png" width="18" height="19"
              style="margin-right:0.4rem;margin-bottom:-0.16rem;">
            {{oneLevelFlow | currency '¥'}}
          </div>
        </div>
      </li>
      <li class="item-content2" id="expertHistory" style="display: none;font-size:0.6rem;">
        <div class="item-inner fcfcfc"
          v-for="u in one | orderBy 'user_id' -1">
          <div class="item-title2">
            <img src="/img/用户icon.png" width="21" height="20"
              style="margin-left:1.6rem;margin-right:0.5rem;margin-bottom:-0.1rem;">
            {{u.user_phone}}
          </div>
          <!-- <div class="item-title2">
            <img src="/img/人数icon.png" width="24" height="12"
              style="margin-right:0.1rem;margin-bottom:-0.06rem;">
            {{u.oneLevelNum}}
          </div> -->
          <div class="item-title2">
            <img src="/img/销量icon.png" width="18" height="19"
              style="margin-right:0.4rem;margin-bottom:-0.16rem;">
            {{u.oneLevelFlow | currency '¥'}}
          </div>
        </div>
      </li>
    </ul>
    <ul>
      <li class="item-content2">
        <div class="item-inner">
          <div class="item-title2" style="font-size:0.6rem;">
            <img src="/img/二级用户icon.png" width="27" height="21"
              style="margin-right:0.4rem;margin-bottom:-0.16rem;">
            二级客户
          </div>
          <div class="item-title2">
            <img src="/img/人数icon.png" width="24" height="12"
              style="margin-left:-2.1rem;margin-right:0.5rem;margin-bottom:0.18rem;">
            {{two.length > 0 ? two.length : ''}}
          </div>
          <div class="item-title2">
            <img src="/img/销量icon.png" width="18" height="19"
              style="margin-right:0.4rem;margin-bottom:-0.16rem;">
            {{twoLevelFlow | currency '¥'}}
          </div>
        </div>
      </li>
    </ul>
    <ul>
      <li class="item-content2">
        <div class="item-inner">
          <div class="item-title2" style="font-size:0.6rem;">
            <img src="/img/三级用户icon.png" width="27" height="19"
              style="margin-right:0.4rem;margin-bottom:-0.16rem;">
            三级客户
          </div>
          <div class="item-title2">
            <img src="/img/人数icon.png" width="24" height="12"
              style="margin-left:-2.1rem;margin-right:0.5rem;margin-bottom:0.18rem;">
            {{three.length > 0 ? three.length : ''}}
          </div>
          <div class="item-title2">
            <img src="/img/销量icon.png" width="18" height="19"
              style="margin-right:0.4rem;margin-bottom:-0.16rem;">
            {{threeLevelFlow | currency '¥'}}
          </div>
        </div>
      </li>
    </ul>
    <ul v-show="total>0" v-cloak>
      <li class="item-content2">
        <div class="item-inner">
          <div class="item-title2" style="font-size:0.6rem;">
            总人数
          </div>
          <div class="item-title2">
          </div>
          <div class="item-title2">
            {{total}}
          </div>
        </div>
      </li>
    </ul>
    <br>
    <div>
      <div style="width:100%;height:100%;padding-left:1rem;padding-right:1rem;">
        <img src="/img/温馨提示.png" height="100%" width="100%">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {api} from '../../util/service'
import $ from 'zepto'

export default {
  ready () {
    this.$http.get(api.myTeam, {}, {
      headers: {
        'x-token': window.localStorage.getItem('zlToken')
      },
      emulateJSON: true
    })
    .then(({data: {code, msg, data}})=>{
      if (code === 1) {
        // console.log(data)
        this.$set('one', data.one)
        this.$set('two', data.two)
        this.$set('three', data.three)
        this.$set('total', data.total)
      }
      else {
        $.toast(msg)
      }
    }).catch((e)=>{
      console.error('获取我的团队失败:' + e)
    })
  },
  data () {
    return {
      one: [],
      two: [],
      three: [],
      total: 0
    }
  },
  methods: {
    showInfo (id, e) {
      if (document.getElementById(id).style.display === 'block') {
        document.getElementById(id).style.display = 'none'
      }
      else {
        document.getElementById(id).style.display = 'block'
      }
    }
  }
}
</script>

<style scoped>
@import './../../assets/css/list.css';
.team .content-padded {
  height: 100%;
  padding: .4rem .4rem;
}
.color {
  background-color: #ed8e07;
}
.img_full {
  width: 100%;
  height: 100%;
}
.list-block {
  margin: 2.2rem 0;
  height: 2.9rem;
  font-size:0.66rem;

  ul {
    height: 2.9rem;
  }

  .item-content {
    margin-top: .7rem;
    height: inherit;
  }
}
.fcfcfc {
  background-color: #fcfcfc;
}
.list-block .item-content2 {
  box-sizing: border-box;
  min-height: 2.2rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.list-block .item-title2 {
  -webkit-flex-shrink: 1;
  -ms-flex: 0 1 auto;
  -webkit-flex-shrink: 1;
  flex-shrink: 1;
  /*white-space: nowrap;*/
  position: relative;
  /*overflow: hidden;*/
  /*text-overflow: ellipsis;*/
  max-width: 100%;
  padding-left: 0.4rem;
}
.list-block ul:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: auto;
  right: auto;
  height: 1px;
  width: 100%;
  background-color: #e7e7e7;
  display: block;
  z-index: 15;
  -webkit-transform-origin: 50% 0%;
  transform-origin: 50% 0%;
}
.list-block .item-inner:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: auto;
  right: auto;
  height: 1px;
  width: 100%;
  background-color: #e7e7e7;
  display: block;
  z-index: 15;
  -webkit-transform-origin: 50% 0%;
  transform-origin: 50% 0%;
}
</style>
