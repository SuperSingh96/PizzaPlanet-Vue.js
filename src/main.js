import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
//import Menu from './components/Menu'
const Menu=()=>import('./components/Menu')
import Admin from './components/Admin'
//import About from './components/AboutUs'
const About=()=>import('./components/AboutUs')
//import Contact from './components/ContactUs'
const Contact=()=>import('./components/ContactUs')
import History from './components/History'
import Delivery from './components/DeliveryInfo'
import OrderingGuide from './components/OrderingGuide'
import { store } from './Store/store'
import Accounting from 'accounting-js'

Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
  {
    path: '/', name: 'homeLink', components: {
      default: Home,
      'ordering-guide': OrderingGuide,
      'delivery': Delivery,
      'history': History,
    }
  },
  { path: '/menu', name: 'menuLink', component: Menu },
  { path: '*', redirect: '/' },
  { path: '/contact', name: 'contactLink', component: Contact },
  {
    path: '/admin', name: 'adminLink', component: Admin,
    beforeEnter: (to, from, next) => {
      alert('Authorized users only! Please login to continue')
      next()
    }
  },
  {
    path: '/about', name: 'aboutLink', component: About, children: [
      { path: '/history', name: 'historyLink', component: History },
      { path: '/delivery', name: 'deliveryLink', component: Delivery },
      { path: '/ordering-guide', name: 'orderingGuideLink', component: OrderingGuide }
    ]
  }
]
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash }
    }
  }
})

Vue.filter('currency', val => Accounting.formatMoney(val))
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
