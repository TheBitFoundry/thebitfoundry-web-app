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
                                <h2 data-aos="zoom-out-up" data-aos-delay="400" class="title effect-static-text">TheCreativeBit</h2>
                                <p data-aos="zoom-out-up" data-aos-delay="800" class="description">ideas ⁞ brand ⁞ swag ⁞ creative direction ⁞ film ⁞ design ⁞ art ⁞ editorial</p>
                                <a href="#contact" data-aos="zoom-out-up" data-aos-delay="1200" class="smooth-anchor ml-auto mr-auto ml-md-0 mt-4 btn dark-button"><i class="icon-cup"></i>CONNECT</a>
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
