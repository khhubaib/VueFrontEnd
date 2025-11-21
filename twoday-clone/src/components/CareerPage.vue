<script>
import { reactive, ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import NavBar from './NavBar.vue';
import HeroComp from './HeroComp.vue';
import Footer from './Footer.vue';
import PurposeProgress from './PurposeProgress.vue';
import GetInTouch from './GetInTouch.vue';
import LastingImpact from './LastingImpact.vue';
import OptionsGrid from './OptionsGrid.vue';
import MeetExperts from './MeetExperts.vue';
import OpenPositions from './OpenPositions.vue';
import apiClient from '../apiclient'

export default {
  name: 'CareerPage',
  components: {
    HeroComp,
    NavBar,
    Footer,
    PurposeProgress,
    GetInTouch,
    LastingImpact,
    OptionsGrid,
    MeetExperts,
    OpenPositions
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

    // HeroComp refs
    const span = ref("CAREERS")
    const heading1 = ref("Tomorrow is built")
    const heading2 = ref("by the people")
    const heading3 = ref("who engineer it")
    const button = ref("Explore open positions")
    const video = ref("/career.mp4")
    const color = ref("white")
    const id = ref("#positions")

    // GetInTouch refs
    const heading4 = ref("Start something big")
    const ptag1 = ref("Let's have a chat about the possibilities of the future.")
    const ptag2 = ref("")
    const ptag3 = ref("")
    const button3 = ref("")

    // LastingImpact & OptionsGrid content
    const heading5 = ref("Built for people, powered by ambition")
    const text = ref("We believe success is shared, curiosity should travel, and growth never stops. Twoday is where freedom and responsibility meet — and where ambition turns into impact.")

    const heading6 = ref("Embracing diversity")
    const heading7 = ref("Equal opportunities")
    const heading8 = ref("Inclusive environment")
    const div1 = ref("We welcome people from every background and value the unique perspectives they bring. Every day, we work to create an environment where colleagues feel safe, respected, and confident to be their authentic selves.")
    const div2 = ref("Growth at Twoday is based on skills, potential, and performance – never on bias or discrimination. From hiring to promotions, we’re committed to fairness and transparency in every decision.")
    const div3 = ref("Belonging isn’t a benefit – it’s a shared responsibility. We celebrate differences, make sure everyone feels seen and heard, and create spaces – from projects to social events – where everyone is welcome.")
    const padding = ref("yes")

    const heading9 = ref("Twoday co-ownership program")
    const heading10 = ref("Explore with HiveJumping")
    const heading11 = ref("Growth that never stops")
    const div4 = ref("Success should be shared – because real ownership fuels real ambition. Our co-ownership program lets you invest directly in Twoday’s future and share in the value we create together.")
    const div5 = ref("Careers shouldn’t be limited by location. HiveJumping makes it easy to work from any of our offices across five countries – whether it’s a short stay or a few months abroad.HiveJumping is also about connection. If you’re in town, stop by a local office and meet the team. At Twoday, the best ideas happen when we’re together.")
    const div6 = ref("Growth isn’t a side project here – it’s the plan. From day one, you’ll take on real responsibility, solve problems that matter, and shape what comes next.And as you grow, the scope grows with you – bigger projects, broader impact, more chances to lead. Every step forward opens a new door, and you’ll have the trust and support to walk through it.")

    const heading12 = ref("Open positions")
    const text2 = ref("We are always looking for the right people. Have a look at what specific roles we are looking for right now.")

    // Experts array
    const experts = ref([
      {
        name: "Meet Frank,",
        designation: "Enterprise Architect",
        btn: "Meet Frank →",
        ptag: "“I wanted to make technology matter — not just for systems, but for people”",
        img: "/frank.jpeg",
        span: "MEET OUR EXPERTS"
      },
      {
        name: "MeetAnne,",
        designation: "Senior Solution Architect",
        btn: "Read more →",
        ptag: "“The people I met were genuinely interested in me and my experiences, not just my grades.”",
        img: "/anne.png",
        span: "MEET OUR EXPERTS"
      },
      {
        name: "Meet Nur,",
        designation: "Software Designer",
        btn: "Read more →",
        ptag: "“I've grown here-not just as professional but as a person”",
        img: "/nur.png",
        span: "MEET OUR EXPERTS"
      },
    ])

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
        const slug = 31
        const res = await apiClient.get(`/metatags/${slug}`)
        Object.assign(data, res.data)
      } catch (err) {
        console.error('Error fetching tags:', err)
      }
    })

    return {
      data,
      span, heading1, heading2, heading3, button, video, color, id,
      heading4, ptag1, ptag2, ptag3, button3,
      heading5, text,
      heading6, heading7, heading8, div1, div2, div3, padding,
      heading9, heading10, heading11, div4, div5, div6,
      heading12, text2,
      experts
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
      :id="id"
    />
    <PurposeProgress />
    <OptionsGrid :heading1="heading6" :heading2="heading7" :heading3="heading8" :div1="div1" :div2="div2" :div3="div3" />
    <LastingImpact :heading="heading12" :text="text2" :padding="padding" />
    <OpenPositions />
    <MeetExperts :experts="experts" />
    <LastingImpact :heading="heading5" :text="text" :padding="padding" />
    <OptionsGrid :heading1="heading9" :heading2="heading10" :heading3="heading11" :div1="div4" :div2="div5" :div3="div6" />
    <GetInTouch :heading="heading4" :ptag1="ptag1" :ptag2="ptag2" :ptag3="ptag3" :button="button3" />
    <Footer />
  </div>
</template>

<style></style>
