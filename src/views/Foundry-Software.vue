<template>
    <section id="Software Foundry" class="hero p-0 odd featured right">
        <div class="swiper-container no-slider animation slider-h-100">
            <div class="swiper-wrapper">

                <!-- Item 1 -->
                <div class="swiper-slide slide-center">
                    <img data-aos="zoom-out-up" data-aos-delay="800" src="../../public/img/Foundry Pixel Art/BitMoji-RealBitBot-The-Bit-Foundry-Digital-Consulting-1500.png" class="hero-image" alt="Hero Image">
                    <div class="slide-content row" data-mask-768="70">
                        <div class="col-12 d-flex inner">
                            <div class="left align-self-center text-center text-md-left">
                                <h1 data-aos="zoom-out-up" data-aos-delay="400" class="title effect-static-text">Software</h1>
                                <p data-aos="zoom-out-up" data-aos-delay="800" class="description">We specialize in C#, ASP.Net, Go, </p>
                                <a href="#contact" data-aos="zoom-out-up" data-aos-delay="1200" class="smooth-anchor ml-auto mr-auto ml-md-0 mt-4 btn dark-button"><i class="icon-power"></i>Work With Us</a>
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
        name: 'Software Foundry',
        components: {
            ServicesTechnical
        },
        mounted () {
            StyleServices.applyStyling();
        }
    }
</script>
