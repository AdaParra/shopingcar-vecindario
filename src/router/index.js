import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Header from '@/components/Header/header'
import Hero from '@/components/Hero/hero'
import Carousel from '@/components/Carousel/carousel'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Hero',
      name: 'Hero',
      component: Hero
    },
    {
      path: '/Carousel',
      name: 'Carousel',
      component: Carousel,
      props: true
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
