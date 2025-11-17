<script>
export default {
  name: "MeetExperts",

  data() {
    return {
      index: 0
    };
  },

  methods: {
    next() {
      this.index = (this.index + 1) % this.experts.length;
    },

    prev() {
      this.index = (this.index - 1 + this.experts.length) % this.experts.length;
    }
  },

  props: {
    experts: {
      type: Array,
      required: true
    }
  }
};
</script>

<template>
  <div class="meet-experts-wrapper" id="experts">

    <div class="meet-experts">
      
      <!-- LEFT -->
      <div class="experts-left">
        <div class="tag">
          <span>{{experts[index].span}}</span>
        </div>

        <h1 class="title">
          {{ experts[index].name }}<br />
          {{ experts[index].designation }}
        </h1>

        <a class="cta-btn">{{ experts[index].btn }}</a>
      </div>

      <!-- RIGHT -->
      <div class="experts-right">
        <p class="quote">
          {{ experts[index].ptag }}
        </p>

        <div class="image-box">
          <img :src="experts[index].img" alt="expert-img" />
        </div>
      </div>

    </div>

    <!-- NAVIGATION -->
    <div class="navs">
      <a class="nav-btn" @click.prevent="next">←</a>
      <a class="nav-btn" @click.prevent="prev">→</a>
    </div>

  </div>
</template>
