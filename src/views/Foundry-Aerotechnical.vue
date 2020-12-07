<template>
    <section id="aerotechnical-slider" class="hero p-0 odd featured right">
        <div class="swiper-container no-slider animation slider-h-100">
            <div class="swiper-wrapper">

                <!-- Item 1 -->
                <div class="swiper-slide slide-center">
                    <img data-aos="zoom-out-up" data-aos-delay="800" src="../../public/img/Foundry Pixel Art/Aerospace-www.thebitfoundry.net.png" class="hero-image" alt="Hero Image">
                    <div class="slide-content row" data-mask-768="70">
                        <div class="col-12 d-flex inner">
                            <div class="left align-self-center text-center text-md-left">
                                <h5 data-aos="zoom-out-up" data-aos-delay="400" class="title effect-static-text">aero-technical</h5>
                                <p data-aos="zoom-out-up" data-aos-delay="800" class="description">The Flight Foundry aka The Adventure Foundry is all about our spirit of adventure. We work on projects and products for industry leaders in aero-sport, aerospace, indoor skydiving, VTOL and electric aviation. Join our <a href="https://www.instagram.com/theflightfoundry/" target="_blank"> #odysseytoflight</a></p>
                                <a href="mailto:aerotechnical@thebitfoundry.net" target="_black" data-aos="zoom-out-up" data-aos-delay="1200" class="ml-auto mr-auto ml-md-0 mt-4 btn dark-button"><i class="icon-plane"></i>Email us</a>
                               <a href="https://www.instagram.com/theflightfoundry/" target="_black" data-aos="zoom-out-up" data-aos-delay="1200" class="ml-auto mr-auto ml-md-0 mt-4 btn dark-button"><i class="icon-social-instagram"></i> @theflighfoundry</a>
                                <a href="https://www.facebook.com/theflightfoundry/" target="_black" data-aos="zoom-out-up" data-aos-delay="1200" class="ml-auto mr-auto ml-md-0 mt-4 btn dark-button"><i class="icon-social-facebook"></i> @theflighfoundry</a>
                                <a href="https://www.facebook.com/theflightfoundry/" target="_black" data-aos="zoom-out-up" data-aos-delay="1200" class="ml-auto mr-auto ml-md-0 mt-4 btn dark-button"><i class="icon-social-twitter"></i> @flighfoundry</a>
                                <a href="https://www.facebook.com/theflightfoundry/" target="_black" data-aos="zoom-out-up" data-aos-delay="1200" class="ml-auto mr-auto ml-md-0 mt-4 btn dark-button"><i class="icon-social-linkedin"></i> The Flight Foundry</a>
                                <a href="https://www.facebook.com/theflightfoundry/" target="_black" data-aos="zoom-out-up" data-aos-delay="1200" class="ml-auto mr-auto ml-md-0 mt-4 btn dark-button"><i class="icon-social-linkedin"></i> Indoor Skydiving Academy</a>
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
        name: 'Aerotechnical Foundry',
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