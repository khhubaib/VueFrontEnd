<script>
import apiClient from '../apiclient';
import router from '../router/router';

export default {
  name: 'AdminPage',

  data() {
    return {
      tags: [],       // All data fetched from backend
      currentPage: 1, // Which page we are currently on
      itemsPerPage: 5, // Only show 5 rows per page
      searchQuery: "",
    };
  },

  computed: {
    paginatedTags() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredTags.slice(start, end);

    },

    totalPages() {
      return Math.ceil(this.filteredTags.length / this.itemsPerPage);
    },
    filteredTags() {
      if (!this.searchQuery) {
        return this.tags;
      }

      const q = this.searchQuery.toLowerCase();

      return this.tags.filter(t =>
        t.page.toLowerCase().includes(q)
      );
    }
  },

  methods: {

    fetchPages() {
      apiClient.get('/tags')
        .then(res => {
          this.tags = res.data.tags;
          console.log("Fetched pages:", this.tags);
        })
        .catch(err => {
          console.error("Error loading pages:", err.response?.data || err);
        });
    },

    addpage() {
      this.$router.push('/addtag');
    },

    updatepages(id) {

      this.$router.push(`/updatetag/${id}`)
    },

    deletepages(id) {
      apiClient.delete(`/metatags/${id}`)
        .then(response => {
          console.log(response.data);
          this.fetchPages();  // refresh UI
        })
        .catch(error => {
          console.error("Delete error:", error.response?.data || error);
        });
    },

    showtags(id) {
      this.$router.push(`page/${id}/tags`);
    },

    home() {
      this.$router.push('/');
    },

    goToPage(page) {
      this.currentPage = page;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

  },



  mounted() {
    this.fetchPages();
  }
}
</script>

<template>
  <div class="admin-container">

    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search pages..." class="search-box" />
      <button><i class="fa-solid fa-magnifying-glass"></i></button>
      <button><i class="fa-solid fa-xmark"></i></button>
    </div>
    

    <table>
      <tr>
        <th class="name-h" >Page Name</th>
        <th class="actions-h" colspan="3">Actions</th>
      </tr>

      <tbody>
        <tr v-for="t in paginatedTags" :key="t.id">


          <td class="name-h" >{{ t.page }}</td>
          <td class="actions-d"><button @click="updatepages(t.id)"><i class="fa-solid fa-pen-to-square"></i></button></td>
          <td class="actions-d"><button @click="deletepages(t.id)"><i class="fa-solid fa-trash"></i></button></td>
          <td class="actions-d"> <button @click="showtags(t.id)"><i class="fa-solid fa-eye"></i></button></td>
        </tr>
      </tbody>

      
    </table>
    <button @click="addpage">Add <i class="fa-regular fa-square-plus"></i> </button>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1"><i class="fa-solid fa-backward"></i></button>

      <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="{ active: currentPage === page }">
        {{ page }}
      </button>

      <button @click="nextPage" :disabled="currentPage === totalPages"><i class="fa-solid fa-forward"></i></button>
    </div>





  </div>
</template>

<style>
.name-h{
width: 55%;
border-right: 1px solid grey;
}
.actions-h{
width: 45%;
text-align: center;
}

.actions-d{
width: 15%;
}

.search-bar{
  display: flex;
  gap: 2rem;
}
</style>
