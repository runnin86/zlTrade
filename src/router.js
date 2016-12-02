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
    '/login': {
      component (resolve) {
        require(['./views/user/login'], resolve)
      }
    },
    '/home': {
      component (resolve) {
        require(['./views/home'], resolve)
      }
    },
    '/cart': {
      component (resolve) {
        require(['./views/page/cart'], resolve)
      }
    },
    '/user': {
      component (resolve) {
        require(['./views/user/user'], resolve)
      }
    },
    '/user/info': {
      component (resolve) {
        require(['./views/user/userInfo'], resolve)
      }
    },
    '/user/order': {
      component (resolve) {
        require(['./views/user/userOrder'], resolve)
      }
    },
    '/user/orderCont': {
      component (resolve) {
        require(['./views/user/userOrderCont'], resolve)
      }
    },
    '/stores': {
      component (resolve) {
        require(['./views/page/stores'], resolve)
      }
    },
    '/stores/cont': {
      component (resolve) {
        require(['./views/page/storesCont'], resolve)
      }
    },
    '/page/usedCar': {
      component (resolve) {
        require(['./views/page/usedCar'], resolve)
      }
    },
    '/page/usedCarCont': {
      component (resolve) {
        require(['./views/page/usedCarCont'], resolve)
      }
    },
    '/page/rentalCar': {
      component (resolve) {
        require(['./views/page/rentalCar'], resolve)
      }
    },
    '/page/safeCar': {
      component (resolve) {
        require(['./views/page/safeCar'], resolve)
      }
    },
    '/page/safeCarCont': {
      component (resolve) {
        require(['./views/page/safeCarCont'], resolve)
      }
    },
    '/page/goodsList': {
      component (resolve) {
        require(['./views/page/goodsList'], resolve)
      }
    },
    '/page/goodsCont': {
      component (resolve) {
        require(['./views/page/goodsCont'], resolve)
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
