<template>
    <section id="services-creative" class="section-4 odd offers featured left">
        <div class="container">
            <div class="row intro">
                <div class="col-12 col-md-9 align-self-left text-left text-md-left">
                    <h2 class="featured">Creative Services</h2>
                    <p>Our creative team thrives on producing compelling creative assets and engaging content. When we're not coding or engineering software solutions, we like playing at the nexus of Art and Science. The creative foundry is all about exploring the avant-garde, blue-sky and sublime of brands, business and individuals across mind, digital and physical.</p>
                </div>
                <!-- <div class="col-12 col-md-3 align-self-end">
                    <a href="#" class="btn mx-auto mr-md-0 ml-md-auto primary-button"><i class="icon-grid"></i>VIEW ALL</a>
                </div> -->
            </div>
            <div class="row justify-content-center text-center items">
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card featured">
                        <i class="icon icon-chemistry"></i>
                           <h4>Brand Experience &amp; Creative</h4>
                        <p>As a full-service digital and ROI focused creative team, we produces quality content for various platforms to fuel media campaigns with a focus on brand voice, message, engagement and objectives.</p>
                          <ul>
                            <li>Brand Development and Storytelling</li>
                            <li>Digital Campaign Planning and Execution</li>
                            <li>Creative Writing and Design</li>
                            <li>Search Engine Optimization</li>
                            <li>Display Advertising</li>
                            <li>Search Engine Marketing</li>
                            <li>Event Design and Planning</li>
                        </ul>
                        <!-- <a href="#"><i class="btn-icon icon-arrow-right-circle"></i></a> -->
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card">
                        <i class="icon icon-chart"></i>
                        <h4>Social Media &amp; Campaign Marketing</h4>
                        <p>We are experts in the field of SEO, Google ranking and Google advertising. We help businesses and brands target their ideal clients and generate leads through optimized account and campaign management solutions.</p>
                        <ul>
                            <li>Targeted and Paid Adertising</li>
                            <li>Digital Campaign Planning and Execution</li>
                            <li>Creative Writing and Design</li>
                            <li>Search Engine Optimization</li>
                            <li>Display Advertising</li>
                            <li>Search Engine Marketing</li>
                        </ul>
                        <!-- <a href="#"><i class="btn-icon icon-arrow-right-circle"></i></a> -->
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card">
                        <i class="icon icon-camera"></i>
                        <h4>Content &amp; Production</h4>
                        <p>We work with teams and brands to develop brand strategy, brand positioning, product marketing strategies, brand identity, user experience design, communication strategies, logo design and art direction and help establish creativity consistency at the touchpoints that matter.</p>
                        <ul>
                            <li>Photography and Retouching</li>
                            <li>Videography</li>
                            <li>Sound Design and Production</li>
                            <li>VFX, 3D and Animation</li>
                            <li>Video Editing</li>
                            <li>Content Production</li>
                        </ul>
                        <!-- <a href="#"><i class="btn-icon icon-arrow-right-circle"></i></a> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import styleService from "./../resources/style-service";

    export default {
        name: 'services-creative',
        mounted() {
            styleService.applyStyling();
        }
    }
</script>
