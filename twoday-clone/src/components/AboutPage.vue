<script>
import HeroComp from './HeroComp.vue';
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
export default{
    name: 'AboutPage',
    components:{
        HeroComp,
        NavBar,
        Footer
    },
    data(){
        return{

            span: "ABOUT US",
            heading1: "We create a",
            heading2: "better tomorrow through",
            heading3: "AI and technology",
            button: "",
            video: "/about.mp4",
            color: "white"
        };
    }
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
        :video="video"
        :color="color"/>

        <Footer/>
    </div>
</template>

<style>

</style>