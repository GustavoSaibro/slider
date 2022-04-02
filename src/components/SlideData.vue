<template>
  <div class="slides">
    <div class="slide-info">
      <h1>{{headline}}</h1>
      <p>{{paragraph}}</p>
      <img
        :src="require(`@/assets/${img}`)"
        alt="test"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Slider',
  props: ['headline', 'paragraph', 'img'],

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