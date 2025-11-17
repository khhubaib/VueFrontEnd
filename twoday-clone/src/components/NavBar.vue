<script>
import '/logo_primary.svg';

export default {
  name: 'NavBar',

  data() {
    return {
      isOpen: false,
      lastScrollY: 0,
    };
  },

  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },

    gotocontact() {
      this.$router.push('/contact');
    },

    handleScroll() {
  const navbar = this.$refs.navbar;
  const mobile = this.$refs.mobile;

  if (!navbar) return;

  const currentScroll = window.scrollY;

  if (currentScroll < 50) {
    // near top → always show navbar
    navbar.classList.remove("hide");
    if (mobile) mobile.classList.remove("hide");
    this.lastScrollY = currentScroll;
    return;
  }

  if (currentScroll > this.lastScrollY) {
    // scrolling down → hide navbar and mobile menu
    navbar.classList.add("hide");
    if (mobile && this.isOpen) mobile.classList.add("hide");
  } else {
    // scrolling up → show navbar and mobile menu
    navbar.classList.remove("hide");
    if (mobile && this.isOpen) mobile.classList.remove("hide");
  }

  this.lastScrollY = currentScroll;
}

  },

  mounted() {
    this.lastScrollY = window.scrollY;
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>


<template>
    
<div class="header">
        <div class="navbar" ref="navbar">
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

        <div v-if="isOpen==true" class="mobile-menu" ref="mobile">
                <router-link to="/services" class="nav-atags">Services</router-link>
                <router-link to="/career" class="nav-atags">Career</router-link>
                <router-link to="/about" class="nav-atags">About</router-link>
                <a class="mob-menu-btn" @click="gotocontact">Contact us</a>
            </div>
            

        
</div>

    
</template>

<style lang="scss" scoped></style>