<template>
    <section id="software-foundry" class="hero p-0 odd featured right">
        <div class="swiper-container no-slider animation slider-h-100">
            <div class="swiper-wrapper">

                <!-- Item 1 -->
                <div class="swiper-slide slide-center">
                    <img data-aos="zoom-out-up" data-aos-delay="800" src="@/assets/img/foundry pixel art/BitMoji-RealBitBot-The-Bit-Foundry-Digital-Consulting-1500.png" class="hero-image" alt="Hero Image">
                    <div class="slide-content row" data-mask-768="70">
                        <div class="col-12 d-flex inner">
                            <div class="left align-self-center text-center text-md-left">
                                <h1 data-aos="zoom-out-up" data-aos-delay="400" class="title effect-static-text">software</h1>
                                <p data-aos="zoom-out-up" data-aos-delay="800" class="description">As front-end and back-end experts, we specialize in C#, ASP.NET, Flutter, Vue.js and Angular </p>
                                <a href="mailto:info@thebitfoundry.net" data-aos="zoom-out-up" data-aos-delay="1200" class=" ml-auto mr-auto ml-md-0 mt-4 btn dark-button"><i class="icon-social-github"></i>Work with us</a>
                                <a href="https://www.instagram.com/thebitfoundry/" target="_blank" data-aos="zoom-out-up" data-aos-delay="1200" class="ml-auto mr-auto ml-md-0 mt-4 btn dark-button"><i class="icon-social-instagram"></i> @thebitfoundry</a>
                                <a href="https://www.facebook.com/thebitfoundry/" target="_blank" data-aos="zoom-out-up" data-aos-delay="1200" class="ml-auto mr-auto ml-md-0 mt-4 btn dark-button"><i class="icon-social-facebook"></i> @thebitfoundry</a>
                                <a href="https://www.twitter.com/realbitfoundry/" target="_blank" data-aos="zoom-out-up" data-aos-delay="1200" class="ml-auto mr-auto ml-md-0 mt-4 btn dark-button"><i class="icon-social-twitter"></i> @realbitfoundry</a>
                                <a href="https://www.linkedin.com/company/the-bit-foundry/" target="_blank" data-aos="zoom-out-up" data-aos-delay="1200" class="ml-auto mr-auto ml-md-0 mt-4 btn dark-button"><i class="icon-social-linkedin"></i> The Bit Foundry</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <ServicesTechnical></ServicesTechnical>
    </section>
    
</template>

<script>

    import StyleServices from "./../resources/style-service"
    import ServicesTechnical from "./Services-Technical"
    
    export default {
        name: 'software-foundry',
        components: {
            ServicesTechnical
        },
        mounted () {
            StyleServices.applyStyling();
        }
    }
</script>
