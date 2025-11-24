<script>
import apiClient from '../apiclient';
export default {
  name: "Sidebar",

  computed: {
    activeRoute() {
      return this.$route.path;
    }
  },

  methods: {
    goTo(path) {
      this.$router.push(path);
    },

    logout() {
            apiClient.post('/admin/logout').finally(() => {
                localStorage.removeItem('admin_token');
                localStorage.removeItem('admin_user');
                this.$router.push('/login');
            });
        },
  },
};
</script>

<template>
    <div>
        <div class="sidebar">
    <h2 class="sidebar-title">Admin Panel</h2>

    <ul class="sidebar-menu">


      <li 
        class="sidebar-item"
        :class="{ active: activeRoute === '/welcome' }"
        @click="goTo('/welcome')"
      >
        <i class="fa-solid fa-house sidebar-icon"></i>
        Home
      </li>

      <li 
        class="sidebar-item"
        :class="{ active: activeRoute === '/tagstatus' }"
        @click="goTo('/tagstatus')"
      >
         <i class="fa-solid fa-circle-check sidebar-icon"></i>
        Tag Status
      </li>

      
      <li 
        class="sidebar-item" 
        :class="{ active: activeRoute === '/admin' }"
        @click="goTo('/admin')"
      >
        <i class="fa-solid fa-file sidebar-icon"></i>
        Pages
      </li>

      <li 
        class="sidebar-item"
        :class="{ active: activeRoute === '/admin/meta-tags' }"
        @click="goTo('/admin/meta-tags')"
      >
        <i class="fa-solid fa-tags sidebar-icon"></i>
        Meta Tags
      </li>

      <li 
        class="sidebar-item"
        :class="{ active: activeRoute === '/logout' }"
        @click="logout"
      >
        <i class="fas fa-sign-out-alt sidebar-icon"></i>
        Logout
      </li>

      
    </ul>
  </div>
    </div>
  
</template>

<style>
/* your styles */
</style>
