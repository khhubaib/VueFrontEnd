<script>
export default {
  name: 'LastingImpact',

  // ❗ PROPS MUST BE HERE → NOT inside data()
  props: {
    heading: String,
    text: String,
    img1: String,
    img2: String,
    img3: String,
    video: String,
    span1: String,
    span2: String,
    span3: String,
    div1: String,
    div2: String,
    div3: String
  }
};
</script>

<template>
  <div class="lasting-impact" :class="{'padding-yes':div1}">

    <div class="last-imp-intro">
      <div class="imp-h2">
        <h2>{{ heading }}</h2>
      </div>

      <div class="imp-p">
        <p>{{ text }}</p>
      </div>
    </div>

    <div class="image-grid" v-if="div1">
      <div class="image-item">
        <img :src="img1" alt="Image 1" />
        <div class="grid-overlay">
          <span>{{ span1 }}</span>
          <div class="grid-overlay-content">
            <div>{{ div1 }}</div>
            <a>Read more</a>
          </div>
        </div>
      </div>

      <div class="image-item">
        <img :src="img2" alt="Image 2" />
        <div class="grid-overlay">
          <span>{{ span2 }}</span>
          <div class="grid-overlay-content">
            <div>{{ div2 }}</div>
            <a>Read the Story</a>
          </div>
        </div>
      </div>

      <div class="image-item">
        <video v-if="video" :src="video" autoplay muted loop></video>
        <img v-else-if="img3" :src="img3" />
        <div class="grid-overlay">
          <span>{{ span3 }}</span>
          <div class="grid-overlay-content">
            <div>{{ div3 }}</div>
            <a>Read more</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
</style>
