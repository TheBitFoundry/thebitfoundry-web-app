<template>
    <section id="Clean Tech Foundry" class="hero p-0 odd featured right">
        <div class="swiper-container no-slider animation slider-h-100">
            <div class="swiper-wrapper">

                <!-- Item 1 -->
                <div class="swiper-slide slide-center">
                    <img data-aos="zoom-out-up" data-aos-delay="800" src="../../public/img/Foundry Pixel Art/Clean-Tech-Foundry.png" class="hero-image" alt="Hero Image">
                    <div class="slide-content row" data-mask-768="70">
                        <div class="col-12 d-flex inner">
                            <div class="left align-self-center text-center text-md-left">
                                <h1 data-aos="zoom-out-up" data-aos-delay="400" class="title effect-static-text">clean tech</h1>
                                <p data-aos="zoom-out-up" data-aos-delay="800" class="description">The Clean Technology Foundry is a team dedicated to using software and machine learning to improve efficiency, accessibility and adoption of sustainable solutions and renewable energy. The team works closely with companies in construction, solar and commercial project management to design and build software and support project objectives effectively.</p>
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

    import StyleServices from "./../resources/style-service"
    
    export default {
        name: 'Clean Tech Foundry',
        mounted () {
            StyleServices.applyStyling();
        }
    }
</script>
