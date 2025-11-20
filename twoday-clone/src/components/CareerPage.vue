<script>
import HeroComp from './HeroComp.vue';
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
import PurposeProgress from './PurposeProgress.vue';
import GetInTouch from './GetInTouch.vue';
import LastingImpact from './LastingImpact.vue';
import OptionsGrid from './OptionsGrid.vue';
import MeetExperts from './MeetExperts.vue';
import OpenPositions from './OpenPositions.vue';

import apiClient from '../apiclient';
import { useHead } from '@vueuse/head'

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
  data() {
    return {

      span: "CAREERS",
      heading1: "Tomorrow is built",
      heading2: "by the people",
      heading3: "who engineer it",
      button: "Explore open positions",
      video: "/career.mp4",
      color: "white",
      id: "#positions",

      heading4: "Start something big",
      ptag1: "Let's have a chat about the possibilities of the future.",
      ptag2: "",
      ptag3: "",
      button3: "",

      heading5: "Built for people, powered by ambition",
      text: "We believe success is shared, curiosity should travel, and growth never stops. Twoday is where freedom and responsibility meet — and where ambition turns into impact.",

      heading6: "Embracing diversity",
      heading7: "Equal opportunities",
      heading8: "Inclusive environment",
      div1: "We welcome people from every background and value the unique perspectives they bring. Every day, we work to create an environment where colleagues feel safe, respected, and confident to be their authentic selves.",
      div2: "Growth at Twoday is based on skills, potential, and performance – never on bias or discrimination. From hiring to promotions, we’re committed to fairness and transparency in every decision.",
      div3: "Belonging isn’t a benefit – it’s a shared responsibility. We celebrate differences, make sure everyone feels seen and heard, and create spaces – from projects to social events – where everyone is welcome.",
      padding: "yes",
      heading9: "Twoday co-ownership program",
      heading10: "Explore with HiveJumping",
      heading11: "Growth that never stops",
      div4: "Success should be shared – because real ownership fuels real ambition. Our co-ownership program lets you invest directly in Twoday’s future and share in the value we create together.",
      div5: "Careers shouldn’t be limited by location. HiveJumping makes it easy to work from any of our offices across five countries – whether it’s a short stay or a few months abroad.HiveJumping is also about connection. If you’re in town, stop by a local office and meet the team. At Twoday, the best ideas happen when we’re together.",
      div6: "Growth isn’t a side project here – it’s the plan. From day one, you’ll take on real responsibility, solve problems that matter, and shape what comes next.And as you grow, the scope grows with you – bigger projects, broader impact, more chances to lead. Every step forward opens a new door, and you’ll have the trust and support to walk through it.",

      heading12: "Open positions",
      text2: "We are always looking for the right people. Have a look at what specific roles we are looking for right now.",
      experts: [
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
      ],

      page: null,
    };
  },

  async mounted() {
    try {
      const slug = 11
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
      :video="video" :color="color" :id="id" />
    <PurposeProgress />
    <OptionsGrid :heading1="heading6" :heading2="heading7" :heading3="heading8" :div1="div1" :div2="div2"
      :div3="div3" />
    <LastingImpact :heading="heading12" :text="text2" :padding="padding" />
    <OpenPositions />

    <MeetExperts :experts="experts" />
    <LastingImpact :heading="heading5" :text="text" :padding="padding" />
    <OptionsGrid :heading1="heading9" :heading2="heading10" :heading3="heading11" :div1="div4" :div2="div5"
      :div3="div6" />
    <GetInTouch :heading="heading4" :ptag1="ptag1" :ptag2="ptag2" :ptag3="ptag3" :button="button3" />
    <Footer />
  </div>
</template>

<style></style>