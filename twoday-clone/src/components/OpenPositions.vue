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
    <div class="postion-flex1" id="positions">
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
/* Footer */

.footer-div {
    background-color: black;
    color: white;
    margin: 0;
}


.footer-flex {
    display: flex;
    padding: 64px 24px;
    column-gap: 10rem;
}

.g-i-t {
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
    align-items: flex-start;
}

.footer-menus {
    flex-basis: 70%;
    display: flex;
    justify-content: space-around;
    column-gap: 2rem;
    row-gap: 3rem;

}

.g-i-t-content p {
    font-size: 18px;
    margin: 7px 0;
    font-weight: 600;
    color: #FFFFFF;
    text-align: left;

}


.g-i-t-button a {
    font-size: 16px;
    font-weight: 600;
    padding: 16px 32px;
    border: none;
    border-radius: 0.8rem;
    background-color: #FFFFFF;
    color: #1b1b1b;
    align-items: center;
}

.g-i-t-button a:hover {
    background-color: #1b1b1b;
    color: #FFFFFF;
    cursor: pointer;
}

.g-i-t-button img {
    width: 20px;
    display: inline;
}

.footer-services {
    grid-column: 1/2;

    display: flex;
    flex-direction: column;
    row-gap: 3.5rem;
}


.footer-clients {
    grid-column: 2/3;

    display: flex;
    flex-direction: column;
    row-gap: 3.5rem;
}

.footer-career {
    grid-column: 3/4;

    display: flex;
    flex-direction: column;
    row-gap: 3.5rem;
}

.footer-partners {
    grid-column: 4/5;

    display: flex;
    flex-direction: column;
    row-gap: 3.5rem;
}

.footer-insights {
    grid-column: 1/2;
    grid-row: 2/3;

    display: flex;
    flex-direction: column;
    row-gap: 3.5rem;

}

.footer-about {
    grid-column: 2/3;
    grid-row: 2/3;

    display: flex;
    flex-direction: column;
    row-gap: 3.5rem;
}

.footer-about div {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

}

.footer-services div {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
}


.footer-partners div {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
}

.footer-career div {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
}

.footer-clients div {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
}

.footer-insights div {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
}

.menu-heading {
    font-size: 30px;
    color: #e8e8e8;
    font-weight: 600;
}

.menu-heading:hover{
    text-decoration: underline;
}

.menu-subheadings {
    font-size: 18px;
    color: #e8e8e8;
    font-weight: 600;
}

.footer-row {
    display: flex;
    float: left;
    column-gap: 1.5rem;
    padding: 1rem;
    background-color: #1b1b1b;
    margin-top: 0;
    margin-right: 0;
}

.footer-row div {
    color: #FFFFFF;
}

.footer-row a {
    font-size: 18px;
    color: #e8e8e8;
    font-weight: 600;
}

.copyright {
    font-size: 16px;
    color: #848484;
    padding: 1rem;
    font-weight: 600;
    background-color: #1b1b1b;
}

.footer-color {
    background-color: #1b1b1b;
    margin: 0;
}

hr {
    margin-bottom: 0;
}

.footer-services a,
.footer-clients a,
.footer-career a,
.footer-partners a,
.footer-insights a,
.footer-about a {
    text-align: left;
}

.options-copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

@media (max-width: 1140px) {
   
   .footer-flex{
    gap: 32px;

   } 
}

@media (max-width: 1000px) {
   

.footer-flex {
    flex-direction: column;
}


.footer-menus {
    flex-basis: 70%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    margin-top: 20px;

}

.footer-services {
    grid-column: 1/2;

    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
}


.footer-clients {
    grid-column: 2/3;

    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
}

.footer-career {
    grid-column: 3/4;

    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
}

.footer-partners {
    grid-column: 4/5;

    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
}

.footer-insights {
    grid-column: 1/2;
    grid-row: 2/3;

    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;

}

.footer-about {
  
    row-gap: 1.5rem;
}

.twoday-footer{
    font-weight: bold;
    font-size: 2rem;
    font-style: italic;
}
.footer-row {
    display: flex;
    flex-direction: column;
    text-align: center;
    float: left;
    gap: 10px;
    padding: 1rem;
    background-color: #1b1b1b;
    margin-top: 0;
    margin-right: 0;
}

.options-copyright {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.copyright{
    text-align: center;
}

.menu-heading {
    text-align: center;
}

.menu-subheadings {
   align-items: center;
}

.footer-services {
    align-items: center;
}


.footer-clients {
    align-items: center;
}

.footer-career {
    align-items: center;
}

.footer-partners {
    align-items: center;
}

.footer-insights {
    align-items: center;

}

.footer-about {
  
    align-items: center;
}

.g-i-t-content p{
    text-align: center;
}

.g-i-t{
    align-items: center;
}
}




</style>