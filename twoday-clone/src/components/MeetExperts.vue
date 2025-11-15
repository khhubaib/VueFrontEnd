<script>
export default {
  name: "MeetExperts",

  data(){
    return{
      experts:[
        {
          name: "Meet Frank,",
          designation: "Enterprise Architect",
          btn: "Meet Frank →",
          ptag: "“I wanted to make technology matter — not just for systems, but for people”",
          img: "/frank.jpeg"
        },
        {
          name: "MeetAnne,",
          designation: "Senior Solution Architect",
          btn: "Read more →",
          ptag: "“The people I met were genuinely interested in me and my experiences, not just my grades.”",
          img: "/anne.png"
        },
        {
          name: "Meet Nur,",
          designation: "Software Designer",
          btn: "Read more →",
          ptag: "“I've grown here-not just as professional but as a person”",
          img: "/nur.png"
        },
      ],
      index: 0
        
    };
  },
  methods:{
    next(){
      this.index = (this.index+1)%this.experts.length;
    },

    prev(){
      this.index =(this.index - 1 + this.experts.length) % this.experts.length;
    }
  }

}
</script>



<template>
  <div class="meet-experts-wrapper">

    <div class="meet-experts">
      
      <!-- LEFT SECTION -->
      <div class="experts-left">
        <div class="tag">
          <span>MEET OUR EXPERTS</span>
        </div>

        <h1 class="title">
          {{experts[index].name}}<br />
          {{experts[index].designation}}
        </h1>

        <a class="cta-btn">{{experts[index].btn}}</a>
      </div>

      <!-- RIGHT SECTION -->
      <div class="experts-right">
        <p class="quote">
          {{experts[index].ptag}}
        </p>

        <div class="image-box">
          <img :src="experts[index].img" alt="expert-img" />
        </div>
      </div>

    </div>

    <!-- NAVIGATION -->
    <div class="navs">
      <a class="nav-btn" @click="next">←</a>
      <a class="nav-btn" @click="prev">→</a>
    </div>

  </div>
</template>
