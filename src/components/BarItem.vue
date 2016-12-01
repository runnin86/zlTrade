<template>
  <li>
   <a v-link="{path: path, activeClass: 'active', replace: false}"
     @click="initTop()">
    <div class="tool-iconfont" v-text="icon"></div>
    <h3 v-text="label"></h3>
    <span style="display:block;" v-if="b>0"></span>
   </a>
  </li>
</template>
<script>
export default {
  props: {
    path: '',
    icon: '',
    label: '',
    img: '',
    focusimg: '',
    h: 0,
    t: 0,
    i: 38,
    b: 0
  },
  methods: {
    initTop () {
      this.$root.planScrolltop = 0
      this.$root.hpScrolltop = 0
    }
  },
  computed: {
    iconClass () {
      return `icon-${this.icon}`
    }
  }
}
</script>
<style scoped>
.tab-item {
  position: relative;
  display: table-cell;
  width: 1%;
  height: 2.5rem;
  color: #929292;
  text-align: center;
  vertical-align: middle;
}
</style>
