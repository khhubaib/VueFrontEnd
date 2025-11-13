<script>
export default {
  name: "LatestNews",
  data() {
    return {
      newsItems: [
        {
          tag: "PARTNERSHIP",
          image: "",
          title: "Only the top 1% selected: Twoday joins the Microsoft Inner Circle for AI Business Solutions",
          desc: "Just three years after its founding, Twoday has been named to the Microsoft FY26 Inner Circle for AI Business Solutions – placing it among the top 1% of Microsoft’s global partners."
        },
        {
          tag: "NEWS",
          image: "/WhatsApp Image 2025-11-12 at 3.11.29 PM (3).jpeg",
          title: "Twoday wins major contract with The National Bank of Denmark",
          desc: "Danmark’s Nationalbank has signed a new contract with Twoday to operate, maintain, and develop its web solution, ensuring strong security and supporting its role as Denmark’s key economic knowledge provider."
        },
        {
          tag: "OUR PEOPLE",
          image: "/WhatsApp Image 2025-11-12 at 3.11.29 PM (2).jpeg",
          title: "Kristin Nyberg from Twoday awarded the Microsoft Power Women Awards 2025",
          desc: "Kristin Nyberg, Country Managing Director of Twoday Norway, has won the Microsoft Power Women Awards 2025, recognizing 20 European tech leaders for excellence in leadership, innovation, and diversity."
        },
        {
          tag: "PARTNERSHIP",
          image: "/WhatsApp Image 2025-11-12 at 3.11.29 PM (1).jpeg",
          title: "Twoday announced as Anchor Partner for Microsoft’s Danish datacenter",
          desc: "Twoday has been named one of just seven Anchor Partners and will play a key role as Microsoft launches its first datacenter in Denmark."
        }
      ]
    }
  }
}
</script>

<template>
  <div class="latest-news">
    <h2>Latest news</h2>

    <div class="news-grid">
      <div v-for="(item, index) in newsItems" :key="index" class="news-card">
        <div class="news-tag">{{ item.tag }}</div>

        <div class="news-image">
          <img :src="item.image" alt="News image" />
        </div>

        <h3 class="news-title">{{ item.title }}</h3>
        <p class="news-desc">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style>

</style>
