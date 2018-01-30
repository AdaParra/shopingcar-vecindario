import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Header from '@/components/Header/header'
import Hero from '@/components/Hero/hero'
import titleSection from '@/components/titleSection/titleSection'
import Carousel from '@/components/Carousel/carousel'
import Card from '@/components/Card/data'
import detailCard from '@/components/Card/Detail/detail'
import Pagination from '@/components/Pagination/pagination'
import Contact from '@/components/Contact/contact'
import Shopping from '@/components/Shopping/shopping'
import Cars from '@/components/Cars/cars'
import Quote from '@/components/Quote/quote'
import About from '@/components/About/about'

import Footer from '@/components/Footer/footer'

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
    },
    {
      path: '/Card',
      name: 'Card',
      component: Card,
      props: true
    },
    {
      path: '/:id',
      name: 'Detail',
      component: detailCard,
      props: true
    },
    {
      path: '/Pagination',
      name: 'Pagination',
      component: Pagination
    },
    {
      path: '/titleSection',
      name: 'titleSection',
      component: titleSection
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/Cars',
      name: 'Cars',
      component: Cars
    },
    { path: '/quote:id/detail',
      name: 'Quote',
      component: Quote,
      props: true
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
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
