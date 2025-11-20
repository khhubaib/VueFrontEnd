<script>
import NavBar from './NavBar.vue';
import HeroComp from './HeroComp.vue';
import MainContent from './MainContent.vue';
import Footer from './Footer.vue';
import apiClient from '../apiclient';
import { useHead } from '@vueuse/head'
export default {
  name: 'LandingPage',
  components: {
    NavBar,
    HeroComp,
    MainContent,
    Footer
  },
  data() {
    return {

      span: "WHAT WE DO",
      heading1: "Applied AI",
      heading2: "Advanced Engineering",
      heading3: "Lasting Impact",
      button: "Talk to an expert",
      video: "/43295-436026111_small.mp4",
      id: "#experts",

      page: null,
    };
  },
  async mounted() {
    try {
      const slug = 9
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

    <NavBar />
    <HeroComp :heading1="heading1" :heading2="heading2" :heading3="heading3" :span="span" :button="button"
      :video="video" :id="id" />
    <MainContent />
    <Footer />


  </div>

</template>

<style></style>
