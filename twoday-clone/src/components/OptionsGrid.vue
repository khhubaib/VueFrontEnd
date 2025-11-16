<script>
export default {
    name: 'OptionsGrid',
    props:{
        heading1: String,
        heading2: String,
        heading3: String,
        div1: String,
        div2: String,
        div3: String,
        button: String,
        padding:String


    }
}
</script>

<template>
    <div>
        <div class="options-grid" >

            <div class="sol-box">
                <div class="sol-no">
                    <span>01</span>
                </div>

                <div class="sol-content">
                    <h5>{{ heading1 }}</h5>
                    <div>
                        {{ div1 }}
                    </div>
                </div>

                <div class="sol-button-container" v-if="button">
                    <a class="sol-button">Become Data Driven
                        <img src="/right-up.png" alt="">
                    </a>
                </div>
            </div>

            <div class="sol-box">
                <div class="sol-no">
                    <span>02</span>
                </div>

                <div class="sol-content">
                    <h5>{{ heading2 }}</h5>
                    <div>
                        {{ div2 }}
                    </div>
                </div>

                <div class="sol-button-container"  v-if="button">
                    <a class="sol-button">Explore Cloud Solutions
                        <img src="/right-up.png" alt="">
                    </a>
                </div>

            </div>
            <div class="sol-box">
                <div class="sol-no">
                    <span>03</span>
                </div>

                <div class="sol-content">
                    <h5>{{heading3}}</h5>
                    <div>
                        {{ div3 }}
                    </div>
                </div>

                <div class="sol-button-container"  v-if="button">
                    <a class="sol-button">Start Building
                        <img src="/right-up.png" alt="">
                    </a>
                </div>

            </div>
            
        </div>
    </div>
</template>

<style>


</style>