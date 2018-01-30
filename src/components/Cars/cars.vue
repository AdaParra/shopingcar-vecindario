<template>
<div>
    <HeaderVue></HeaderVue>
    <TitleSection :info='infosection_1'></TitleSection>
    <Cards></Cards>
    <FooterVue></FooterVue>
</div>
    
</template>

<script>

import Cards from '../Card/data'
import HeaderVue from '../Header/header'
import FooterVue from '../Footer/footer'
import TitleSection from '../titleSection/titleSection'

export default {
  name: 'Cars',
  data () {
    return {
      infosection_1: { title: 'Vehículos Disponibles', subtitle: 'Conoce cada uno de los detalles de los coches que tenemos a la venta.' }
    }
  },
  components: {
    Cards,
    HeaderVue,
    TitleSection,
    FooterVue
  }
}
</script>