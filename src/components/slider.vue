<template>
    <section id="slider" class="hero p-0 odd featured right">
        <div class="swiper-container no-slider animation slider-h-100">
            <div class="swiper-wrapper">

                <!-- Item 1 -->
                <div class="swiper-slide slide-center">
                    <img data-aos="zoom-out-up" data-aos-delay="800" src="@/assets/img/foundry pixel art\RealBitBot-The-Bit-Foundry-Digital-Consulting-1500.png" class="hero-image" alt="Hero Image">
                    <div class="slide-content row" data-mask-768="70">
                        <div class="col-12 d-flex inner">
                            <div class="left align-self-center text-center text-md-left">
                                <h1 data-aos="zoom-out-up" data-aos-delay="400" class="title effect-static-text">Welcome</h1>
                                <p data-aos="zoom-out-up" data-aos-delay="800" class="description">The Bit Foundry is a software company co-creating technology first businesses and products with industry leaders. We are a creative technology foundry providing cutting edge web, software, AI, data &amp; design solutions.</p>
                                <!-- <a href="/services-technical" data-aos="zoom-out-up" data-aos-delay="1200" class="ml-auto mr-auto ml-md-0 mt-4 btn dark-button"><i class="icon-cup"></i>Bit Service</a> -->
                               
                                <li class="nav-item ml-auto mr-auto ml-md-0 mt-4 btn dark-button" data-aos="zoom-out-up" data-aos-delay="1200"><router-link to="/software-foundry" onclick="makeItJazzy();"  class="nav-link"><i class="icon-cup"></i>Bit Services</router-link></li>
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
        name: 'slider'
    }
</script>
