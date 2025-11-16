<script>
export default {
    name: 'GetInTouch',

    props:{
        heading: String,
        ptag1: String,
        ptag2: String,
        ptag3: String,
        button: String,
        column: String,
        about: String
    }
}
</script>

<template>
    <div :class="{'get-in-touch': !column, 'columnform': column}">

        <div :class="{'future-text': !column, 'column-text': column, 'about-text': about && column}">
          
            <div :class="{'future-h2': !column, 'column-h2': column, 'about-h2': about && column}">
                <h2>
                    {{heading}}
                </h2>
            </div>

            <div :class="{'future-p': !column, 'column-p': column}">
                <p>
                    
                    {{ptag1}}
                </p>
                <br v-if="ptag2">
                <p v-if="ptag2">{{ ptag2 }}</p>
                <br v-if="ptag2">
                <p v-if="ptag2">{{ ptag3 }}</p>
            </div>

            <div  class="future-a" v-if="button">
                <a>{{ button }}</a>
            </div>

        </div>
        <div class="form">

            <div class="inp-flex first-name">
                <label for="">First Name*</label>
                <input type="text" placeholder="Enter first name">
            </div>
            <div class="inp-flex last-name">
                <label for="">Last Name*</label>
                <input type="text" placeholder="Enter last name name">
            </div>
            <div class="inp-flex email">
                <label for="">Email*</label>
                <input type="text" name="" id="">
            </div>
            <div class="inp-flex comp-name">
                <label for="">Company Name*</label>
                <input type="text" name="" id="">
            </div>
            <div class="inp-flex job-title">
                <label for="">Job Title</label>
                <input type="text" name="" id="">
            </div>
            <div class="inp-flex country">
                <label for="">Country*</label>
                <select></select>
            </div>
            <div class="inp-flex message">
                <label for="">Message*</label>
                <textarea type="text" ></textarea>
            </div>
            <div class="inp-flex info">
                <p>
                    When you provide your personal info above, Twoday will process it in accordance with our privacy policy.
                </p>
            </div>
            <div class="inp-flex submit-btn">
                <a>Submit</a>
            </div>

        </div>

    </div>
</template>

<style>

</style>