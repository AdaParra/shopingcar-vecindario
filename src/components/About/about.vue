<template>
<div>
    <HeaderVue></HeaderVue>

        <section class="hero">
          <!-- Hero content: will be in the middle -->
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title is-2 ">
                Conocenos
              </h1>
              <p class="subtitle"> Shoping Car es una empresa dedicada a la compra y venta de coches </p>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="columns is-centered">
            <div class="column is-5 has-text-justified">
              <h1 class="title is-3"> Nuestra Historia </h1>
              <p> <strong> SHOPING CAR, </strong>nacida en 2000 ,con el propósito de dar un servicio personalizado y al mejor precio a nuestros clientes. Ha conseguido afianzarse en el mercado de la venta de vehículos de segunda mano y seminuevos en Gran Canaria. <br> Ofreciendo una contrastada calidad y un excelente servicio post-venta. <br> <strong> Luis Arvelo, </strong> de su responsabilidad depende de que esa empresa esté hoy por hoy en el nivel que está, gracias a su buena gestión, experiencia en el campo y su excelente relación con sus clientes.</p>
            </div>
            <div class="column is-6">
                  <div class='carousel'>
                      <CarouselVue :carouselItems="image" accent-color="is-info"></CarouselVue>
                  </div>
            </div>
          </div>

          <h1 class="title is-3 has-text-centered">
            Shoping Car te brinda
          </h1>

          <div class="columns is-centered">
            <div class="column is-2">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="./assets/garantia1.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="subtitle is-6 has-text-centered"> 1 año de Garantia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-2">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="./assets/revision.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="subtitle is-6 has-text-centered">Revisión Completa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-2">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="./assets/fi1.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="subtitle is-6 has-text-centered">Financiamiento sin entrada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-2">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="./assets/dinero2.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="subtitle is-6 has-text-centered">Dinero por tu coche</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    <FooterVue></FooterVue>
</div>
</template>

<script>

import HeaderVue from '../Header/header'
import FooterVue from '../Footer/footer'
import CarouselVue from '../Carousel/carousel'

export default {
  name: 'About',
  data () {
    return {
      image: [
        { src: require('./assets/about_1.png') },
        { src: require('./assets/about_2.png') },
        { src: require('./assets/about_3.png') },
        { src: require('./assets/about_4.png') }
      ]
    }
  },
  components: {
    HeaderVue,
    FooterVue,
    CarouselVue
  }
}
</script>

<style scoped>
    .title{
        color: #ad0909 !important;
        font-family: 'Kaushan Script', cursive;
    }
    .subtitle{
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
    }
    .hero{
      padding-top: 30px !important;
    }
</style>
