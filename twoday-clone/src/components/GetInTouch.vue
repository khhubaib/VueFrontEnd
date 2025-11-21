<script>
import emailjs from "emailjs-com";
export default {
    name: 'GetInTouch',

    props: {
        heading: String,
        ptag1: String,
        ptag2: String,
        ptag3: String,
        button: String,
        column: String,
        about: String
    },

    data() {
        return {
            formData: {
                first_name: "",
                last_name: "",
                email: "",
                user_company: "",
                user_job: "",
                user_country: "",
                user_message: ""
            }
        };
    },

    methods: {
        sendEmail() {

            if (!this.formData.first_name || !this.formData.email) {
                alert("Please fill in required fields!");
                return;
            }

            emailjs
                .send(
                    "service_xpotja7",
                    "template_36n82d3",
                    this.formData,
                    "L-5DI__5GPkXBQmbX"
                )
                .then(() => {
                    this.formData = {
                        first_name: "",
                        last_name: "",
                        email: "",
                        user_company: "",
                        user_job: "",
                        user_country: "",
                        user_message: ""
                    };
                })
                .catch((err) => {
                    console.error("Email send error:", err);
                });
        }
    }
}
</script>

<template>
    <div :class="{ 'get-in-touch': !column, 'columnform': column }" id="form">

        <div :class="{ 'future-text': !column, 'column-text': column, 'about-text': about && column }">

            <div :class="{ 'future-h2': !column, 'column-h2': column, 'about-h2': about && column }">
                <h2>
                    {{ heading }}
                </h2>
            </div>

            <div :class="{ 'future-p': !column, 'column-p': column }">
                <p>

                    {{ ptag1 }}
                </p>
                <br v-if="ptag2">
                <p v-if="ptag2">{{ ptag2 }}</p>
                <br v-if="ptag2">
                <p v-if="ptag2">{{ ptag3 }}</p>
            </div>

            <div class="future-a" v-if="button">
                <a>{{ button }}</a>
            </div>

        </div>
        <div class="form">
            <div class="names">
                <div class="inp-flex first-name">
                    <label for="">First Name*</label>
                    <input name="first_name" v-model="formData.first_name" type="text" placeholder="Enter first name">
                </div>

                <div class="inp-flex last-name">
                    <label for="">Last Name*</label>
                    <input name="last_name" v-model="formData.last_name" type="text" placeholder="Enter last name name">
                </div>
            </div>

            <div class="inp-flex email">
                <label for="">Email*</label>
                <input name="email" v-model="formData.email" type="text">
            </div>

            <div class="inp-flex comp-name">
                <label for="">Company Name*</label>
                <input name="user_company" v-model="formData.user_company" type="text">
            </div>

            <div class="inp-flex job-title">
                <label for="">Job Title</label>
                <input name="user_job" v-model="formData.user_job" type="text">
            </div>

            <div class="inp-flex country">
                <label for="">Country*</label>
                <select name="user_country" v-model="formData.user_country">
                    <option disabled value="">Select Country</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Pakistan">Pakistan</option>
                    <!-- add more countries -->
                </select>

            </div>

            <div class="inp-flex message">
                <label for="">Message*</label>
                <textarea name="user_message" v-model="formData.user_message" type="text"></textarea>
            </div>

            <div class="inp-flex info">
                <p>
                    When you provide your personal info above, Twoday will process it in accordance with our privacy
                    policy.
                </p>
            </div>

            <div class="inp-flex submit-btn">
                <a @click="sendEmail">Submit</a>
            </div>
        </div>


    </div>
</template>

<style>

</style>