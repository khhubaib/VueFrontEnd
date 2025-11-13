<script>
export default {
    name: 'DreamJob'
}
</script>

<template>
    <div class="dream-job">
        <div class="d-j-h2-container">
            <h2>Tomorrow is built by the people who engineer it</h2>
        </div>
        <div class="d-j-content-container">
            <div>
                <p>At Twoday, growth isn’t a perk. It’s the point. Join us and build a career that keeps moving forward.
                </p>
            </div>

            <div>
                <a>Find your dream job</a>
            </div>
        </div>
    </div>
</template>

<style>

.dream-job{
    display: flex;
    column-gap: 50px;
    padding: 32px 32px;
    align-items: left;
}

.d-j-h2-container{
    width: 50%;
}

.d-j-h2-container h2{
    text-align: left;
    font-size: 48px;
    font-weight: 400;
    margin-top: 10px;
}
.d-j-content-container{
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    row-gap:30px
}

.d-j-content-container p{
    text-align: left;
    font-size: 22px;
    font-weight: 400;
    
}

.d-j-content-container div {
    text-align: left;
    height: 49%;
}

.d-j-content-container div a{
    font-size: 24px;
    font-weight: 400;
    background-color:transparent;
    border: 3px solid #1b1b1b;
    color: #1b1b1b;
    padding: 10px 20px;
    border-radius: 10px;
}

.d-j-content-container div a:hover{
    background-color: #1b1b1b;
    color: #FFFFFF;
}

@media(max-width:767px){
    .dream-job{
        flex-direction: column;
        align-items: center;
        padding-top: 15px;
    }

    .d-j-h2-container{
    width: 100%;
}

.d-j-h2-container h2{
    text-align: center;
    font-size: 30px;
    margin-top: 0;
    margin-bottom: 0;
}
.d-j-content-container{
    width: 100%;
    align-items: center;
    row-gap:10px
}

.d-j-content-container p{
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    
}

.d-j-content-container div {
    text-align: left;
    height: 49%;
}

.d-j-content-container div a{
    font-size: 15px;
    border: 1px solid #1b1b1b;
    padding: 5px 10px;
    border-radius: 10px;
}
}


</style>