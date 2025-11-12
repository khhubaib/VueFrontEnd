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
  },
};
</script>

<template>
    
<div class="header">
        <div class="navbar">
            <div class="nav-left">
                <div class="logo-container">
                    <img src="/logo_primary.svg" alt="logo">
                </div>
                <div class="nav-options">
                    <a>Services</a>
                    <a>Career</a>
                    <a>About</a>
                </div>
            </div>
            <div class="nav-right">
                <a>Contact us</a>

                <div class="menu-icon" @click="toggleMenu">
                    ☰
                </div>
            </div>

            <!-- Mobile dropdown menu -->
            

        </div>

        <div v-if="isOpen==true" class="mobile-menu">
                <a>Services</a>
                <a>Clients</a>
                <a>Career</a>
                <a>Partners</a>
                <a>Insights</a>
                <a>About</a>
            </div>
            

        
</div>

    
</template>

<style lang="scss" scoped></style>