<script>
import apiClient from '../apiclient';

export default {
  name: 'UpdateMTag',

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

    updateTag() {
      apiClient.put(`/metatags/${this.id}`, this.data)
        .then(() => {
          console.log("Tag updated successfully!");
          this.$router.push(`/page/${this.data.page_id}/tags`);
        })
        .catch(err => {
          console.error("Error updating tag:", err.response?.data || err);
        });
    },

    back(){
      this.$router.push(`/page/${this.data.page_id}/tags`)
    }
  },

  mounted() {
    this.id = this.$route.params.id;  // get ID from route
    this.fetchTag();
  }
}
</script>

<template>
  <div class="admin-container">
    <form class="update-form" @submit.prevent="updateTag">
      <div class="input-row">
        <input type="text" v-model="data.title" placeholder="Title" class="input-field">
      </div>
      <div class="input-row">
        <input type="text" v-model="data.description" placeholder="Description" class="input-field">
        <input type="text" v-model="data.keywords" placeholder="Keywords" class="input-field">
      </div>
      <div class="input-row">
        <input type="text" v-model="data.canonical_url" placeholder="Canonical URL" class="input-field">
      </div>
      <button type="submit" class="update-btn">Update</button>
      <button @click="back" class="update-btn">Back</button>
    </form>
  </div>
</template>



<style></style>
