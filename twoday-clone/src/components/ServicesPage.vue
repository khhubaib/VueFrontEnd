<script>
import NavBar from './NavBar.vue';
import ServicesHero from './ServicesHero.vue';
import SolutionsServices from './SolutionsServices.vue';
import LastingImpact from './LastingImpact.vue';

export default {
  name: 'ServicesPage',
  components: {
    NavBar,
    ServicesHero,
    SolutionsServices,
    LastingImpact
  },
  data() {
    return {
      
      heading: "Deep industry knowledge that creates lasting progress",
      text: "Discover how our digital solutions drive success across industries. Energy and utilities, health and society, manufacturing and the public sector are just some of the industries we help everyday.",
      img1: "", 
      img2: "",
      img3: "",

      span1: "Health & Life Sciences",
      span2: "Energy & Utilities",
      span3: "Industrials & Manufacturing",

      div1: "From digital health solutions to research data platforms, we connect innovation with care. We help healthcare providers, pharma, and life science organizations improve patient outcomes and accelerate discovery - securely and responsibly.",
      div2: "We enable smarter, more sustainable systems - from energy optimization to reliable grid operations. Our solutions support utilities in balancing demand, improving resilience, and driving the green transition.",
      div3: "We bring intelligence to production, operations, and supply chains. From predictive maintenance to smart factories, we help manufacturers boost efficiency, reduce downtime, and turn complexity into clarity."
    };
  }
};
</script>

<template>
  <div>
    <NavBar />
    <ServicesHero />
    <SolutionsServices />
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
  </div>
</template>

<style >
</style>
