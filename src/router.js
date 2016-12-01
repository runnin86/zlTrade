import $ from 'zepto'

export default function (router) {
  router.map({
    '*': {
      component (resolve) {
        require(['./views/welcome'], resolve)
      }
    },
    '/': {
      component (resolve) {
        require(['./views/welcome'], resolve)
      }
    },
    // '/login': {
    //   component (resolve) {
    //     require(['./views/user/login'], resolve)
    //   }
    // },
    '/home': {
      component (resolve) {
        require(['./views/home/home'], resolve)
      }
    },
    '/cart': {
      component (resolve) {
        require(['./views/cart/cart'], resolve)
      }
    },
    '/user': {
      component (resolve) {
        require(['./views/user/user'], resolve)
      }
    },
    '/user/order': {
      component (resolve) {
        require(['./views/user/userOrder'], resolve)
      }
    },
    '/vicinity': {
      component (resolve) {
        require(['./views/vicinity/stores'], resolve)
      }
    }
  })

  router.beforeEach(({abort, to, from, next, redirect}) => {
    let toPath = to.path
    let fromPath = from.path
    // console.log('to: ' + toPath + ' from: ' + fromPath)
    if (toPath.replace(/[^/]/g, '').length > 1 || toPath.substring(0, 6) === '/login') {
      router.app.isIndex = false
    }
    else {
      let depath = toPath === '/' || toPath === '/latestAnnounced'
      router.app.isIndex = depath ? 0 : 1
    }
    if (toPath === '/plan' && !window.localStorage.getItem('token')) {
      this.$route.router.go({path: '/happyPurchase', replace: true})
    }
    // 进入详情页时需要记录滚动条距离头部距离
    if (fromPath === '/plan') {
      router.app.planScrolltop = $('.content').scrollTop()
    }
    else if (fromPath === '/happyPurchase') {
      router.app.hpScrolltop = $('.content').scrollTop()
    }
    next()
  })

  router.afterEach(function (transition) {
    // console.log('成功浏览到: ' + transition.to.path)
    $.refreshScroller()
  })
}
