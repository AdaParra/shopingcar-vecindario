<template>
  <div class="home">
    <HeroVue></HeroVue>
  </div>
</template>

<script>

import HeroVue from './Hero/hero'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    HeroVue
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
