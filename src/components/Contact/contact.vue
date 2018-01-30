<template>
    <div>
        <HeaderVue/>
            <div class="marginTop"></div>
            <div class="container is-fluid">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14109.84523679624!2d-15.4371851!3d27.8570963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x61e45541cf36eca0!2sShoping+Car+Vecindario!5e0!3m2!1ses!2sve!4v1514927429232" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
            <section class="section">
              <div class="columns is-centered">
                <div class="column is-6 has-text-centered">
                  <h1 class="title is-2">Contactanos</h1>
                  <p class="subtitle">Esperamos que te pongas en contacto con nosotros ¡Pronto!</p>
                </div>
              </div>
                          <div class="columns is-centered has-text-centered">
              <div class="column is-3">
                <article class="message">
                  <div class="message-body">
                    <span class="icon is-large has-text-info">
                      <i class="fa fa-map-marker fa fa-3x"></i>
                    </span> 
                    <p class="title is-4 is-spaced">Visítanos</p>
                    <p class="subtitle is-6"> En la Av. Canarias 89</p>
                  </div>
                </article> 
              </div>
              <div class="column is-3">
                <article class="message">
                  <div class="message-body">
                    <span class="icon is-large has-text-info">
                      <i class="fa fa-phone  fa fa-3x"></i>
                    </span> 
                    <p class="title is-4 is-spaced"> Llamanos </p>
                    <p class="subtitle is-6"> (+34)  928 795 761 / 628 019 997</p>
                  </div>
                </article>
              </div>
              <div class="column is-3">
                <article class="message">
                  <div class="message-body">
                    <span class="icon is-large has-text-info">
                      <i class="fa fa-envelope-o  fa fa-3x"></i>
                    </span> 
                    <p class="title is-4 is-spaced">Envianos un Correo</p>
                    <p class="subtitle is-6"> shoping_car@hotmail.com</p>
                  </div>
                </article>
              </div>
              <!--<div class="column is-3">
                <article class="message">
                  <div class="message-body">
                    <p class="title is-5"> COMPRAMOS TU VEHÍCULO</p>
                  </div>
                </article>
              </div> -->
            </div>
            </section>

        <FooterVue/>
    </div>
    
</template>

<script>

import HeaderVue from '../Header/header'
import FooterVue from '../Footer/footer'

export default {
  name: 'Contact',
  data () {
    return {
      item1: '',
      item2: '',
      item3: '',
      item4: '',
      item5: ''

    }
  },
  components: {
    HeaderVue,
    FooterVue
  }
}
</script>

<style scoped>
    .marginTop{
      margin-top: 50px;
    }
    .container {
      position: relative !important;
      padding-bottom: 60vh !important;
      height: 0 !important;
      overflow: hidden !important;
    }
    .container iframe {
      position: absolute !important;
      top:0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 60vh !important;
    }
    .title{
        color: #80C142 !important;
        font-family: 'Kaushan Script', cursive;
    }
    .subtitle{
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
    }

</style>
