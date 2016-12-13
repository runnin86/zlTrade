<template>
  <div></div>
</template>

<script>
import {loader} from '../util/util'
export default {
  ready () {
    loader.show()
    setTimeout(()=>{
      if (JSON.parse(window.localStorage.getItem('zlUser'))) {
        this.$route.router.go({path: '/home', replace: true})
      }
      else {
        this.$route.router.go({path: '/home', replace: true})
      }
    }, 800)
  }
}
</script>

<style scoped>
</style>
