<script>
import apiClient from '../apiclient';

export default {
  name: 'UpdatePage',

  data() {
    return {
      page: "",
      id: null,
    };
  },

  methods: {

    updatePage() {
      apiClient.put(`/pages/${this.id}`, { page: this.page })
        .then(response => {
          console.log('Saved:', response.data);
          this.$router.push("/admin"); 
        })
        .catch(err => {
          console.error("Update error:", err.response?.data || err);
        });
    }
  },

  mounted() {
    this.id = this.$route.params.id;
  }
};
</script>

<template>
  <div class="admin-container">
    <form @submit.prevent="updatePage" >
      <input type="text" v-model="page" placeholder="page" class="input-field">
      <button type="submit" class="submit-button">Update</button>
    </form>
  </div>
</template>

<style>
.admin-container{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1f1f1f;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  box-sizing: border-box;
}

.update-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #2e2e2e;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  min-width: 300px;
  max-width: 400px;
  width: 100%;
}

.input-field {
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  outline: none;
  background-color: #3b3b3b;
  color: #fff;
}

.input-field::placeholder {
  color: #ccc;
}

.submit-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.submit-button:hover {
  background-color: #45a049;
}

.submit-button:active {
  transform: scale(0.98);
}

/* Responsive */
@media (max-width: 500px) {
  .update-form {
    padding: 20px;
    min-width: 250px;
  }

  .input-field {
    font-size: 14px;
  }
}
</style>
