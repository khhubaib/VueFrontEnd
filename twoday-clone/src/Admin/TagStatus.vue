<template>
  <div class="admin-container">

    <Sidebar />

    <!-- Search Bar -->
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search meta tags..." class="search-box" />
      <button class="search-btn" @click="search"><i class="fa-solid fa-magnifying-glass"></i></button>
      <button class="search-btn" @click="clear"><i class="fa-solid fa-xmark"></i></button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Sr No.</th>
          <th>Page Name</th>
          <th>Title</th>
          <th>Description</th>
          <th>Keywords</th>
          <th>Canonical URL</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tag, index) in tags" :key="tag.id">
          <td>{{ (currentPage-1)*pageSize + index + 1 }}</td>
          <td>{{ tag.page }}</td>
          <td>{{ tag.title || '-' }}</td>
          <td>{{ tag.description || '-' }}</td>
          <td>{{ tag.keywords || '-' }}</td>
          <td>{{ tag.canonical_url || '-' }}</td>
          <td :class="tag.status === 'Active' ? 'active' : 'inactive'">
            <i v-if="tag.status==='Active'" class="fa-solid fa-circle-check sidebar-icon"></i>
            <i v-else class="fa-solid fa-circle-xmark sidebar-icon" style="color: red;"></i>
          </td>
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
</template>

<script>
import Sidebar from './Sidebar.vue';
import apiClient from '../apiclient';

export default {
  name: 'TagStatus',
  components: { Sidebar },
  data() {
    return {
      tags: [],
      currentPage: 1,
      pageSize: 5,
      searchQuery: ""
    };
  },

  mounted() {
    this.fetchAllTags();
  },

  methods: {
    async fetchAllTags() {
      try {
        const response = await apiClient.get(`/tags/all-status?page=${this.currentPage}`);
        this.tags = response.data.tags;
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    },

    search() {
      apiClient.get(`/tags/all-status/?query=${this.searchQuery}&page=${this.currentPage}`)
        .then(res => {
          this.tags = res.data.tags;
        })
        .catch(err => {
          console.error("Error searching:", err.response?.data || err);
        });
    },

    clear() {
      this.searchQuery = "";
      this.fetchAllTags();
    },

    nextPage() {
      this.currentPage++;
      this.fetchAllTags();
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchAllTags();
      }
    }
  }
};
</script>

<style scoped>
.active {
  color: green;
  font-weight: bold;
}
.inactive {
  color: red;
  font-weight: bold;
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
