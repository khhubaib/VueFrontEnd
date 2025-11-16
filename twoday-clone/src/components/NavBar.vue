<script>
import '/logo_primary.svg';
export default {
    name: 'NavBar',

    data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      if(this.isOpen==true){
        this.isOpen=false;
      }
      else{
        this.isOpen=true;
      };
    },
    gotocontact(){
      this.$router.push('/contact');
    }
  },
};
</script>

<template>
    
<div class="header">
        <div class="navbar">
            <div class="nav-left">
                <div class="logo-container">

                  <router-link to="/">
                    <img src="/logo_primary.svg" alt="logo">
                    </router-link>
                </div>
                <div class="nav-options">
                    <router-link to="/services" class="nav-atags">Services</router-link>
                    <router-link to="/career" class="nav-atags">Career</router-link>
                    <router-link to="/about" class="nav-atags">About</router-link>
                </div>

              
            </div>
            <div class="nav-right">
                <a @click="gotocontact">Contact us</a>

                <div class="menu-icon" @click="toggleMenu">
                    ☰
                </div>
            </div>

            <!-- Mobile dropdown menu -->
            

        </div>

        <div v-if="isOpen==true" class="mobile-menu">
                <router-link to="/services" class="nav-atags">Services</router-link>
                <router-link to="/career" class="nav-atags">Career</router-link>
                <router-link to="/about" class="nav-atags">About</router-link>
                <a class="mob-menu-btn" @click="gotocontact">Contact us</a>
            </div>
            

        
</div>

    
</template>

<style lang="scss" scoped></style>