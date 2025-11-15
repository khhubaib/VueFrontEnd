<script>

export default {
    name: 'OpenPositions',

    data() {
        return {

            positions: [
                {
                    name: "Helsinki, Tampere, Turku",
                    country: "Finland",
                    position2: "Azure & Power Platform/Dynamics 365 Developer",
                    field: "Business Applications",
                    icon: "→",
                },
                {
                    name: "Helsinki, Tampere, Turku",
                    country: "Denmark",
                    position2: "Business Central Developer",
                    field: "Business Applications",
                    icon: "→",
                },
                {
                    name: "Helsinki, Tampere, Turku",
                    country: "Denmark",
                    position2: "Business Central Consultant",
                    field: "Business Applications",
                    icon: "→",
                },
                {
                    name: "Helsinki, Tampere, Turku",
                    country: "Denmark",
                    position2: "Azure Cloud Consultant- Cloud Platform & Security",
                    field: "Cloud Platform & security",
                    icon: "→",
                },
                {
                    name: "Helsinki, Tampere, Turku",
                    country: "Denmark",
                    position2: "Business Analytics Consultant",
                    field: "Data & AI",
                    icon: "→",
                },
                {
                    name: "Helsinki, Tampere, Turku",
                    country: "Finland",
                    position2: "Dynamics 365/ Power Platform Architect",
                    field: "Business Applications",
                    icon: "→",
                },
                {
                    name: "Helsinki, Tampere, Turku",
                    country: "Sweden",
                    position2: "Business Intelligence Consultant",
                    field: "twoday Analytics AB",
                    icon: "→",
                },
                {
                    name: "Helsinki, Tampere, Turku",
                    country: "Finland",
                    position2: "Power Platform Functional Consultant",
                    field: "Business Applications",
                    icon: "→",
                },
            ]
        };
    }
}

</script>

<template>
    <div class="postion-flex1">
        <div class="position-flex2">
            <div>
                <span>Filter</span>
            </div>
            <div>
                <select>
                    <option value="" disabled selected>Country:All Countries</option>
                </select>
            </div>
            <div>
                <select>
                    <option value="" disabled selected>Department:All Departments</option>
                </select>
            </div>
        </div>

        <div v-for="(position, index) in positions" :key="index" class="job-card">

            <div class="job-left">
                <div class="job-city">{{ position.name }}</div>
                <div class="job-country">{{ position.country }}</div>
            </div>

            <!-- CENTER (Title) -->
            <div class="job-title2">
                {{ position.position2 }}
            </div>

            <!-- RIGHT -->
            <div class="job-right">
                <span class="badge">{{ position.field }}</span>
                <span class="arrow">→</span>
            </div>
        </div>

        <div class="position-flex2">
            <div class="job-button">
                <a>Load more jobs</a>
            </div>
        </div>
    </div>



</template>

<style>

</style>