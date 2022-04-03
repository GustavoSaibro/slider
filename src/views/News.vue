<template>
  <Slider
    :navigation="true"
    :pagination="true"
    :startAutoPlay="false"
    :timeout="2000"
    v-slot="{currentSlide}"
  >
    <Slide
      v-for="(info, index) in content"
      :key="index"
    >
      <SlideData
        v-show="currentSlide === index"
        :headline="info.headline"
        :paragraph="info.paragraph"
        :img="info.img"
      />
    </Slide>
  </Slider>
</template>

<script>
import { useStore } from 'vuex'
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
    const store = useStore()
    const content = store.getters.getContent
    // const content = store.getters.getContent.map(item => { return item })
    // const news = content.map(item => {
    //   return item.img
    // })

    return { content }
  }

}
</script>


<style lang="scss" >
</style>
