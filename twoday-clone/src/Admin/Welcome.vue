<script>
import Sidebar from './Sidebar.vue';
import apiClient from '../apiClient';
import TopBar from './TopBar.vue';

export default {
    name: 'Welcome',

    components: {
        Sidebar,
        TopBar,
    },
    data() {
        return {
            name: "",
            totalPages: 0,
            active: 0,
            nactive: 0,
        };
    },

    mounted() {
        const adminData = JSON.parse(localStorage.getItem('admin_user'));
        this.name = adminData?.name || "Admin";
        this.fetchTotalPages();
        this.fetchCounts();
    },

    methods: {
    
         async fetchTotalPages() {
            try {
                const response = await apiClient.get('/tags/all'); // backend route
                // response.data.tags contains the array of tags
                this.totalPages = response.data.tags.length; // set totalPages
            } catch (error) {
                console.error("Error fetching pages:", error);
            }
        },

        async fetchCounts() {
      try {
        const response = await apiClient.get('/tags/count-status');
        this.totalPages = response.data.total_pages;
        this.active = response.data.active_tags;
        this.nactive = response.data.non_active_tags;

      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    }
    }
};
</script>

<template>
    <div class="dashboard">
        <Sidebar />
        
        <div class="welcome-container">
            <TopBar/>
            <!-- Welcome Section -->
            <div class="welcome-section">
                <h1>Welcome</h1>
                <p>Use the sidebar to navigate through the dashboard.</p>
            </div>

            <!-- Overview Cards -->
            <div class="overview-cards">
                <div class="card">
                    <i class="fas fa-file-alt card-icon"></i>
                    <h3>Total Pages</h3>
                    <p>{{totalPages}}</p>
                </div>
                <div class="card">
                    <i class="fa-solid fa-circle-check card-icon"></i>
                    <h3>Active Meta Tags</h3>
                    <p>{{active}}</p>
                </div>
                <div class="card">
                    <i class="fa-solid fa-circle-xmark card-icon" ></i>
                    <h3>Non-active Meta Tags</h3>
                    <p>{{nactive}}</p>
                </div>
            </div>

            
        </div>

    </div>
</template>

<style>
.welcome-container {
    margin-left: 220px; /* adjust based on sidebar width */
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: calc(100%-280px);
    margin-left: 280px;
    min-height: 80vh;
}
.welcome-section{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.welcome-section h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}
.welcome-section h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.overview-cards {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}
.card {
    background: #1c1f26;
    padding: 20px;
    border-radius: 8px;
    flex: 1;
    text-align: center;
}

.card h3,.card p{
    color: #FFFFFF;
}

.recent-activity {
    margin-top: 30px;
}
.recent-activity ul {
    list-style-type: disc;
    margin-left: 20px;
}

.logout {
    position: fixed;
    top: 90vh;
    right: 3vh;
    padding: 10px 20px;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.logout:hover {
    background-color: #c0392b;
}

.card-icon{
    color: #FFFFFF;
    height: 50px;
}
</style>
