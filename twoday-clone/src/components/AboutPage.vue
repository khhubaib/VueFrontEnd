<script>
import HeroComp from './HeroComp.vue';
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
import GetInTouch from './GetInTouch.vue';
import LastingImpact from './LastingImpact.vue';
import OptionsGrid from './OptionsGrid.vue';
import ShowStats from './ShowStats.vue';
export default{
    name: 'AboutPage',
    components:{
        HeroComp,
        NavBar,
        Footer,
        GetInTouch,
        LastingImpact,
        OptionsGrid,
        ShowStats
    },
    data(){
        return{

            span: "ABOUT US",
            heading1: "We create a",
            heading2: "better tomorrow through",
            heading3: "AI and technology",
            button: "",
            video: "/about.mp4",
            color: "white",

            heading: "Get to know us",
            ptag1: "Use the form to get in touch.",
            column: "yes",
            about: "yes",
            
            heading4: "Building a sustainable future",
            text: "Sustainability is at the core of everything we do at Twoday. We believe that innovation and responsibility should go hand in hand. As the world increasingly demands greener IT solutions, we use cutting-edge technologies to help our clients reduce their environmental footprint and create more sustainable operations.<br><br>We work closely with businesses to integrate eco-friendly practices into their models, driving change that leads to tangible environmental and social benefits. Our goal is to create solutions that not only meet today’s needs but also contribute to a more sustainable future for all.",
            
            heading5: "Our values show in everything we do",
            text2: "",
            span1: "HEART",
            span2: "DRIVE",
            span3: "ADAPTABILITY",
            div1: "Our business is run with heart. We care about our employees, our customers and the society. We are a warm community filled with people who have fun and laugh together. We welcome people as they are, we team up and we thrive together.",
            div2: "To succeed in the digital transformation of our society, we need people with initiative, dedication and engagement. People who continuously develop and learn new things are crucial to the competence needed in our digital age. Our drive and ambition move society forward.",
            div3: "Technology is constantly changing, and so are the needs of people and organizations. We are adaptable in our approach, down to earth and easy to work with. We trust our people and believe that we do our best work when we have a good balance of freedom and responsibility.",
            img1: "/first.png",
            img2: "/second.png",
            img3: "/third.png",

            heading6: "Our team is what sets us apart",
            heading7: "We believe in the power of innovation and collaboration to transform businesses",
            heading8: "Deep industrial insights for your benefit",
            div4: "We’re a group of passionate professionals who thrive on collaboration and creativity, pushing the boundaries of what’s possible to help you reach your goals. From strategizing the future of your business to implementing scalable solutions, we stand by you every step of the way.",
            div5: "With a relentless drive, heart, and adaptability, we partner with our clients to deliver cutting-edge solutions that solve real challenges. We bring specialized expertise and a customer-first mindset to everything we do.",
            div6: "We focus on results that matter. Our solutions are designed not just to meet the needs of today, but to prepare you for tomorrow. By leveraging the latest technologies and our deep industry insights, we create future-proof strategies that drive growth, efficiency, and lasting impact. Take it from our customers – their feedback speaks for itself.",
            button: "",
            padding: "yes",

            heading9: "Your success is our mission",
            text3: "We work closely with you to ensure our approach aligns with your unique vision, empowering your business to thrive in an ever-changing world."
        };
    }
}
</script>

<template>
    <div>
        <NavBar/>
        <HeroComp
        :heading1="heading1"
        :heading2="heading2"
        :heading3="heading3"
        :span="span"
        :button="button"
        :video="video"
        :color="color"/>
        <ShowStats/>
        <LastingImpact
        :heading="heading9"
        :text="text3"/>
        <OptionsGrid
        :heading1="heading6"
        :heading2="heading7"
        :heading3="heading8"
        :div1="div4"
        :div2="div5"
        :div3="div6"
        :padding="padding"
        />
        <LastingImpact
        :heading="heading5"
        :text="text2"
        :span1="span1"
        :span2="span2"
        :span3="span3"
        :div1="div1"
        :div2="div2"
        :div3="div3"
        :img1="img1"
        :img2="img2"
        :img3="img3"
        />

        <lastingImpact
        :heading="heading4"
        :text="text"/>
        <GetInTouch
        :heading="heading"
        :ptag1="ptag1"
        :column="column"
        :about="about"/>
        <Footer/>
    </div>
</template>

<style>

</style>