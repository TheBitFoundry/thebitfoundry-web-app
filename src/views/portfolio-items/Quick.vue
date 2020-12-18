<template>
    <div>
        <!-- Hero -->
        <section id="slider" class="hero p-0 odd featured">
            
            <div class="swiper-container no-slider slider-h-75">
                <div class="swiper-wrapper">

                    <!-- Item 1 -->
                    <div class="swiper-slide slide-center">
                        
                        <img src="@/assets/img/portfolio/quick/q-quick-cover.png" class="full-image" data-mask="70">
                        
                        <div class="slide-content row text-center">
                            <div class="col-12 mx-auto inner">
                                <h1 data-aos="zoom-out-up" data-aos-delay="400" class="title effect-static-text">quick</h1>
                                <nav data-aos="zoom-out-up" data-aos-delay="800" aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="/">home</a></li>
                                        <li class="breadcrumb-item"><a href="/portfolio">portfolio</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">quick</li>
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
                                <p>Quick is a mobile solution for Project and Product Managers who want to stay on top of their projects and ensure project schedule, budget and team members are on track.</p>
                                <h2>technical scope</h2>
                                <p class="featured breadcrumb-item active">
                                    <ul class="text-left">
                                        <li>mobile application development</li>
                                        <li>technical design</li>
                                        <li>API development</li>
                                        <li>custom integrations</li>
                                        <li>cloud architecture</li>
                                        <li>cloud hosting</li>
                                         <li>UX/UI design</li>
                                        <li>app design</li>
                                        <li>brand development</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="gallery col-12 col-md-6">
                        <a href="#">
                            <img src="@/assets/img/portfolio/quick/quick-logo.png" class="fit-image" alt="About Us">
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
                        <a data-poster="@/assets/img/portfolio/quick/">
                            <img src="@/assets/img/portfolio/quick/quick-solar-construction-app-The-Bit-Foundry.png" alt="The Bit Foundry">
                        </a>
                    </div>
                    <div class="col-12 col-md-6 pl-md-5 align-self-center text-center text-md-left">
                        <div class="row intro mb-0">
                            <div class="col-12 p-0">
                                <h2 class="featured">services</h2>
                                <p>We built a cross-platform web application for the energy and construction industry. Using .NET we delivered a user-friendly project management app. We implemented features to capture project information, manage data and generate reports for effective project management.</p>
                                <blockquote>"We're excited to see how this solution can help African construction and energy companies increase their efficiency and lower their operating costs. Learn more about using the Quick app and joining our clean energy partner network."
                                - Co-founder</blockquote>
                                <p>Learn more about <a href="mailto:cleantech@thebitfoundry.net" target="_blank">Quick</a></p>
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
                                <h2 class="featured">the creative bit</h2>
                                <blockquote>"The creative bit look forward to working with Quick on their launch!"</blockquote>
                                <p>We love wind and solar energy projects! The future of solar is bright and we love contributing to a more sustainable future.</p>
                            </div>
                        </div>
                    </div>
                    <div class="gallery col-12 col-md-6">
                        <a href="#">
                            <img src="@/assets/img/portfolio/quick/quick-app-look-and-feel.png" alt="The Bit Foundry">
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
        name: 'portfolio-item-template',
        mounted () {
            StyleServices.applyStyling();
        }
    }
</script>