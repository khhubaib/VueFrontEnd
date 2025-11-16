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
.count-flex{
    margin: 32px;
    padding: 32px;
    display: flex;
    justify-content: space-between;
    background-color: rgb(255, 191, 0);
    border-radius: 10px;
}
.flex-obj{
    border-top: 2px solid #1b1b1b;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.flex-obj h1{
    font-size: clamp(25px, 15vh, 80px);
    margin-top: 0;
    margin-bottom: 0;
}

.flex-obj span{
    text-align: left;
    font-weight: 500;
}

@media(max-width:767px){
    .count-flex{
        flex-direction: column;
        padding-left: 50px;
    }
}
</style>