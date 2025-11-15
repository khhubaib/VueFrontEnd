<script>

import Leveraging from './Leveraging.vue';
import LastingImpact from './LastingImpact.vue';
import DreamJob from './DreamJob.vue';
import MeetExperts from './MeetExperts.vue';
import LatestNews from './LatestNews.vue';
import GetInTouch from './GetInTouch.vue';
export default {
  name: 'MainContent',

  components: {
    Leveraging,
    LastingImpact,
    DreamJob,
    MeetExperts,
    LatestNews,
    GetInTouch
  },
  data() {
    return {
      
      heading: "Lasting impact",
      text: "Every day, we apply AI and advanced engineering to solve what matters. Building solutions that improve lives across both public and private sectors.",
      img1: "/patient.jpeg", 
      img2: "/window.jpeg",
      img3: "",
      video: "/water.mp4",

      span1: "Päijät-Häme Welfare Region",
      span2: "ISS",
      span3: "WATTN",

      div1: "Together with Päijät-Häme Welfare Region, we’re using AI to make everyday life simpler for both residents and professionals — easing workloads, improving access to care, and shaping a smarter, more human welfare service.",
      div2: "ISS saves hundreds of hours of working time by modernizing its data platform and customer reporting.",
      div3: "A future-proof platform that brings systems together, simplifies daily work, and helps our client move faster. Because real progress starts with a solid digital foundation.",

      experts:[
        {
          name: "Meet Frank,",
          designation: "Enterprise Architect",
          btn: "Meet Frank →",
          ptag: "“I wanted to make technology matter — not just for systems, but for people”",
          img: "/frank.jpeg",
          span: "MEET OUR EXPERTS"
        },
        {
          name: "MeetAnne,",
          designation: "Senior Solution Architect",
          btn: "Read more →",
          ptag: "“The people I met were genuinely interested in me and my experiences, not just my grades.”",
          img: "/anne.png",
          span: "MEET OUR EXPERTS"
        },
        {
          name: "Meet Nur,",
          designation: "Software Designer",
          btn: "Read more →",
          ptag: "“I've grown here-not just as professional but as a person”",
          img: "/nur.png",
          span: "MEET OUR EXPERTS"
        },
      ],

       heading3: "Let's talk about the future",
       ptag1: "Contact us through the form and let's talk about what we can accomplish together.",
       ptag2: "",
      ptag3: "",
      button3: "Get in touch→",
    };
  }
}
</script>

<template>
   
        <Leveraging/>
        <LastingImpact
      :heading="heading"
      :text="text"
      :img1="img1"
      :img2="img2"
      :img3="img3"
      :video="video"
      :span1="span1"
      :span2="span2"
      :span3="span3"
      :div1="div1"
      :div2="div2"
      :div3="div3"
    />
        <DreamJob/>
        <MeetExperts :experts="experts"/>
        <LatestNews/>
        <GetInTouch
        :heading="heading3"
        :ptag1="ptag1"
        :button="button3"/>
    
</template>

<style>

</style>