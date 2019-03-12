import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import City from '../pages/city/City'
import table from '../pages/table.vue'
import VueTable from '../pages/VueTable'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/VueTable',
      name: 'VueTable',
      component: VueTable
    }
  ]
})
