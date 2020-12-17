<template>
    <section id="scale-up-foundry" class="hero p-0 pt-5 pb-5 odd featured right">
        <div class="swiper-container no-slider animation slider-h-100">
            <div class="swiper-wrapper">

                <!-- Item 1 -->
                <div class="swiper-slide slide-center">
                    <img data-aos="zoom-out-up" data-aos-delay="800" src="@/assets/img/foundry pixel art/Scale-Up-www.thebitfoundry.net.png" class="hero-image" alt="Hero Image">
                    <div class="slide-content row" data-mask-768="70">
                        <div class="col-12 d-flex inner">
                            <div class="left align-self-center text-center text-md-left">
                                <h1 data-aos="zoom-out-up" data-aos-delay="400" class="title effect-static-text">scale up</h1>
                                <p data-aos="zoom-out-up" data-aos-delay="800" class="description">We love a little moonshot thinking and building solutions that solve real problems. Join us on our 21st century adventure and scale your services and products with cloud, IoT, machine learning and the power of intelligent design.</p>
                                <a href="mailto:scaleup@thebitfoundry.net" data-aos="zoom-out-up" data-aos-delay="1200" class="ml-auto mr-auto ml-md-0 mt-4 btn dark-button"><i class="icon-rocket"></i>Grow with us</a>
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
        name: 'scale-up-foundry',
        mounted () {
            StyleServices.applyStyling();
        }
    }
</script>

<style scoped>
    @media screen and (max-width: 420px) {
        #heading {
            display: none;            
        }
    }
</style>
