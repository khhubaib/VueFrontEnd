<script>
export default {
  name: 'ShowStats',

  data() {
    return {
      i: 0,
      j: 0,
      k: 0
    }
  },

  methods: {
    countTo(target, key) {
      let interval = setInterval(() => {
        if (this[key] < target) {
          this[key]++
        } else {
          clearInterval(interval)
        }
      }, 0.5) // speed (ms)
    }
  },

  mounted() {
    this.countTo(3000, "i")
    this.countTo(750, "j")
    this.countTo(25, "k")
  }
}

</script>

<template>
    <div>
        <div class="count-flex">
            <div class="flex-obj">
                <span>PROFESSIONALS</span>
                <h1>{{ i }}+</h1>
            </div>
            <div class="flex-obj">
                <span>DATA & AI EXPERTS</span>
                <h1>{{ j }}+</h1>
            </div>
            <div class="flex-obj">
                <span>LOCATIONS</span>
                <h1>{{ k }}+</h1>
            </div>
        </div>
    </div>
</template>

<style>

</style>