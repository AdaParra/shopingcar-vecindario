<template>
    <div class='carousel-container'>
        <div class='carousel-content carousel-animate carousel-animate-fade'>
            <div class="carousel__item">
                    <img class="is-background" :src="currentItem.src"></img>
            </div>
        </div>
        <div class="carousel-nav-left">
          <i class="fa fa-chevron-left" @click="nextItem"  aria-hidden="true"></i>
        </div>
        <div class="carousel-nav-right">
          <i class="fa fa-chevron-right" @click="prevItem" aria-hidden="true"></i>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Carousel',
  props: {
    carouselItems: {
      Type: Array,
      required: true
    }
  },
  created () {
    this.currentIndex = 0
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    nextItem () {
      if (this.currentIndex === this.carouselItems.length - 1) {
        this.currentIndex = 0
      } else {
        this.currentIndex++
      }
    },
    prevItem () {
      if (this.currentIndex === 0) {
        this.currentIndex = this.carouselItems.length - 1
      } else {
        this.currentIndex--
      }
    },
    showAtIndex (index) {
      this.currentIndex = index
    }
  },
  computed: {
    currentItem () {
      return this.carouselItems[this.currentIndex]
    }
  }
}
</script>

<style lang="scss">
.carousel__item {
      flex-shrink: 0;
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      box-sizing: border-box;
      min-width: 100%;
      background-size: cover;
      background-position: center center;
      position: relative;
      max-height: 100%;
      max-width: 100%;
      overflow: hidden;
}

.carousel {
    height: 462px !important;
}

</style>