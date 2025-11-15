<script>
export default {
    name: 'GetInTouch'
}
</script>

<template>
    <div class="get-in-touch">

        <div class="future-text">
          
            <div class="future-h2">
                <h2>
                    Let's talk about the future
                </h2>
            </div>

            <div class="future-p">
                <p>
                    
                    Contact us through the form and let's talk about what we can accomplish together.
                </p>
            </div>

            <div  class="future-a">
                <a>Get in touch→</a>
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
.get-in-touch {
    padding: 0px 32px;
    display: flex;
    height: fit-content;
    margin-bottom: 32px;
}

.future-text {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;              
    padding: 20px 0;         
}

.form {
    flex-basis: 50%;
    padding: 32px;
    background-color: #ece2da;
    border-radius: 5px;

    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(9,1fr);
    column-gap: 5px;
    row-gap: 20px;
}

.future-h2 h2,
.future-p p,
.future-a a {
    margin: 0; /* Remove default spacing */
}

.future-h2 h2{
    text-align: left;
    font-size: clamp(32px,10vh,85px);
    color: #1b1b1b;
}

.future-p p{
    text-align: left;
    font-weight: 500;
    color: #1b1b1b;
    font-size: clamp()
}

.future-a a{
    text-align: left;
    background-color: yellow;
    color: #1b1b1b;
    padding: 15px 25px;
    font-size: 18;
    font-weight: 500;
    border-radius: 15px;
}

.future-a a:hover{
    background-color: #1b1b1b;
    color: #FFFFFF;
}

/*        Form        */
.inp-flex{
    display: flex;
    flex-direction: column;
    row-gap: 5px;
}

.first-name{
    grid-column: 1/2;
    grid-row: 1/2;
}

.last-name{
    grid-column: 2/3;
    grid-row: 1/2;
}

.email{
    grid-column: 1/3;
    grid-row: 2/3;
}

.comp-name{
    grid-column: 1/3;
    grid-row: 3/4;
}

.job-title{
    grid-column: 1/3;
    grid-row: 4/5;
}

.country{
    grid-column: 1/3;
    grid-row: 5/6;
}

.message{
    grid-column: 1/3;
    grid-row: 6/8;
}

.info{
    grid-column: 1/3;
    grid-row: 8/9;
}

.submit-btn{
    grid-column: 1/2;
    grid-row: 9/10;
}

input,select,textarea{
    border-radius: 5px;
    border: none;
    height: 30px;
    font-size: 14px;
}

textarea{
    height: 100px;
}

label{
    font-size: 12px;
    font-weight: bold;
    color: #1b1b1b;
    text-align: left;
}

.info p{
    text-align: left;
}

.submit-btn{
    display: flex;
    align-items: flex-start;
}

.submit-btn a{
   background-color: yellow;
   color: #1b1b1b;
   padding: 10px 20px;
   border-radius: 10px;
}

.submit-btn a:hover{
    background-color: #1b1b1b;
    color: #FFFFFF;
}

@media(max-width:767px){
    .get-in-touch{
        flex-direction: column;
    }
    }

@media(max-width:480px){
    .input{
        font-size: 8px;
    }
    .form{
        padding-left:16px ;
        padding-right: 16px;
        row-gap: 5px;
    }

    .get-in-touch{
        padding-left: 16px;
        padding-right: 16px;
    }
}

@media(max-width:415px){
    .form{
        row-gap: 2px;
    }
}

</style>