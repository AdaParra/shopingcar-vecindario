<template>
<div>
    <section class="section">
      <div class="columns is-multiline">
        <div  v-for='(coche, index) in coches' class="column is-one-quarter">
          <router-link :to="{ name: 'Detail', params: { id: index, detail: coche } }">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="coche.image" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content has-text-centered">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-3"> {{ coche.marca }}</p>
                    <p class="title is-5">  {{ coche.modelo }} </p>
                    <p class="subtitle is-5">  {{ coche.año }} </p>
                    <p class="subtitle is-5" style="color: #ad0909; font-weight: bold;">{{ coche.precio }}</p>
                  </div>
                </div>

              </div>
               <footer class="card-footer">
                    <a href="#" class="card-footer-item button is-link">Ver más</a>
                </footer>
            </div>
          </router-link>
        </div>
      </div>
    </section>
    <div class="columns is-centered">
      <div class="column is-6">
        <section class="section has-text-centered">
          <Pagination :current-page="pageOne.currentPage"
                      :total-pages="pageOne.totalPages"
                      :items-per-page="pageOne.itemsPerPage"
                      @page-changed="pageOneChanged">
          </Pagination>
        </section>

      </div>
    </div>
</div>

</template>

<script>

import Pagination from '../Pagination/pagination'

export default {
  name: 'Card',
  data () {
    return {
      pageOne: {
        currentPage: 1,
        totalPages: 10,
        itemsPerPage: 3
      }
    }
  },
  methods: {
    pageOneChanged (pageNum) {
      this.pageOne.currentPage = pageNum
    }
  },
  components: {
    Pagination
  },
  props: ['coches']
}
</script>

<style scoped>

.media-content {
  text-align: center !important;
}
.title{
  margin-bottom: 0.5rem !important;
}
.subtitle {
  margin-top: 1rem !important;
}
.content{
  text-align: center;
}
.section{
  padding-top: 0px;
}
.is-color{
  color: green !important;
}
.card{
  transition: .3s;
}
.card:hover{
  transform: scale(1.10);
  transition: .3s;

}
</style>
