<script>
import NavBar from './NavBar.vue';
import ServicesHero from './ServicesHero.vue';
import SolutionsServices from './SolutionsServices.vue';
import LastingImpact from './LastingImpact.vue';
import MeetExperts from './MeetExperts.vue';
import Footer from './Footer.vue';
import GetInTouch from './GetInTouch.vue';

export default {
  name: 'ServicesPage',
  components: {
    NavBar,
    ServicesHero,
    SolutionsServices,
    LastingImpact,
    MeetExperts,
    Footer,
    GetInTouch
  },
  data() {
    return {
      
      heading: "Deep industry knowledge that creates lasting progress",
      text: "Discover how our digital solutions drive success across industries. Energy and utilities, health and society, manufacturing and the public sector are just some of the industries we help everyday.",
      img1: "/hands.png", 
      img2: "/windmils.png",
      img3: "/tools.png",
      video: "",

      span1: "Health & Life Sciences",
      span2: "Energy & Utilities",
      span3: "Industrials & Manufacturing",

      div1: "From digital health solutions to research data platforms, we connect innovation with care. We help healthcare providers, pharma, and life science organizations improve patient outcomes and accelerate discovery - securely and responsibly.",
      div2: "We enable smarter, more sustainable systems - from energy optimization to reliable grid operations. Our solutions support utilities in balancing demand, improving resilience, and driving the green transition.",
      div3: "We bring intelligence to production, operations, and supply chains. From predictive maintenance to smart factories, we help manufacturers boost efficiency, reduce downtime, and turn complexity into clarity.",

      heading2: "Lasting impact",
      text2: "Every day, we apply AI and engineering to solve what matters. Building solutions that improve lives across both public and private sectors.",

      experts:[
        {
          name: "A new data platform",
          designation: "put Spar Nord in control",
          btn: "Read more →",
          ptag: "To meet increasing demands for greater data compliance, speed, and quality, Danish bank Spar Nord made a strategic decision: to build its own data platform.",
          img: "/sparnord.png",
          span: "CONSUMER STORY"
        },
        {
          name: "Predictive AI",
          designation: "for Water Management",
          btn: "Read more →",
          ptag: "In partnership with Twoday, VandCenter Syd implemented a scalable AI solution built on a robust MLOps platform. The solution integrated real-time sensor data with machine learning models to detect anomalies in water quality and predict potential system failures.",
          img: "/watermanage.png",
          span: "CONSUMER STORY"
        },
      ],

      heading3: "Unlock the power of data. Turn decisions into growth.",
      ptag1: "Twoday is the defining force in applied AI and advanced engineering. With 3,000 experts in data, software, and cloud engineering, we cut through complexity, remove uncertainty, and prove the value of technology.",
      ptag2: "We strengthen private and public organizations across industries like energy and utilities, industrials and manufacturing, health and life sciences, and government and more.",
      ptag3: "From offices in Sweden, Denmark, Norway, Finland, and Lithuania, we combine local presence with scale that matters to deliver clarity and results that last.",
      button3: "",
        
    };
  },
};
</script>

<template>
  <div>
    <NavBar />
    <ServicesHero />
    <SolutionsServices />
    <LastingImpact
      :heading="heading2"
      :text="text2"
    />

    <MeetExperts :experts="experts"/>
    <LastingImpact
      :heading="heading"
      :text="text"
      :img1="img1"
      :img2="img2"
      :img3="img3"
      :span1="span1"
      :span2="span2"
      :span3="span3"
      :div1="div1"
      :div2="div2"
      :div3="div3"
    />
    <GetInTouch
    :heading="heading3"
    :ptag1="ptag1"
    :ptag2="ptag2"
    :ptag3="ptag3"
    :button="button3"/>
    <Footer/>
  </div>
</template>

<style >
</style>
