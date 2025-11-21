<script>
import { reactive, ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import NavBar from './NavBar.vue';
import HeroComp from './HeroComp.vue';
import Footer from './Footer.vue';
import GetInTouch from './GetInTouch.vue';
import LastingImpact from './LastingImpact.vue';
import OptionsGrid from './OptionsGrid.vue';
import ShowStats from './ShowStats.vue';
import apiClient from '../apiclient'

export default {
  name: 'AboutPage',
  components: {
    HeroComp,
    NavBar,
    Footer,
    GetInTouch,
    LastingImpact,
    OptionsGrid,
    ShowStats
  },
  setup() {

    // Reactive page data for meta tags
    const data = reactive({
      page_id: '',
      title: '',
      description: '',
      keywords: '',
      canonical_url: '',
    })

    // Hero component refs
    const span = ref("ABOUT US")
    const heading1 = ref("We create a")
    const heading2 = ref("better tomorrow through")
    const heading3 = ref("AI and technology")
    const button = ref("")
    const video = ref("/about.mp4")
    const color = ref("white")

    // GetInTouch refs
    const heading = ref("Get to know us")
    const ptag1 = ref("Use the form to get in touch.")
    const column = ref("yes")
    const about = ref("yes")

    // LastingImpact + OptionsGrid content
    const heading4 = ref("Building a sustainable future")
    const text = ref("Sustainability is at the core of everything we do at Twoday. We believe that innovation and responsibility should go hand in hand. As the world increasingly demands greener IT solutions, we use cutting-edge technologies to help our clients reduce their environmental footprint and create more sustainable operations.<br><br>We work closely with businesses to integrate eco-friendly practices into their models, driving change that leads to tangible environmental and social benefits. Our goal is to create solutions that not only meet today’s needs but also contribute to a more sustainable future for all.")

    const heading5 = ref("Our values show in everything we do")
    const text2 = ref("")
    const span1 = ref("HEART")
    const span2 = ref("DRIVE")
    const span3 = ref("ADAPTABILITY")
    const div1 = ref("Our business is run with heart. We care about our employees, our customers and the society. We are a warm community filled with people who have fun and laugh together. We welcome people as they are, we team up and we thrive together.")
    const div2 = ref("To succeed in the digital transformation of our society, we need people with initiative, dedication and engagement. People who continuously develop and learn new things are crucial to the competence needed in our digital age. Our drive and ambition move society forward.")
    const div3 = ref("Technology is constantly changing, and so are the needs of people and organizations. We are adaptable in our approach, down to earth and easy to work with. We trust our people and believe that we do our best work when we have a good balance of freedom and responsibility.")
    const img1 = ref("/first.png")
    const img2 = ref("/second.png")
    const img3 = ref("/third.png")

    const heading6 = ref("Our team is what sets us apart")
    const heading7 = ref("We believe in the power of innovation and collaboration to transform businesses")
    const heading8 = ref("Deep industrial insights for your benefit")
    const div4 = ref("We’re a group of passionate professionals who thrive on collaboration and creativity, pushing the boundaries of what’s possible to help you reach your goals. From strategizing the future of your business to implementing scalable solutions, we stand by you every step of the way.")
    const div5 = ref("With a relentless drive, heart, and adaptability, we partner with our clients to deliver cutting-edge solutions that solve real challenges. We bring specialized expertise and a customer-first mindset to everything we do.")
    const div6 = ref("We focus on results that matter. Our solutions are designed not just to meet the needs of today, but to prepare you for tomorrow. By leveraging the latest technologies and our deep industry insights, we create future-proof strategies that drive growth, efficiency, and lasting impact. Take it from our customers – their feedback speaks for itself.")
    const padding = ref("yes")

    const heading9 = ref("Your success is our mission")
    const text3 = ref("We work closely with you to ensure our approach aligns with your unique vision, empowering your business to thrive in an ever-changing world.")

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

    // Fetch meta data from API
    onMounted(async () => {
      try {
        const slug = 26
        const res = await apiClient.get(`/metatags/${slug}`)
        Object.assign(data, res.data)
      } catch (err) {
        console.error('Error fetching tags:', err)
      }
    })

    return {
      data,
      span, heading1, heading2, heading3, button, video, color,
      heading, ptag1, column, about,
      heading4, text,
      heading5, text2, span1, span2, span3, div1, div2, div3, img1, img2, img3,
      heading6, heading7, heading8, div4, div5, div6, padding,
      heading9, text3
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
      :color="color"
    />
    <ShowStats />
    <LastingImpact :heading="heading9" :text="text3" />
    <OptionsGrid
      :heading1="heading6"
      :heading2="heading7"
      :heading3="heading8"
      :div1="div4"
      :div2="div5"
      :div3="div6"
      :padding="padding"
    />
    <LastingImpact
      :heading="heading5"
      :text="text2"
      :span1="span1"
      :span2="span2"
      :span3="span3"
      :div1="div1"
      :div2="div2"
      :div3="div3"
      :img1="img1"
      :img2="img2"
      :img3="img3"
    />
    <LastingImpact
      :heading="heading4"
      :text="text"
    />
    <GetInTouch
      :heading="heading"
      :ptag1="ptag1"
      :column="column"
      :about="about"
    />
    <Footer />
  </div>
</template>

<style>
</style>
