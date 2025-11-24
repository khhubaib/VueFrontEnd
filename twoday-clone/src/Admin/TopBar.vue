<script>
export default{
  name: 'TopBar',
  data(){
    return{
        name: "",
        mode: "",
    };
  },

  methods: {
    toggleDark() { 
      if(this.mode=="light"){
        this.mode="dark";
      }
      else{
        this.mode="light";
      }
   },
    openSettings() { this.$emit('open-settings'); },
    openProfile() { this.$emit('open-profile'); },
    
  },
  mounted(){
    const adminData = JSON.parse(localStorage.getItem('admin_user'));
        this.name = adminData?.name || "Admin";
  }
}
</script>

<template>
  <header class="top-bar" role="banner">
    <div class="topbar-inner">
      <div class="topbar-left">
        <div class="app-name">Hi {{ name }}!</div>
      </div>

      <div class="topbar-right" aria-hidden="false">
        <button class="icon-btn" @click="toggleDark" title="Toggle dark mode" aria-label="Toggle dark mode">
          <i class="fas fa-moon"></i>
        </button>

        <button class="icon-btn" @click="openSettings" title="Settings" aria-label="Settings">
          <i class="fas fa-cog"></i>
        </button>

        <button class="profile-btn" @click="openProfile" title="Profile" aria-label="Profile">
          <i class="fas fa-user-circle"></i>
          <span class="profile-name">Admin</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style>
:root {
    --topbar-height: 60px;
    --bg: #0c1e41;
    --border: rgba(28, 31, 38, 0.12);
}

.top-bar {
    position: fixed;
    top: 0;
    left: 280px;
    height: var(--topbar-height);
    width: calc(100% - 280px);
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    z-index: 50;
    display: flex;
    align-items: center;
}

.topbar-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 25px;
    box-sizing: border-box;
}

.topbar-left .app-name {
    color: white;
    font-size: 20px;
    font-weight: 600;
}

.topbar-right {
    display: flex;
    align-items: center;
    gap: 18px;
}

.icon-btn,
.profile-btn {
    background: transparent;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px;
    border-radius: 6px;
    transition: background 0.2s ease;
}

.icon-btn:hover,
.profile-btn:hover {
    background: rgba(255, 255, 255, 0.1);
}

.profile-name {
    font-size: 16px;
    font-weight: 500;
}
</style>