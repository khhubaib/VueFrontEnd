<script>
import apiClient from '../apiclient';
import router from '../router/router';

export default {
  name: 'AdminPage',

  data() {
    return {
      
      pages: [],
    };
  },

  methods: {

    fetchPages() {
      apiClient.get('/pages')
        .then(res => {
          this.pages = res.data;
          console.log("Fetched pages:", this.pages);
        })
        .catch(err => {
          console.error("Error loading pages:", err.response?.data || err);
        });
    },

    addpage(){
      this.$router.push('/addpage');
    },

    updatepages(id) {

      this.$router.push(`/updatepage/${id}`)
    },

    deletepages(id) {
      apiClient.delete(`/pages/${id}`)
        .then(response => {
          console.log(response.data);
          this.fetchPages();  // refresh UI
        })
        .catch(error => {
          console.error("Delete error:", error.response?.data || error);
        });
    },

    showtags(id){
      this.$router.push(`page/${id}/tags`);
    }

  },

  mounted() {
    this.fetchPages();
  }
}
</script>

<template>
  <div class="admin-container">

    <table  >
      <tr>
        <th>Id</th>
        <th>Page</th>
        <th>Update</th>
        <th>Delete</th>
        <th>Tags</th>
      </tr>

      <tbody>
        <tr v-for="p in pages" :key="p.id">
          <td>{{ p.id }}</td>
          <td>{{ p.page }}</td>
          <td><button @click="updatepages(p.id)">Update</button></td>
          <td><button @click="deletepages(p.id)">Delete</button></td>
          <td> <button @click="showtags(p.id)">Show Tags</button></td>
        </tr>
      </tbody>

      <button @click="addpage">Add Page</button>
    </table>




  </div>
</template>

<style>

</style>
