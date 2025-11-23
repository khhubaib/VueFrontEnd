<template>
  <div class="login-card">
    
    <h2>Admin Login</h2>
    <div class="inputs">
        <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    </div>
    

    <button @click="login" :disabled="loading">{{ loading ? 'Signing in...' : 'Sign In' }}</button>
    <p v-if="error" class="error">{{ error }}</p>
  </div>

  <button class="home" @click="home" >Home</button>


  
</template>

<script>
import apiClient from '../apiclient';

export default {
  data() {
    return {
      email: '',
      password: '',
      loading: false,
      error: null,
      // your uploaded file path (use if you want to show logo)
      logoUrl: '/mnt/data/b314c5b9-a85d-42c3-8bef-c720de9f5556.png',
    };
  },
  methods: {
    login() {
      this.loading = true;
      this.error = null;
      console.log("Login started");
      apiClient.post('/admin/login', {
        email: this.email,
        password: this.password
      }).then(res => {
        console.log("Response received", res.data);
        const token = res.data.token;
        // store the token (plain token returned)
        localStorage.setItem('admin_token', token);
        console.log('correct');
        // optionally store admin data
        localStorage.setItem('admin_user', JSON.stringify(res.data.admin));
        this.$router.push('/welcome'); // or your dashboard route
      }).catch(err => {
        this.error = err.response?.data?.message || 'Login failed';
      }).finally(() =>{
        console.log("Finally called");
        this.loading = false;
      } );
    },

    home(){
        this.$router.push('/');
    }
 
}

  }

</script>

<style scoped>

.home{
    width: fit-content;
    position: fixed;
    top:90vh;
    right: 3vw;
}
/* minimal styling matching your admin theme */
.login-card{
  max-width: 420px;
  margin: 60px auto;
  background: #2e2e2e;
  padding: 24px;
  border-radius: 10px;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inputs{
    display: flex;
  flex-direction: column;
  width: 80%; /* or any width less than 100% */
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}
input{
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: none;
}
button{
  width: 85%;
  padding: 12px;
  border-radius: 6px;
  border: none;
  background: #3b7bfd;
  color: #fff;
  font-weight: 600;
}
.error{ color: #ff7373; margin-top: 10px; }
.logo{ width: 80px; margin-bottom: 10px; }
</style>
