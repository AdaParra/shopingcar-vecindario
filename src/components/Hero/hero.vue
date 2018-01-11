<template>
  <div>
    <section class="hero is-medium">
      <div class="hero-carousel">
        <CarouselVue :carouselItems="images" accent-color="is-info"></CarouselVue>
      </div>
      <div class="hero-head">
        <HeaderVue></HeaderVue>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered ">
            <div class="columns is-mobile is-centered">
              <div class="column is-half is-narrow">
                <h1 class="title is-1 is-size-4-mobile"> Tenemos tu Coche </h1>
                <h2 class="subtitle is-4 is-size-6-mobile">
                   ¡Te lo financiamos sin entrada!
                </h2>
              </div>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import HeaderVue from '../Header/header'
import CarouselVue from '../Carousel/carousel'

export default {
  name: 'Hero',
  data () {
    return {
      images: [
        { src: require('./assets/shopincar_portada_1.jpg') },
        { src: require('./assets/coche_1.jpg') }
      ]
    }
  },
  components: {
    HeaderVue,
    CarouselVue
  },
  methods: {
    onCarouselUpdate () {
      console.log('Carousel Updated!')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title{
    color: #80C142 !important;
    font-family: 'Kaushan Script', cursive;
}
.subtitle{
    color: white !important;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
}

</style>