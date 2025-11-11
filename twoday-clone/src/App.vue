<script >
  import NavBar from './components/NavBar.vue'
  import HeroComp from './components/HeroComp.vue';
  import MainContent from './components/MainContent.vue';
  import Footer from './components/Footer.vue';
  export default {
    name: 'App',
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

<style scoped>

</style>
