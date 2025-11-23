<template>
<div>
<Sidebar/>  
  <div class="admin-container">


    <h1 class="title">Meta Tags</h1>

    <!-- Search Bar -->
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search meta tags..." class="search-box" />
      <button class="search-btn" @click="search"><i class="fa-solid fa-magnifying-glass"></i></button>
      <button class="search-btn" @click="clear"><i class="fa-solid fa-xmark"></i></button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Page</th>
          <th>Title</th>
          <th>Description</th>
          <th>Keywords</th>
          <th>Canonical URL</th>
          <th colspan="3" style="text-align: center;">Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="tag in tags" :key="tag.id">
          <td data-label="Page">{{ tag.page }}</td>
          <td data-label="Title">{{ tag.title }}</td>
          <td data-label="Description">{{ tag.description }}</td>
          <td data-label="Keywords">{{ tag.keywords }}</td>
          <td data-label="Canonical URL">{{ tag.canonical_url }}</td>
          <td class="actions-d" ><button @click="updatepages(tag.id)" class="update"><i class="fa-solid fa-pen-to-square"></i></button></td>
          <td class="actions-d"><button @click="deletepages(tag.id)" class="delete"><i class="fa-solid fa-trash"></i></button></td>
          <td class="actions-d"> <button @click="showtags(tag.id)" class="show"><i class="fa-solid fa-eye"></i></button></td>
        </tr>
      </tbody>
    </table>

    <p v-if="tags.length === 0" style="color: #aaa; margin-top:10px;">
      No meta tags found.
    </p>

    <!-- Pagination -->
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1"><i class="fa-solid fa-backward"></i></button>
      <span>Page {{ currentPage }}</span>
      <button @click="nextPage" :disabled="tags.length < pageSize"><i class="fa-solid fa-forward"></i></button>
    </div>

  </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import apiClient from "../apiclient";

export default {
  name: "ShowMeta",

  components:{
    Sidebar,
  } ,

  data() {
    return {
      tags: [],        // fetched data
      currentPage: 1,  // pagination
      searchQuery: "",
      pageSize: 5
    };
  },

  mounted() {
    this.fetchTags();
  },

  methods: {
    fetchTags() {
      apiClient.get(`/tags/?page=${this.currentPage}`)
        .then(res => {
          this.tags = res.data.tags;
        })
        .catch(err => {
          console.error("Error loading:", err.response?.data || err);
        });
    },

    updatepages(id) {
      this.$router.push(`/updatetag/${id}`)
    },

    deletepages(id) {
      apiClient.delete(`/metatags/${id}`)
        .then(response => {
          console.log(response.data);
          this.fetchTags();  // refresh UI
        })
        .catch(error => {
          console.error("Delete error:", error.response?.data || error);
        });
    },

    showtags(id) {
      this.$router.push(`/page/${id}/tags`);
    },

    // Search meta tags
    search() {
      apiClient.get(`/tags/search/?query=${this.searchQuery}&page=${this.currentPage}`)
        .then(res => {
          this.tags = res.data.tags;
        })
        .catch(err => {
          console.error("Error searching:", err.response?.data || err);
        });
    },

    // Clear search
    clear() {
      this.searchQuery = "";
      this.fetchTags();
    },

    // Pagination controls
    nextPage() {
      this.currentPage++;
      this.fetchTags();
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchTags();
      }
    }
  }
};
</script>

<style scoped>
.actions-d{
  width: fit-content;
}

.search-bar{
  display: flex;
  gap: 2rem;
  margin-bottom: 10px;
}

.search-btn{
  border-radius: 50%;
  padding: 0px 20px;
}

.pagination{
  margin-top: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>
