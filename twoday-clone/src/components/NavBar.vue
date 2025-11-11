<script>
import '/logo_primary.svg';
export default {
    name: 'NavBar',
};
</script>

<template>
    <div class="navbar">
       <div class="nav-left"> <div class="logo-container">
            <img src="/logo_primary.svg" alt="logo">
        </div>
        <div class="nav-options">
            <a>Services</a>
            <a>Career</a>
            <a>About</a>
        </div>
        </div>
        <div class="nav-right">
            <button>Contact us</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>