<template>
    <section id="electronic-foundry" class="hero p-0 pt-5 pb-5 odd featured right">
        <div class="swiper-container no-slider animation slider-h-100">
            <div class="swiper-wrapper">

                <!-- Item 1 -->
                <div class="swiper-slide slide-center">
                    <img data-aos="zoom-out-up" data-aos-delay="800" src="@/assets/img/foundry pixel art/Clean-Tech-Foundry.png" class="hero-image" alt="Hero Image">
                    <div class="slide-content row" data-mask-768="70">
                        <div class="col-12 d-flex inner">
                            <div class="left align-self-center text-center text-md-left">
                                <h1 data-aos="zoom-out-up" data-aos-delay="400" class="title effect-static-text">electric</h1>
                                <p data-aos="zoom-out-up" data-aos-delay="800" class="description">The electric foundry combines hardware, software and analysis to improve efficiency, accessibility, and adoption of effective solutions. We work closely with companies in construction, solar and automotive to design and build electronics that support business and sustainable engineering goals effectively.</p>
                                <a href="mailto:cleantech@thebitfoundry.net" data-aos="zoom-out-up" data-aos-delay="1200" class="ml-auto mr-auto ml-md-0 mt-4 btn dark-button"><i class="icon-power"></i>Build with us</a>
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

    import StyleServices from "../resources/style-service"
    
    export default {
        name: 'electronic-foundry',
        mounted () {
            StyleServices.applyStyling();
        }
    }
</script>
