<template>
    <section id="aerotechnical-foundry" class="hero p-0 pt-5 pb-5 odd featured right">
        <div class="swiper-container no-slider animation slider-h-100">
            <div class="swiper-wrapper">

                <!-- Item 1 -->
                <div class="swiper-slide slide-center">
                    <img data-aos="zoom-out-up" data-aos-delay="800" src="@/assets/img/foundry pixel art/Aerospace-www.thebitfoundry.net.png" class="hero-image" alt="Hero Image">
                    <div class="slide-content row" data-mask-768="70">
                        <div class="col-12 d-flex inner">
                            <div class="left align-self-center text-center text-md-left pt-5">
                                <h5 data-aos="zoom-out-up" data-aos-delay="400" class="title effect-static-text">aero-technical</h5>
                                <p data-aos="zoom-out-up" data-aos-delay="800" class="description">The Flight Foundry aka The Adventure Foundry is all about our spirit of adventure. We work on projects and products with industry leaders in aero-sport, aerospace, indoor skydiving, and electric aviation. Join our<strong> #odysseytoflight</strong></p>
                                <a data-aos="zoom-out-up" data-aos-delay="1200" class="ml-auto mr-auto ml-md-0 mt-4 btn dark-button" href="mailto:aerotechnical@thebitfoundry.net"><i class="icon-plane"></i>Email us</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>
</template>

<script>

    import StyleServices from "./../resources/style-service"
    
    export default {
        name: 'aerotechnical-foundry',
        mounted () {
            StyleServices.applyStyling();
        }
    }
</script>

<style scoped>
    @media screen and (max-width: 420px) {
        .title {
            font-size: 40px !important;            
        }
    }
</style>
