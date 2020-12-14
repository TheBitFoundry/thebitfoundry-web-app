<template>
    <div>
        <!-- Hero -->
        <section id="slider" class="hero p-0 odd featured">
            
            <div class="swiper-container no-slider slider-h-75">
                <div class="swiper-wrapper">

                    <!-- Item 1 -->
                    <div class="swiper-slide slide-center">
                        
                        <img src="@/assets/img/portfolio/tyre-dev/tyredev-banner.jpg" class="full-image" data-mask="70">
                        
                        <div class="slide-content row text-center">
                            <div class="col-12 mx-auto inner">
                                <h1 data-aos="zoom-out-up" data-aos-delay="400" class="title effect-static-text">tyre dev</h1>
                                <nav data-aos="zoom-out-up" data-aos-delay="800" aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="/">home</a></li>
                                        <li class="breadcrumb-item"><a href="/portfolio">portfolio</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">tyre dev</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>    
                
                <!-- Content Section 1 -->
        <section id="about" class="section-1 highlights image-right">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 align-self-center text-center text-md-left">
                        <div class="row intro mb-0">
                            <div class="col-12 p-0">
                                <h2 class="featured">overview</h2>
                                <p>With a focus on monitoring systems and software for automotive, logistics & transport, Tyre Dev builds and sells automotive software and tyre pressure monitoring system (TPMS) products.</p>
                                <h2>scope</h2>
                                <p class="featured breadcrumb-item active">
                                    <ul class="text-left">
                                        <li>software development</li>
                                        <li>custom integrations</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="gallery col-12 col-md-6">
                        <a href="@/assets/img/portfolio/tyre-dev/tyredev-2.png">
                            <img src="@/assets/img/portfolio/tyre-dev/tyredev-2.png" class="fit-image" alt="About Us">
                        </a>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Content Section 2 -- [video]  -->
        <section id="video" class="section-2 odd highlights image-left">
            <div class="container">
                <div class="row">
                    <div class="gallery col-12 col-md-6">
                        <a data-poster="@/assets/img/portfolio/tyre-dev/tyredev-feature.jpg" href="@/assets/img/portfolio/tyre-dev/video-www.tyredev.co.za.mp4">
                            <i class="play-video icon-control-play"></i>
                            <div class="mask-radius"></div>
                            <img src="@/assets/img/portfolio/tyre-dev/tyredev-feature.jpg" class="fit-image" alt="Tyre Dev">
                        </a>
                    </div>
                    <div class="col-12 col-md-6 pl-md-5 align-self-center text-center text-md-left">
                        <div class="row intro mb-0">
                            <div class="col-12 p-0">
                                <h2 class="featured">the creative bit</h2>
                                <p>We've entered a new era for the global auto industry.</p>
                                <blockquote>"Musk was willing to launch technology that wasn’t perfect, and then repeatedly upgrade it, using smartphone style over-the-air updates, paying little regard to early profitability."</blockquote>
                                <!-- <p>See the project: <a href="www.tyredev.co.za" target="_blank">Project</a></p> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
              
              <!-- Content Section 3 -- About [image] -->
        <section id="about" class="section-3 highlights image-right">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 align-self-center text-center text-md-left">
                        <div class="row intro mb-0">
                            <div class="col-12 p-0">
                                <h2 class="featured">services</h2>
                                <p>As IoT capabilities within the automotive industry evolve we aim to build services and features that make roads safer and embrace the next generation of automotive technology.</p>
                                <blockquote>"Inspired by industry leaders like Tesla, Mercedes, Hyundai, Audi, Toyota and Volkswagen we are passionate about all things software and automotive"
                                - Project Lead</blockquote>
                            </div>
                        </div>
                    </div>
                    <div class="gallery col-12 col-md-6">
                        <a href="@/assets/img/portfolio/tyre-dev/tyredev-3.png">
                            <img src="@/assets/img/portfolio/tyre-dev/tyredev-3.png" class="fit-image" alt="The Bit Foundry">
                        </a>
                    </div>
                </div>
            </div>
        </section>   
    </div>
</template>

<script>

    import StyleServices from "./../../resources/style-service"
    
    export default {
        name: 'tyre-dev',
        mounted () {
            StyleServices.applyStyling();
        }
    }
</script>