<script>
import { reactive, ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { useRouter } from 'vue-router'
import NavBar from './NavBar.vue';
import HeroComp from './HeroComp.vue';
import MainContent from './MainContent.vue';
import Footer from './Footer.vue';
import apiClient from '../apiclient';

export default {
  name: 'LandingPage',
  components: {
    NavBar,
    HeroComp,
    MainContent,
    Footer
  },
  setup() {
    const router = useRouter()

    // Reactive page data for meta tags
    const data = reactive({
      page_id: '',
      title: '',
      description: '',
      keywords: '',
      canonical_url: '',
    })

    // HeroComp related reactive refs
    const span = ref("WHAT WE DO")
    const heading1 = ref("Applied AI")
    const heading2 = ref("Advanced Engineering")
    const heading3 = ref("Lasting Impact")
    const button = ref("Talk to an expert")
    const video = ref("/43295-436026111_small.mp4")
    const id = ref("#experts")

    // Admin button function
    const admin = () => {
      router.push('/welcome')
    }

    // Reactive meta tags using useHead
    useHead({
      title: () => data.title,
      meta: [
        { name: 'description', content: () => data.description },
        { name: 'keywords', content: () => data.keywords },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'canonical', href: () => data.canonical_url },
      ],
    })

    // Fetch meta data from API on mount
    onMounted(async () => {
      try {
        const slug = 27
        const res = await apiClient.get(`/metatags/${slug}`)
        Object.assign(data, res.data) // reactive update → meta updates automatically
      } catch (err) {
        console.error('Error fetching tags:', err)
      }
    })

    return {
      data,
      span,
      heading1,
      heading2,
      heading3,
      button,
      video,
      id,
      admin
    }
  }
}
</script>

<template>
  <div>
    <NavBar />
    <HeroComp 
      :heading1="heading1" 
      :heading2="heading2" 
      :heading3="heading3" 
      :span="span" 
      :button="button"
      :video="video" 
      :id="id" 
    />
    <MainContent />
    <Footer />
    <button @click="admin" class="admin-btnn">Admin</button>
  </div>
</template>

<style>
.admin-btnn {
  position: fixed;
  top: 90vh;
  right: 1vw;
  z-index: 7;
  padding: 20px 10px;
  border-radius: 50%;
  background-color: #1b1b1b;
}
</style>
