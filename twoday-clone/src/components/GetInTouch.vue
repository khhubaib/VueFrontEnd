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
    <div :class="{'get-in-touch': !column, 'columnform': column}" id="form">

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
            <div class="names">
                <div class="inp-flex first-name">
                <label for="">First Name*</label>
                <input type="text" placeholder="Enter first name">
            </div>
            <div class="inp-flex last-name">
                <label for="">Last Name*</label>
                <input type="text" placeholder="Enter last name name">
            </div>
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
.form {
    flex-basis: 50%;
    padding: 32px;
    background-color: #ece2da;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    /* grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(9,1fr); */
    column-gap: 5px;
    row-gap: 20px;
}
.names{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

.future-h2 h2,
.future-p p,
.future-a a {
    margin: 0; /* Remove default spacing */
}

.future-h2 h2{
    text-align: left;
    font-size: clamp(32px,5vh,85px);
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
    
    flex-basis: 49%;
}

.last-name{
   
    flex-basis: 49%;
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

@media(max-width:1070px){
    .get-in-touch{
        display: flex;
        flex-direction: column;
    }
    }

    @media(max-width:520px){
        .names{
        flex-direction: column;
        gap: 20px;
    }
    }

@media(max-width:480px){

    
    .inp-flex{
        height: fit-content;
    }
    .input{
        font-size: 8px;
    }
    .form{
        padding-left:16px ;
        padding-right: 16px;
        row-gap: 20px;
    }

    .get-in-touch{
        padding-left: 16px;
        padding-right: 16px;
    }

}

@media(max-width:415px){
    .form{
        row-gap: 20px;
    }
}

</style>