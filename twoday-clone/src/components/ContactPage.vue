<script>
import GetInTouch from './GetInTouch.vue';
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
export default{
    name: 'ContactPage',
    components:{
        GetInTouch,
        NavBar,
        Footer,
    }

    ,data(){
        return{
            heading: "Get in touch",
            ptag1: "Want to get in touch? Fill out the form and one of our colleges will contact you!",
            column: "yes",
        };
    }
}

</script>

<template>
    <div>

        <NavBar/>

        
        <GetInTouch
        :heading="heading"
        :ptag1="ptag1"
        :column="column"/>
        <Footer/>
    </div>
</template>

<style>

</style>