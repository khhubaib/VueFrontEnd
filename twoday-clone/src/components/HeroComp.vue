<script>


export default {
  name: 'HeroComp',
  props:{
    video: String,
    heading1: String,
    heading2: String,
    heading3: String,
    span: String,
    button: String,
    color: String,
    id: String
  }
}

</script>

<template>
  <section class="hero">
    <video :src="video" class="hero-video" autoplay muted loop></video>
    <div class="hero-overlay">
      <div>
        <p class="hero-p">{{ span }}</p>
      </div>
      <div class="hero-heading">
        <h1 :class="{white:color}">{{ heading1 }}</h1>
        <h1 :class="{white:color}">{{ heading2 }}</h1>
        <h1 :class="{white:color}">{{ heading3 }}</h1>
      </div>
      <div class="hero-button-container">
        <a class="hero-button"  v-if="button" :href="id" >{{button}}
          <img src="/right-up.png" alt="">
        </a>

      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>