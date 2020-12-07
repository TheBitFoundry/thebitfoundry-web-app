<template>
    <section id="Creative Foundry" class="hero p-0 odd featured right">
        <div class="swiper-container no-slider animation slider-h-100">
            <div class="swiper-wrapper">

                <!-- Item 1 -->
                <div class="swiper-slide slide-center">
                    <img data-aos="zoom-out-up" data-aos-delay="800" src="../../public/img/Foundry Pixel Art/TheCreativeBit-www.thebitfoundry.net.png" class="hero-image" alt="Hero Image">
                    <div class="slide-content row" data-mask-768="70">
                        <div class="col-12 d-flex inner">
                            <div class="left align-self-center text-center text-md-left">
                                <h2 data-aos="zoom-out-up" data-aos-delay="400" class="title effect-static-text">the creative bit</h2>
                                <p data-aos="zoom-out-up" data-aos-delay="800" class="description">Working in the realm where logic and creativity meet our creative team thrive with ✖️ ideas ✖️ brand ✖️ swag ✖️ creative direction ✖️ design ✖️ art ✖️ production ✖️ film ✖️ editorial</p>
                                <a href="mailto:info@thebitfoundry.net" data-aos="zoom-out-up" data-aos-delay="1200" class="ml-auto mr-auto ml-md-0 mt-4 btn dark-button"><i class="icon-cup"></i>Create with us</a>
                                <a href="https://www.instagram.com/thecreativebit/" target="_blank" data-aos="zoom-out-up" data-aos-delay="1200" class="ml-auto mr-auto ml-md-0 mt-4 btn dark-button"><i class="icon-social-instagram"></i> @thecreativebit</a>
                                <a href="https://www.facebook.com/thecreativebit/" target="_blank" data-aos="zoom-out-up" data-aos-delay="1200" class="ml-auto mr-auto ml-md-0 mt-4 btn dark-button"><i class="icon-social-facebook"></i> @thecreativebit</a>
                                <a href="https://www.twitter.com/thecreativebit/" target="_blank" data-aos="zoom-out-up" data-aos-delay="1200" class="ml-auto mr-auto ml-md-0 mt-4 btn dark-button"><i class="icon-social-twitter"></i> @thecreativebit</a>
                                <a href="https://www.linkedin.com/company/the-bit-foundry/" target="_blank" data-aos="zoom-out-up" data-aos-delay="1200" class="ml-auto mr-auto ml-md-0 mt-4 btn dark-button"><i class="icon-social-linkedin"></i> The Bit Foundry</a>
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
        name: 'Creative Foundry',
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
