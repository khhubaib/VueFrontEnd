<script>
export default {
    name: 'Footer',
}   
</script>

<template>
    <footer>
    <div class="footer-div">
        <div class="footer-color">
            <div class="footer-flex">
                <div class="g-i-t">
                    <div class="g-i-t-content">
                        <p>Want to get in touch? Send us a message using our contact form and we'll reach out as soon as
                            we
                            can</p>
                    </div>

                    <div class="g-i-t-button">
                        <a @click="this.$router.push('/contact')">Get in Touch
                            <img src="/right-up.png" alt="">
                        </a>
                    </div>
                </div>

                <div class="footer-menus">

                    <div class="footer-services">
                        <a class="menu-heading" @click="this.$router.push('/services')">Services</a>

                        <div class="menu-subheadings">

                            <a>Applied AI</a>
                            <a>Data</a>
                            <a>Cloud</a>
                            <a>Engineering</a>
                            <a>Applications</a>
                            <a>Products</a>

                        </div>
                    </div>

                    <div class="footer-clients">
                        <a class="menu-heading">Clients</a>

                        <div class="menu-subheadings">

                            <a>Energy & Utilities</a>
                            <a>Industrials & Manufacturing</a>
                            <a>Health & Life Sciences</a>
                            <a>Government</a>
                            <a>All Stories</a>

                        </div>
                    </div>

                    <div class="footer-career">
                        <a class="menu-heading" @click="this.$router.push('/career')">Career</a>

                        <div class="menu-subheadings">

                            <a>Open Positions</a>
                            <a>Meet our Experts</a>
                            <a>Growth</a>
                            <a>Our Locations</a>

                        </div>
                    </div>

                    <div class="footer-partners">
                        <a class="menu-heading">Partners</a>

                        <div class="menu-subheadings">

                        </div>
                    </div>

                    <div class="footer-insights">
                        <a class="menu-heading">Insights</a>

                        <div class="menu-subheadings">

                            <a>Blog</a>
                            <a>Guides & Whitepapers</a>

                        </div>
                    </div>

                    <div class="footer-about">
                        <a class="menu-heading" @click="this.$router.push('/about')">About</a>

                        <div class="menu-subheadings">

                            <a>Our Story</a>
                            <a>Leadership</a>
                            <a>Board</a>
                            <a>Press</a>

                        </div>
                    </div>


                </div>

            </div>
            <hr>
            <div class="options-copyright">
                <div class="footer-row">
                    <div class="twoday-footer" >
                        twoday
                    </div>

                    <a>Trust Center</a>
                    <a>Privacy</a>
                    <a>Cookie Policy</a>
                    <a>My Subscriptions</a>
                    <a>Whistleblowing Channel</a>


                </div>

                <div class="copyright">
                    &copy 2025 Twoday. All rights reserved
                </div>
            </div>



        </div>

    </div>
    </footer>
</template>

<style></style>