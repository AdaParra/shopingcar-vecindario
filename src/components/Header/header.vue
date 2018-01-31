<template>
        <nav class="navbar is-dark is-fixed-top">
          <div class="container">
            <div class="navbar-brand">
              <router-link :to="{ name: 'Home' }" class="navbar-item">
                <p class="title has-text-white"> {{ tulogo }} </p>
              </router-link>
              <!--<a class="navbar-item">
                <img src="./assets/Logo1.png" alt="Logo">
              </a> -->
              <span  id="idBurger" class="navbar-burger burger" data-target="navbarMenuHeroA" v-on:click="navMenu">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="idMenu" class="navbar-menu">
              <div class="navbar-end">
                 <router-link :to="{ name: 'Home' }" class="navbar-item has-text-white">
                    {{ item1 }}
                  </router-link>
                <router-link :to="{ name: 'Cars' }" class="navbar-item has-text-white">
                    {{ item2 }}
                </router-link>
                <router-link :to="{ name: 'Shopping' }" class="navbar-item has-text-white">
                  {{ item5 }}
                </router-link>
                <router-link :to="{ name: 'About' }" class="navbar-item has-text-white">
                    {{ item3 }}
                <!--<a class="navbar-item has-text-white">
                </a> -->
                </router-link>
                <span class="navbar-item has-text-white">
                <router-link :to="{ name: 'Contact' }" class="button is-success">
                  <!--<a class="button is-success"> -->
                    <span class="icon">
                      <i class="fa fa-phone"></i>
                    </span>
                    <span> {{ item4 }}</span>
                  <!--</a>-->
                </router-link>
                </span>
              </div>
            </div>
          </div>
        </nav>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
      tulogo: 'VPCARS',
      item1: 'Inicio',
      item2: 'Coches',
      item3: 'Conócenos',
      item4: 'Contáctanos',
      item5: 'Vendenos tu coche'

    }
  },
  methods: {
    navMenu () {
      let idBurger = document.getElementById('idBurger')
      let idMenu = document.getElementById('idMenu')
      idBurger.classList.toggle('is-active')
      idMenu.classList.toggle('is-active')
    }
  },
  created: function () {
    this.navMenu()
  },
  props: ['info']
}
</script>

<style scoped>

.title{
    font-family: 'Kaushan Script', cursive;
}
.subtitle{
    color: white !important;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
}
.navbar.is-dark {
  background-color: #363636 !important;
}
.navbar-menu {
  background-color: rgb(54, 54, 54) !important;
}
a.navbar-item:hover, a.navbar-item.is-active, a.navbar-link:hover, a.navbar-link.is-active{
  background-color: #ad0909 !important;
}

</style>
