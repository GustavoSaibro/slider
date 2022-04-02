<template>
  <div class="slides">
    <div
      v-show="currentSlide === index"
      class="slide-info"
    >
      <h1>{{item.headline}}</h1>
      <p>{{item.paragraph}}</p>
      <img
        :src="require(`@/assets/img/${item.img}`)"
        alt="test"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'Slider',
  setup () {
    const store = useStore()
    const content = store.getters.getContent
    // const content = store.getters.getContent.map(item => { return item })
    const imgSrc = content.map(item => {
      return item.img
    })


    console.log(imgSrc)
    // console.log(imgSrc[0])

    console.log(content)

    return { content, imgSrc }

  }
}
</script>


<style lang="scss" scoped>
.slides {
  position: relative;
  max-height: 100vh;
  height: 100vh;

  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;

    img {
      min-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>