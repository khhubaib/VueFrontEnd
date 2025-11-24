<script>
import apiClient from '../apiclient';
import router from '../router/router';
import Sidebar from './Sidebar.vue';
import TopBar from './TopBar.vue';
export default {
  name: 'AdminPage',

  components:{
    Sidebar,
    TopBar,
  },

  data() {
    return {
      tags: [],       // All data fetched from backend
      currentPage: 1, 
      searchQuery: "",
    };
  },

  mounted(){
    this.fetchPages();
  },

 
  methods: {
    fetchPages() {
      apiClient.get(`/tags/?page=${this.currentPage}`)
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
    nextPage() {
        this.currentPage++;
        this.fetchPages();
      },
       prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchPages();
      }
    },

    search(){
      apiClient.get(`/tags/search/?query=${this.searchQuery}`)
        .then(res => {
          this.tags = res.data.tags;
          console.log("Fetched pages:", this.tags);
        })
        .catch(err => {
          console.error("Error loading pages:", err.response?.data || err);
        });
    },

    clear(){
      this.searchQuery = "";
      this.fetchPages();
    },

     
   

  },

}



  
</script>

<template>

  <Sidebar/>
  <TopBar/>

  <div class="admin-container">

    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search pages..." class="search-box" />
      <button class="search-btn" @click="search"><i class="fa-solid fa-magnifying-glass"></i></button>
      <button class="search-btn" @click="clear"><i class="fa-solid fa-xmark"></i></button>
    </div>
    

    <table class="pages-table">
      <tr class="pages-table">
        <th class="sr-header">Sr No.</th>
        <th class="name-h" >Page Name</th>
        <th class="actions-h" colspan="3">Actions</th>
      </tr>

      <tbody>
        <tr v-for="(t,index) in tags" :key="t.id" class="pages-table">

          <td class="sr-header">{{ index+1 }}</td>
          <td class="name-h" >{{ t.page }}</td>
          <td class="actions-d" ><button @click="updatepages(t.id)" class="update"><i class="fa-solid fa-pen-to-square"></i></button></td>
          <td class="actions-d"><button @click="deletepages(t.id)" class="delete"><i class="fa-solid fa-trash"></i></button></td>
          <td class="actions-d"> <button @click="showtags(t.id)" class="show"><i class="fa-solid fa-eye"></i></button></td>
        </tr>
      </tbody>

      
    </table>
    <button @click="addpage" class="add-btn">Add <i class="fa-regular fa-square-plus"></i> </button>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1"><i class="fa-solid fa-backward"></i></button>
      <span>Page {{ currentPage }}</span>
      <button @click="nextPage" :disabled="tags.length < 5"><i class="fa-solid fa-forward"></i></button>
    </div>





  </div>

 
  
</template>

<style>



.update{
  background-color: rgb(212, 127, 30);
}

.delete{
  background-color: rgb(134, 46, 46)
}

 .pages-table td{
  padding: 10px 20px;
 }

 .pages-table{
  margin-bottom: 14px;
 }
.sr-header{
  width: 10%;
  border-right: 1px solid grey;
}
.name-h{
width: 70%;
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
