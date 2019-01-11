import Vue from 'vue'
import Router from 'vue-router'
import LeftNav from '@/components/nav/leftNav.vue'
import Home from '@/views/home.vue'
import Dashboard from '@/views/workbench/dashboard.vue'
import Mission from '@/views/workbench/mission/mission.vue'
import Plan from '@/views/workbench/plan.vue'
import Maillist from '@/views/workbench/maillist.vue'
import NotFound from '@/components/404.vue'
import OrderOne from '@/views/orderManager/orderOne.vue'
import FirstIdnex from '@/views/firstIndex/firstIndex.vue'
import RightContent from '@/components/nav/rightContent.vue'
import HouseStatus from '@/views/houseStatus/houseStatus'
import HouseControl from '@/views/houseControl/houseControl'
import Bill from '@/views/bill/bill'
import Customer from '@/views/customer/customer'
import Agreement from '@/views/agreement/agreement'
import Promotion from '@/views/promotion/promotion'
import AccountsReceivable from '@/views/accountsReceivable/accountsReceivable'
import Setting from '@/views/setting/setting'
import Reports from '@/views/reports/reports'
import OrderList from '@/views/orderList/orderList'

// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/views/login'], resolve)

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      type: 'login',
      component: Login
    },
    {
      path: '*',
      component: NotFound  //当相应路由没有内容的时候
    },
    {
      path: '/',
      type: 'home',
      name: 'first',
      redirect: '/firstIndex',
      component: Home,
      menuShow: true,
      children: [
        {
          path: '/firstIndex',
          component: RightContent,
          // component: RightNav,
          name: 'firstIndex', // 当前路由的name
          leaf: true, // 只有一个节点
          iconCls: 'iconfont icon-home', // 图标样式class
          menuShow: true,
          children: [
            { path: '/firstIndex', component: FirstIdnex, name: '首页', menuShow: true }
          ]
        }
      ]

    },
    {
      path: '/orderList',
      type: 'home',
      name: 'house',
      redirect: 'orderList',
      component: Home,
      menuShow: true,
      children: [
        {
          path: '/orderList',
          component: RightContent,
          name: 'orderList',
          leaf: true,
          iconCls: 'iconfont icon-home',
          menuShow: true,
          children: [
            {path: '/orderList',  component: OrderList, name: '订单', menuShow: true}
          ] 
        }
      ]
    },
    {
      path: '/houseStatus',
      type: 'home',
      name: 'house',
      redirect: 'houseStatus',
      component: Home,
      menuShow: true,
      children: [
        {
          path: '/houseStatus',
          component: RightContent,
          name: 'houseStatus',
          leaf: true,
          iconCls: 'iconfont icon-home',
          menuShow: true,
          children: [
            {path: '/houseStatus',  component: HouseStatus, name: '房态', menuShow: true}
          ] 
        }
      ]
    },
    {
      path: '/houseControl',
      type: 'home',
      name: 'house',
      redirect: 'houseControl',
      component: Home,
      menuShow: true,
      children: [
        {
          path: '/houseControl',
          component: RightContent,
          name: 'houseControl',
          leaf: true,
          iconCls: 'iconfont icon-home',
          menuShow: true,
          children: [
            {path: '/houseControl',  component: HouseControl, name: '房控', menuShow: true}
          ] 
        }
      ]
    },
    {
      path: '/bill',
      type: 'home',
      name: 'house',
      redirect: 'bill',
      component: Home,
      menuShow: true,
      children: [
        {
          path: '/bill',
          component: RightContent,
          name: 'bill',
          leaf: true,
          iconCls: 'iconfont icon-home',
          menuShow: true,
          children: [
            {path: '/bill',  component: Bill, name: '现付账', menuShow: true}
          ] 
        }
      ]
    },
    {
      path: '/customer',
      type: 'home',
      name: 'house',
      redirect: 'customer',
      component: Home,
      menuShow: true,
      children: [
        {
          path: '/customer',
          component: RightContent,
          name: 'customer',
          leaf: true,
          iconCls: 'iconfont icon-home',
          menuShow: true,
          children: [
            {path: '/customer',  component: Customer, name: '客户', menuShow: true}
          ] 
        }
      ]
    },
    {
      path: '/reports',
      type: 'home',
      name: 'house',
      redirect: 'reports',
      component: Home,
      menuShow: true,
      children: [
        {
          path: '/reports',
          component: RightContent,
          name: 'reports',
          leaf: true,
          iconCls: 'iconfont icon-home',
          menuShow: true,
          children: [
            {path: '/reports',  component: Reports, name: '报表', menuShow: true}
          ] 
        }
      ]
    },
    {
      path: '/agreement',
      type: 'home',
      name: 'house',
      redirect: 'agreement',
      component: Home,
      menuShow: true,
      children: [
        {
          path: '/agreement',
          component: RightContent,
          name: 'agreement',
          leaf: true,
          iconCls: 'iconfont icon-home',
          menuShow: true,
          children: [
            {path: '/agreement',  component: Agreement, name: '协议', menuShow: true}
          ] 
        }
      ]
    },
    {
      path: '/promotion',
      type: 'home',
      name: 'house',
      redirect: 'promotion',
      component: Home,
      menuShow: true,
      children: [
        {
          path: '/promotion',
          component: RightContent,
          name: 'promotion',
          leaf: true,
          iconCls: 'iconfont icon-home',
          menuShow: true,
          children: [
            {path: '/promotion',  component: Promotion, name: '促销', menuShow: true}
          ] 
        }
      ]
    },
    {
      path: '/accountsReceivable',
      type: 'home',
      name: 'house',
      redirect: 'accountsReceivable',
      component: Home,
      menuShow: true,
      children: [
        {
          path: '/accountsReceivable',
          component: RightContent,
          name: 'accountsReceivable',
          leaf: true,
          iconCls: 'iconfont icon-home',
          menuShow: true,
          children: [
            {path: '/accountsReceivable',  component: AccountsReceivable, name: '财务', menuShow: true}
          ] 
        }
      ]
    },
    {
      path: '/setting',
      type: 'home',
      name: 'house',
      redirect: 'setting',
      component: Home,
      menuShow: true,
      children: [
        {
          path: '/setting',
          component: RightContent,
          name: 'setting',
          leaf: true,
          iconCls: 'iconfont icon-home',
          menuShow: true,
          children: [
            {path: '/setting',  component: Setting, name: '设置', menuShow: true}
          ] 
        }
      ]
    },
    {
      path: '/work',
      type: 'home', // 根据type区分不同模块（顶部导航）
      name: 'home', // 根据name区分不同子模块（左侧导航）
      redirect: '/dashboard',
      component: Home,
      menuShow: true,
      children: [
        {
          path: '/dashboard',
          component: LeftNav,
          name: 'dashboard', // 当前路由的name
          leaf: true, // 只有一个节点
          iconCls: 'iconfont icon-home', // 图标样式class
          menuShow: true,
          children: [
            { path: '/dashboard', component: Dashboard, name: '工作台测试页', menuShow: true }
          ]
        },
        {
          path: '/mySet',
          component: LeftNav,
          name: '我的设置',
          iconCls: 'el-icon-menu',
          menuShow: true,
          children: [
            { path: '/mySet/plan', component: Plan, name: '行程计划', menuShow: true },
            { path: '/mySet/mission', component: Mission, name: '我的任务', menuShow: true },
            { path: '/mySet/maillist', component: Maillist, name: '通讯录', menuShow: true }
          ]
        }
      ]
    },
    {
      path: '/orderManager',
      type: 'home',
      name:'order',
      redirect: '/orderOne',
      component: Home,
      menuShow: true,
      children: [
          {
              path: '/orderOne',
              component: LeftNav,
              name: 'orderOne', // 当前路由的name
              leaf: true, // 只有一个节点
              iconCls: 'iconfont icon-home', // 图标样式class
              menuShow: true,
              children: [
                { path: '/orderOne', component: OrderOne, name: '订单1', menuShow: true }
              ]
            }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  // console.log('to:' + to.path)
  if (to.path.startsWith('/login')) {
    window.localStorage.removeItem('access-user')
    next()
  } else if(to.path.startsWith('/register')){
    window.localStorage.removeItem('access-user')
    next()
  } else {
    let user = JSON.parse(window.localStorage.getItem('access-user'))
    if (!user) {
      next({path: '/login'})
    } else {
      next()
    }
  }
});

// router.addRoutes(orderManagerRouter)

export default router
