<template>
  <div class="home">
    <HeroVue></HeroVue>
    <TitleSection :info='infosection_1'></TitleSection>
    <CardVue></CardVue>
    <FooterVue></FooterVue>
  </div>
</template>

<script>

import HeroVue from './Hero/hero'
import TitleSection from './titleSection/titleSection'
import CardVue from './Card/data'
import FooterVue from './Footer/footer'

export default {
  name: 'Home',
  data () {
    return {
      infosection_1: { title: 'Nuestros Coches', subtitle: 'Conoce cada uno de los detalles de los coches que tenemos a la venta.' }
    }
  },
  components: {
    HeroVue,
    TitleSection,
    CardVue,
    FooterVue
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
