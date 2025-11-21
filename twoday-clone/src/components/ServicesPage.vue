<script>
import { reactive, ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { useRouter } from 'vue-router'

import NavBar from './NavBar.vue';
import ServicesHero from './ServicesHero.vue';
import SolutionsServices from './SolutionsServices.vue';
import LastingImpact from './LastingImpact.vue';
import MeetExperts from './MeetExperts.vue';
import Footer from './Footer.vue';
import GetInTouch from './GetInTouch.vue';

import apiClient from '../apiclient';

export default {
  name: 'ServicesPage',
  components: {
    NavBar,
    ServicesHero,
    SolutionsServices,
    LastingImpact,
    MeetExperts,
    Footer,
    GetInTouch
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

    // Hero, Impact, and Experts related reactive refs
    const heading = ref("Deep industry knowledge that creates lasting progress")
    const text = ref("Discover how our digital solutions drive success across industries. Energy and utilities, health and society, manufacturing and the public sector are just some of the industries we help everyday.")
    const img1 = ref("/hands.png")
    const img2 = ref("/windmils.png")
    const img3 = ref("/tools.png")
    const video = ref("")

    const span1 = ref("Health & Life Sciences")
    const span2 = ref("Energy & Utilities")
    const span3 = ref("Industrials & Manufacturing")

    const div1 = ref("From digital health solutions to research data platforms, we connect innovation with care. We help healthcare providers, pharma, and life science organizations improve patient outcomes and accelerate discovery - securely and responsibly.")
    const div2 = ref("We enable smarter, more sustainable systems - from energy optimization to reliable grid operations. Our solutions support utilities in balancing demand, improving resilience, and driving the green transition.")
    const div3 = ref("We bring intelligence to production, operations, and supply chains. From predictive maintenance to smart factories, we help manufacturers boost efficiency, reduce downtime, and turn complexity into clarity.")

    const heading2 = ref("Lasting impact")
    const text2 = ref("Every day, we apply AI and engineering to solve what matters. Building solutions that improve lives across both public and private sectors.")

    const experts = ref([
      {
        name: "A new data platform",
        designation: "put Spar Nord in control",
        btn: "Read more →",
        ptag: "To meet increasing demands for greater data compliance, speed, and quality, Danish bank Spar Nord made a strategic decision: to build its own data platform.",
        img: "/sparnord.png",
        span: "CONSUMER STORY"
      },
      {
        name: "Predictive AI",
        designation: "for Water Management",
        btn: "Read more →",
        ptag: "In partnership with Twoday, VandCenter Syd implemented a scalable AI solution built on a robust MLOps platform. The solution integrated real-time sensor data with machine learning models to detect anomalies in water quality and predict potential system failures.",
        img: "/watermanage.png",
        span: "CONSUMER STORY"
      },
    ])

    const heading3 = ref("Unlock the power of data. Turn decisions into growth.")
    const ptag1 = ref("Twoday is the defining force in applied AI and advanced engineering. With 3,000 experts in data, software, and cloud engineering, we cut through complexity, remove uncertainty, and prove the value of technology.")
    const ptag2 = ref("We strengthen private and public organizations across industries like energy and utilities, industrials and manufacturing, health and life sciences, and government and more.")
    const ptag3 = ref("From offices in Sweden, Denmark, Norway, Finland, and Lithuania, we combine local presence with scale that matters to deliver clarity and results that last.")
    const button3 = ref("")

    // Admin button function
    const admin = () => {
      router.push('/admin')
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
        const slug = 24
        const res = await apiClient.get(`/metatags/${slug}`)
        Object.assign(data, res.data) // reactive update → meta updates automatically
      } catch (err) {
        console.error('Error fetching tags:', err)
      }
    })

    return {
      data,
      heading, text, img1, img2, img3, video,
      span1, span2, span3,
      div1, div2, div3,
      heading2, text2,
      experts,
      heading3, ptag1, ptag2, ptag3, button3,
      admin
    }
  }
}
</script>

<template>
  <div>
    <NavBar />
    <ServicesHero />
    <SolutionsServices />
    <LastingImpact :heading="heading2" :text="text2" />

    <MeetExperts :experts="experts" />
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
    <GetInTouch
      :heading="heading3"
      :ptag1="ptag1"
      :ptag2="ptag2"
      :ptag3="ptag3"
      :button="button3"
    />
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
