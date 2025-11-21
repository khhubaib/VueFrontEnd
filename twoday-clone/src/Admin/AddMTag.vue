<script>
import apiClient from '../apiclient';

export default {
  name: 'AddMTag',

  data() {
    return {
      data: {
        page: '',
        title: '',
        description: '',
        keywords: '',
        canonical_url: '',
      },

    };
  },

  mounted() {

  },

  methods: {
    postdata() {
      apiClient.post('/metatags', this.data)
        .then(response => {
          console.log('Saved:', response.data);
          console.log("Tag added successfully!");
          this.$router.push(`/admin`)
          this.resetForm();
        })
        .catch(error => {
          console.error('Error:', error.response?.data || error);
        });
    },

    back() {
      this.$router.push('/admin');
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
        <input type="text" v-model="data.page" placeholder="Page" class="input-field">
        <input type="text" v-model="data.title" placeholder="Title" class="input-field">

      </div>
      <div class="input-row">
        <input type="text" v-model="data.description" placeholder="Description" class="input-field">
        <input type="text" v-model="data.keywords" placeholder="Keywords" class="input-field">

      </div>
      <div class="input-row">
        <input type="text" v-model="data.canonical_url" placeholder="Canonical URL" class="input-field">
      </div>

      <div class="input-row">
        <button type="submit" class="update-btn">Submit <i class="fa-solid fa-caret-right"></i></button>
        <button @click="back" class="update-btn"><i class="fa-solid fa-circle-chevron-left"></i> Back </button>
      </div>
    </form>
  </div>
</template>


<style></style>
