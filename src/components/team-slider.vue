<template>
    <section id="team-slider" class="hero p-0 odd featured right">
        <div class="swiper-container no-slider animation slider-h-100">
            <div class="swiper-wrapper">

                <!-- Item 1 -->
                <div class="swiper-slide slide-center">
                    <img data-aos="zoom-out-up" data-aos-delay="800" src="@/assets/img/foundry pixel art\RealBitBot-The-Bit-Foundry-Digital-Consulting-1500.png" class="hero-image" alt="Hero Image">
                    <div class="slide-content row" data-mask-768="70">
                        <div class="col-12 d-flex inner">
                            <div class="left align-self-center text-center text-md-left">
                                <h1 data-aos="zoom-out-up" data-aos-delay="400" class="title effect-static-text">Hello!</h1>
                                <p data-aos="zoom-out-up" data-aos-delay="800" class="description">Welcome to The Bit Foundry. We are a creative duo that love creating and building software! We love all things code, engineering and design, so we started a little company instead of making babies right away. Say Hello. We'd love to see how we can work together.</p>
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
    export default {
        name: 'team-slider'
    }
</script>
