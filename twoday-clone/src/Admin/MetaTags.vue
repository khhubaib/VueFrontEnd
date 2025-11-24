<script>
import apiClient from '../apiclient';
import Sidebar from './Sidebar.vue';
import TopBar from './TopBar.vue';

export default {
  name: 'MetaTags',

  components:{
    Sidebar,
    TopBar,
  },

  data() {
    return {
      id: null,  // meta tag ID from route
      data: {
        page_id: '',
        title: '',
        description: '',
        keywords: '',
        canonical_url: '',
      },
    };
  },

  methods: {
    fetchTag() {
      apiClient.get(`/metatags/${this.id}`)
        .then(res => {
          this.data = res.data; // pre-fill form
        })
        .catch(err => {
          console.error("Error fetching tag:", err.response?.data || err);
        });
    },
    back(){
      this.$router.push(`/admin`);
    }
  },

  mounted() {
    this.id = this.$route.params.id;  // get ID from route
    this.fetchTag();
  }
}
</script>

<template>
  <sidebar/>
  <TopBar/>
  <div class="admin-container">
    <form class="update-form">
      <div class="input-row">
        <input type="text" v-model="data.page" placeholder="Page" class="input-field" disabled>
        <input type="text" v-model="data.title" placeholder="Title" class="input-field" disabled>
        
      </div>
      <div class="input-row">
        <input type="text" v-model="data.description" placeholder="Description" class="input-field" disabled>
        <input type="text" v-model="data.keywords" placeholder="Keywords" class="input-field" disabled>
        
      </div>
      <div class="input-row">
        <input type="text" v-model="data.canonical_url" placeholder="Canonical URL" class="input-field" disabled>
      </div>
      <button @click="back" class="update-btn"><i class="fa-solid fa-circle-chevron-left"></i> Back</button>
    </form>
  </div>
</template>



<style></style>
