import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cities from '@/components/Cities'
import City from '@/components/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cities',
      name: 'Cities',
      component: Cities,
      children:[
        {
          path: ':city',
          name: 'City',
          component: City
        }
      ]
    },
    
  ],
  mode:'history'
})
