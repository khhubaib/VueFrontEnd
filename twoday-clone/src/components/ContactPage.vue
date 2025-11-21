<script>
import { reactive, ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
import GetInTouch from './GetInTouch.vue';
import apiClient from '../apiclient'

export default {
  name: 'ContactPage',
  components: {
    GetInTouch,
    NavBar,
    Footer
  },
  setup() {

    // Reactive meta data
    const data = reactive({
      page_id: '',
      title: '',
      description: '',
      keywords: '',
      canonical_url: '',
    })

    // GetInTouch refs
    const heading = ref("Get in touch")
    const ptag1 = ref("Want to get in touch? Fill out the form and one of our colleges will contact you!")
    const column = ref("yes")

    // Reactive meta tags
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

    // Fetch meta tags from API
    onMounted(async () => {
      try {
        const slug = 32
        const res = await apiClient.get(`/metatags/${slug}`)
        Object.assign(data, res.data)
      } catch (err) {
        console.error('Error fetching tags:', err)
      }
    })

    return {
      data,
      heading,
      ptag1,
      column
    }
  }
}
</script>

<template>
  <div>
    <NavBar/>
    <GetInTouch
      :heading="heading"
      :ptag1="ptag1"
      :column="column"
    />
    <Footer/>
  </div>
</template>

<style></style>
