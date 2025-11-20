<script>
import apiClient from '../apiclient';

export default {
  name: 'AddPage',

  data() {
    return {
      page: '',
      loading: false,
      error: null,

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

    async post() {
      const pageId = await this.postPages();

      if (!pageId) {
        console.error("Page ID not received!");
        return;
      }

      this.data.page_id = pageId;

      // Now store meta tags
      try {
        const metaRes = await apiClient.post("/metatags", this.data);

        console.log("Meta tag saved:", metaRes.data);

        this.$router.push("/admin");

      } catch (err) {
        console.error("Meta save error:", err.response?.data || err);
      }
    },


    async postPages() {
      if (!this.page.trim()) {
        this.error = "Page name cannot be empty";
        return null;
      }

      this.loading = true;
      this.error = null;

      try {
        const response = await apiClient.post('/pages', { page: this.page });

        console.log("Page saved:", response.data);

        // IMPORTANT: return the ID
        return response.data.user.id;

      } catch (err) {
        console.error("Error:", err.response?.data || err);
        this.error = err.response?.data?.message || "Something went wrong";
        return null;
      } finally {
        this.loading = false;
      }
    },

    back(){
      this.$router.push('/admin');
    }
    ,
  },
};
</script>

<template>
  <div class="admin-container">
    <form class="update-form" @submit.prevent="post">

      <div class="input-row">
        <input type="text" v-model="page" placeholder="Page name" class="input-field" />
        <input type="text" v-model="data.title" placeholder="Title" class="input-field">
      </div>

      <div class="input-row">
        <input type="text" v-model="data.description" placeholder="Description" class="input-field">
        <input type="text" v-model="data.keywords" placeholder="Keywords" class="input-field">
      </div>

      <div class="input-row">
        <input type="text" v-model="data.canonical_url" placeholder="Canonical URL" class="input-field">
      </div>

      <button type="submit" :disabled="loading" class="btn-submit">
        {{ loading ? "Saving..." : "Submit" }}
      </button>

      <button  @click="back" class="btn-submit">
        Back to Admin Page
      </button>

      <p v-if="error" class="error-text">{{ error }}</p>
    </form>
  </div>
</template>

<style></style>
