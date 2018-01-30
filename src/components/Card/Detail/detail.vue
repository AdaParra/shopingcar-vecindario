<template>
<div>
    <HeaderVue :info='detail'></HeaderVue>
    <section class="section">   
    <div class="container">
    <div class="columns is-centered">
        <div class="column is-8">
            <div class='carousel'>
              <CarouselVue :carouselItems="detail.imageDetail" accent-color="is-info"></CarouselVue>
            </div>
        </div>
    </div>
    <div class="columns is-centered">
        <div class="column is-8">
            <div class="content">
                <h1 class="title"> {{detail.marca}} {{detail.año}} </h1>
                <p class="subtitle is-5 is-spaced"> {{detail.modelo}} </p>
                <div class="field is-grouped">
                    <p class="control">
                        <span class="tag is-success is-large">{{ detail.precio }}</span>
                        <span class="tag is-success is-large">1 año de Garantia </span>
                    </p>
                </div>

                <ul>
                    <li> {{detail.km}} Km </li>
                    <li> {{detail.transmicion}} </li>
                    <li v-for='(caracteristica, index) in detail.caracteristicas' class="item-level" >
                        <p> {{ caracteristica.name }}</p>
                    </li>
                </ul>
                <blockquote>{{ detail.descripcion }}</blockquote>
            </div>
        </div>
    </div>
    <div class="columns is-centered">
        <div class="column is-4">
            <router-link :to="{ name: 'Quote', params: { id: detail.id, detail: detail } }" class="button is-link is-medium is-focused is-fullwidth ">  Agendar Cita
            </router-link>         
        </div>
    </div>
    </div>
    </section>
    <FooterVue></FooterVue>
</div>
</template>

<script>

import HeaderVue from '../../Header/header'
import CarouselVue from '../../Carousel/carousel'
import FooterVue from '../../Footer/footer'

export default {
  name: 'Detail',
  data () {
    return {
    }
  },
  components: {
    HeaderVue,
    FooterVue,
    CarouselVue
  },
  props: {
    id: {
      required: true
    },
    detail: {
      required: true
    }
  }
}
</script>

<style scoped>

.section{
    padding-top: 3.5rem !important;
}

img {
    height: 90vh !important;
}
.subtitle{
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
}
</style>
