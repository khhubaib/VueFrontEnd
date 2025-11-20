<script>
import GetInTouch from './GetInTouch.vue';
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';

import apiClient from '../apiclient';
import { useHead } from '@vueuse/head'


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

            page: null,
        };
    },

    async mounted() {
    try {
      const slug = 13
      const res = await apiClient.get(`/pages/${slug}/tags`)
      this.page = res.data
      // Set meta dynamically
      useHead({
        title: this.page.tags[0].title,
        meta: [
          { name: 'description', content: this.page.tags[0].description },
          { name: 'keywords', content: this.page.tags[0].keywords },
          { name: 'robots', content: 'index, follow' },
        ],
        link: [
          { rel: 'canonical', href: this.page.tags[0].canonical_url },
        ],
      })
    } catch (err) {
      console.error('Error fetching tags:', err)
    }
  },
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