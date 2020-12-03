<template>
    <div>
        <!-- Hero -->
        <section id="slider" class="hero p-0 odd featured">
            
            <div class="swiper-container no-slider slider-h-75">
                <div class="swiper-wrapper">

                    <!-- Item 1 -->
                    <div class="swiper-slide slide-center">
                        
                        <img src="assets/images/bg-8.jpg" class="full-image" data-mask="70">
                        
                        <div class="slide-content row text-center">
                            <div class="col-12 mx-auto inner">
                                <h1 data-aos="zoom-out-up" data-aos-delay="400" class="title effect-static-text">silicon africa</h1>
                                <nav data-aos="zoom-out-up" data-aos-delay="800" aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="/">home</a></li>
                                        <li class="breadcrumb-item"><a href="/portfolio">portfolio</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">silicon africa</li>
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
                                <p>With a goal to transform African cities through technology entrepreneurship and innovation Silicon Africa is an NPO we are proud to be working with.</p>
                                <h2>scope</h2>
                                <p class="featured breadcrumb-item active">
                                    <ul class="text-left">
                                        <li>consulting</li>
                                        <li>blockchain development</li>
                                        <li>application development</li>
                                        <li>custom integrations</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="gallery col-12 col-md-6">
                        <a href="assets/images/news-9-h.jpg">
                            <img src="assets/images/news-9-h.jpg" class="fit-image" alt="About Us">
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
                        <a data-poster="../../../public/img/BitFoundry-Logo-thebitfoundry-www.thebitfoundry.net.png" href="https://www.youtube.com/channel/UCAb60rVrvVQVfSgrX1UWb0g">
                            <i class="play-video icon-control-play"></i>
                            <div class="mask-radius"></div>
                            <img src="../../../public/img/BitFoundry-Logo-thebitfoundry-www.thebitfoundry.net.png" class="fit-image" alt="The Bit Foundry">
                        </a>
                    </div>
                    <div class="col-12 col-md-6 pl-md-5 align-self-center text-center text-md-left">
                        <div class="row intro mb-0">
                            <div class="col-12 p-0">
                                <h2 class="featured">the creative bit</h2>
                                <p>Seeing agape come together from concept to creation was a project close to our hearts. We are excited to grow with and support the brand and agape team on their endevours.</p>
                                <blockquote>Agape (Ancient Greek ἀγάπη, agapē) is a Greco-Christian term referring to unconditional love, "the highest form of love, charity".</blockquote>
                                <p>See the project: <a href="https://1silicon.africa/" target="_blank">Silicon Africa</a></p>
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
                                <p>We built the agape website from the ground up in the most beautiful and functional way so that it made a statement about the agape brand and enabled them to start telling their story. The website is a starting point for a story to be told, a clean eCommerce solution with social media integration and all relevant information related to agape products, the brand and their projects all accessible and presented in one centralised hub.</p>
                                <blockquote>"Thank you team for our awesome website, we love it and so do our customers"
                                - Agape Team</blockquote>
                            </div>
                        </div>
                    </div>
                    <div class="gallery col-12 col-md-6">
                        <a href="assets/images/news-7-h.jpg">
                            <img src="assets/images/news-7-h.jpg" class="fit-image" alt="The Bit Foundry">
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
        name: 'Agape Luxury',
        mounted () {
            StyleServices.applyStyling();
        }
    }
</script>