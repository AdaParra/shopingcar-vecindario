<template>
  <div class="home">
    <HeaderVue></HeaderVue>
  </div>
</template>

<script>

import HeaderVue from './Header/header'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    HeaderVue
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
