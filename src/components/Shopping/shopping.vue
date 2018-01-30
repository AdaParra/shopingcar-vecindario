<template>
<div>
    <HeaderVue></HeaderVue>
    <section class="hero">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-2 ">
            {{ item1 }}
          </h1>
          <p class="subtitle"> Completa el siguiente formulario y nos pondremos en contacto contigo </p>
        </div>
      </div>
    </section>

        <section class="section"> 
          <div class="container">
            <h1 class="title"> Datos Personales </h1>
            <div class="columns">
              <div class="column">
                <div class="field">
                  <label class="label">Nombre (s) </label>
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="">
                  </div>
                </div>
                <div class="field">
                  <label class="label">Apellido (s)</label>
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Movil </label>
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="">
                  </div>
                </div>


              </div>

              <div class="column">
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
            </div>
            <br>
            <h1 class="title"> Datos del Vehiculo </h1>
            <div class="columns">
              <div class="column">
                <div class="field">
                  <label class="label">Marca </label>
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Año </label>
                  <div class="control  has-icons-left has-icons-right">
                    <input class="input is-large" type="email" placeholder="">
                  </div>
                </div>

                <div class="field">
                  <label class="label"> Transmisión </label>
                  <div class="select is-fullwidth is-large">
                        <select>
                          <option> Manual </option>
                          <option> Automatica </option>
                        </select>
                  </div>
                </div>


              </div>

              <div class="column">
                <div class="field">
                  <label class="label">Modelo</label>
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Kilometraje </label>
                  <div class="control  has-icons-left has-icons-right">
                    <input class="input is-large" type="email" placeholder="">
                  </div>
                </div>
                <div class="field">
                  <label class="label"> Color </label>
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="">
                  </div>
                </div>

              </div>
            </div>
            <div class="columns is-centered">
              <div class="column is-6">
                <div class="field">
                  <label class="label">Caracteristicas Destacadas</label>
                  <div class="control">
                    <textarea class="textarea" placeholder="Describa las Caracteristicas Adicionales de su Coche"></textarea>
                  </div>
                </div>
              </div>
              <div class="column is-3">
                <div class="field">
                  <label class="label">Foto Exterior</label>
                  <div class="file is-info has-name is-boxed is-fullwidth">
                    <label class="file-label">
                      <input class="file-input" type="file" name="resume">
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fa fa-cloud-upload"></i>
                        </span>
                        <span class="file-label">
                          Cargar Foto
                        </span>
                      </span>
                      <span class="file-name">
                        Screen Shot 2017-07-29 at 15.54.25.png
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="column is-3">
                <div class="field">
                  <label class="label">Foto Interior</label>
                  <div class="file is-info has-name is-boxed is-fullwidth">
                    <label class="file-label">
                      <input class="file-input" type="file" name="resume">
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fa fa-cloud-upload"></i>
                        </span>
                        <span class="file-label">
                          Cargar Foto
                        </span>
                      </span>
                      <span class="file-name">
                        Screen Shot 2017-07-29 at 15.54.25.png
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns is-centered">
                <div class="column is-4">
                    <button class="button is-link is-medium is-focused is-fullwidth " v-on:click="onClick">  Enviar
                    </button>
                    <!--<a class="button is-link is-medium is-focused is-fullwidth "> Agendar Cita </a> -->         
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
  name: 'Shopping',
  data () {
    return {
      item1: 'Compramos tu Vehículo',
      item2: '',
      item3: '',
      item4: '',
      item5: ''
    }
  },
  methods: {
    onClick () {
      this.$swal({
        title: 'Información Enviada',
        text: 'Nos pondremos en contacto contigo ¡Pronto!',
        icon: 'success',
        button: 'Aceptar'
      })
    }
  },
  components: {
    HeaderVue,
    FooterVue
  }
}
</script>

<style scoped>

.title{
    color: #80C142 !important;
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