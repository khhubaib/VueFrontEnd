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
    }
  }
</script>

<template>
  <div>
    
    <NavBar/>
    <HeroComp/>
    <MainContent/>
    <Footer/>
    
   
  </div>

</template>

<style >

</style>
