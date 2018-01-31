<template>
    <section class="hero">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-2 ">
            {{ info.title }}
          </h1>
          <div class="columns is-centered">
            <div class="column is-6">
              <div class="field has-addons">
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select v-model="selectedMarca" name="marca">
                      <option v-for="marca in Marcas" v-bind:value="marca.value">{{ marca.name }}</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <button type="submit" class="button is-primary">Buscar</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
</template>

<script>

export default {
  name: 'titleSection',
  data () {
    return {
      Marcas: [
        { name: 'Opel', value: 'opel' },
        { name: 'Citroen', value: 'citroen' },
        { name: 'Audi', value: 'audi' },
        { name: 'Chevrolet', value: 'chevrolet' },
        { name: 'Audi', value: 'audi' }
      ],
      selectedMarca: 'opel',
      loading: true
    }
  },
  props: ['info']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .hero{
      padding-top: 30px !important;
    }

.title{
    color: #ad0909 !important;
    font-family: 'Kaushan Script', cursive;
}
.subtitle{
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
}

</style>
