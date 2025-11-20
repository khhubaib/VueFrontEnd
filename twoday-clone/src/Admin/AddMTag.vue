<script>
import apiClient from '../apiclient';

export default {
  name: 'AddMTag',

  data() {
    return {
      data: {
        page_id: '',      // send page_id, not page name
        title: '',
        description: '',
        keywords: '',
        canonical_url: '',
      },

    };
  },

  mounted() {
    this.data.page_id = this.$route.params.id;
  },

  methods: {
    postdata() {
      apiClient.post('/metatags', this.data)
        .then(response => {
          console.log('Saved:', response.data);
          console.log("Tag added successfully!");
          this.$router.push(`/page/${this.data.page_id}/tags`)
          this.resetForm();
        })
        .catch(error => {
          console.error('Error:', error.response?.data || error);
        });
    },

    resetForm() {
      this.data = {
        page_id: '',
        title: '',
        description: '',
        keywords: '',
        canonical_url: '',
      };
    }
  }
}
</script>

<template>
  <div class="admin-container">
    <form class="update-form" @submit.prevent="postdata">
      <div class="input-row">
        <input type="text" v-model="data.title" placeholder="Title" class="input-field">
        <input type="text" v-model="data.keywords" placeholder="Keywords" class="input-field">
      </div>
      <div class="input-row">
        <input type="text" v-model="data.description" placeholder="Description" class="input-field">
        
      </div>
      <div class="input-row">
        <input type="text" v-model="data.canonical_url" placeholder="Canonical URL" class="input-field">
      </div>
      <button type="submit" class="update-btn">Submit</button>
    </form>
  </div>
</template>


<style></style>
