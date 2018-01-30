<template>
<div>
    <HeaderVue></HeaderVue>
        <section class="section"> 
        
          <div class="container">

            <h1 class="title"> Agendar Cita para: {{ detail.marca }} {{ detail.año }} </h1>
                <div class="field is-grouped">
                    <p class="control">
                        <span class="tag is-success is-large">{{ detail.precio }}</span>
                        <span class="tag is-success is-large">1 año de Garantia </span>
                    </p>
                </div>
            <div class="columns">
              <div class="column">
                <div class="field">
                  <label class="label">Nombre (s) </label>
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Correo electrónico </label>
                  <div class="control  has-icons-left has-icons-right">
                    <input class="input is-large" type="email" placeholder="">
                     <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fa fa-check"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label class="label"> Provincia </label>
                  <div class="select is-fullwidth is-large">
                        <select>
                          <option> Tenerife </option>
                          <option> Las Palmas </option>
                          <option> Madrid </option>
                          <option> La Gomera </option>
                        </select>
                  </div>
                </div>


              </div>

              <div class="column">
                <div class="field">
                  <label class="label">Apellido (s)</label>
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Confirma correo electrónico </label>
                  <div class="control  has-icons-left has-icons-right">
                    <input class="input is-large" type="email" placeholder="">
                     <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                        <span class="icon is-small is-right">
                          <i class="fa fa-check"></i>
                        </span>
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Telefono </label>
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="">
                  </div>
                </div>

              </div>
            </div>

            <div class="columns is-centered">
                <div class="column is-4">
                    <button class="button is-link is-medium is-focused is-fullwidth " v-on:click="onClick">  Enviar
                    </button>       
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

export default {
  name: 'Quote',
  data () {
    return {
    }
  },
  methods: {
    onClick () {
      this.$swal({
        title: 'Datos Enviados',
        text: 'Nos pondremos en contacto contigo ¡Pronto!',
        icon: 'success',
        button: 'Aceptar'
      })
    }
  },
  components: {
    HeaderVue,
    FooterVue
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
    .section {
        padding-top: 5rem !important;
    }
</style>