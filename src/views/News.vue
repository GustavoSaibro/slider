<template>
  <div class="news">
    <Slider
      :navigation="true"
      :pagination="true"
      :startAutoPlay="true"
      :timeout="5000"
      class="slides"
      v-slot="{currentSlide}"
    >
      <Slide
        v-for="(info, index) in news"
        :key="index"
      >
        <SlideData v-show="currentSlide === index" />
      </Slide>
    </Slider>
  </div>
</template>

<script>
import Slider from '../components/Slider.vue'
import Slide from '../components/Slide.vue'
import SlideData from '../components/SlideData.vue'


export default {
  name: 'News',
  components: {
    Slider,
    Slide,
    SlideData
  },
  setup () {
    const news = ['img.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg']

    return { news }
  }

}
</script>


<style lang="scss" scoped>
</style>
