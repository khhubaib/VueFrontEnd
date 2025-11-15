<script >
  import NavBar from './NavBar.vue';
  import HeroComp from './HeroComp.vue';
  import MainContent from './MainContent.vue';
  import Footer from './Footer.vue';
  export default {
    name: 'LandingPage',
    components: {
      NavBar,
      HeroComp,
      MainContent,
      Footer
    },
     data(){
        return{

            span: "WHAT WE DO",
            heading1: "Applied AI",
            heading2: "Advanced Engineering",
            heading3: "Lasting Impact",
            button: "Talk to an expert",
            video: "/43295-436026111_small.mp4"
        };
      },
  }
</script>

<template>
  <div>
    
    <NavBar/>
    <HeroComp
        :heading1="heading1"
        :heading2="heading2"
        :heading3="heading3"
        :span="span"
        :button="button"
        :video="video"/>
    <MainContent/>
    <Footer/>
    
   
  </div>

</template>

<style >

</style>
