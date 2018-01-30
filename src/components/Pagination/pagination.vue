<template>
  <nav class="pagination is-rounded is-centered" role="navigation" aria-label="pagination">
    <a  href="#" class="pagination-previous" title="This is the first page" aria-label="Previous" @click.prevent="pageChanged(1)">Anterior</a>
    <a class="pagination-next" href="#" @click.prevent="pageChanged(lastPage)" aria-label="Next">Siguiente</a>
    <ul class="pagination-list">
      <li v-for="n in paginationRange">
        <a class="pagination-link" :class="activePage(n)" href="#" @click.prevent="pageChanged(n)">{{ n }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import Util from './services/Util'

export default {

  props: {
    // Current Page
    currentPage: {
      type: Number,
      required: true
    },
    // Total page
    totalPages: Number,
    // Items per page
    itemsPerPage: Number,
    // Total items
    totalItems: Number,
    // Visible Pages
    visiblePages: {
      type: Number,
      default: 5,
      coerce: (val) => parseInt(val)
    }
  },
  name: 'Pagination',
  data () {
    return {}
  },

  computed: {
    lastPage () {
      if (this.totalPages) {
        return this.totalPages
      } else {
        return this.totalItems % this.itemsPerPage === 0
          ? this.totalItems / this.itemsPerPage
          : Math.floor(this.totalItems / this.itemsPerPage) + 1
      }
    },

    paginationRange () {
      let start = this.currentPage - this.visiblePages / 2 <= 0
                    ? 1 : this.currentPage + this.visiblePages / 2 > this.lastPage
                    ? Util.lowerBound(this.lastPage - this.visiblePages + 1, 1)
                    : Math.ceil(this.currentPage - this.visiblePages / 2)
      let range = []
      for (let i = 0; i < this.visiblePages && i < this.lastPage; i++) {
        range.push(start + i)
      }
      return range
    }
  },

  methods: {
    pageChanged (pageNum) {
      this.$emit('page-changed', pageNum)
    },

    activePage (pageNum) {
      return this.currentPage === pageNum ? 'is-current' : ''
    }
  }

}
</script>