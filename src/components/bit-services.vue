<template>
    <section id="bit-services" class="section-4 odd offers featured left">
        <div class="container">
            <div class="row intro">
                <div class="col-12 col-md-9 align-self-left text-left text-md-left">
                    <h2 class="featured">What we do</h2>
                    <p>We put our hearts into our work and are especially interested in developing software for effective process and data management that improves business, produce, product and quality of life. Through a process of design sprints, market research, prototyping and product strategy we build brands and products that matter.</p>
                </div>
                <!-- <div class="col-12 col-md-3 align-self-end">
                    <a href="#" class="btn mx-auto mr-md-0 ml-md-auto primary-button"><i class="icon-grid"></i>VIEW ALL</a>
                </div> -->
            </div>
            <div class="row justify-content-center text-center items">
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card featured">
                        <i class="icon icon-screen-smartphone"></i>
                        <h4>MVP Design and Validation</h4>
                        <p>We provide comprehensive technical services. From defining your MVP and evolving your concept based on real user feedback we optimize design, functionality and revue streams to align with your business goals.</p>
                         <ul>
                            <li>MPV Design & Development</li>
                            <li>Rapid Prototyping</li>
                            <li>Market Research</li>
                        </ul>
                        <!-- <a href="#"><i class="btn-icon icon-arrow-right-circle"></i></a> -->
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card">
                        <i class="icon icon-screen-desktop"></i>
                        <h4>Technical Design</h4>
                        <p>We keep our products clean, smart and turn complex systems into simply valuable experiences. </p>
                         <ul>
                            <li>UX/UI Design</li>
                            <li>Application Design</li>
                            <li>Website Design</li>
                            <li>Brand Identity</li>
                        </ul>
                        <!-- <a href="#"><i class="btn-icon icon-arrow-right-circle"></i></a> -->
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card">
                        <i class="icon icon-graph"></i>
                        <h4>Product Development</h4>
                        <p>With experience in native, cross-platform and hybrid apps, we build products that matter and we build fast, light and smart.</p>
                         <ul>
                            <li>Cloud Architecture</li>
                            <li>Platform Development</li>
                            <li>Data Engineering</li>
                            <li>Technical Roadmaps</li>
                            <li>Critical Requirements Analysis</li>
                        </ul>
                        <!-- <a href="#"><i class="btn-icon icon-arrow-right-circle"></i></a> -->
                    </div>
                </div>
            </div>
             <div class="row justify-content-center text-center items">
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card featured">
                        <i class="icon icon-screen-smartphone"></i>
                        <h4>Operational Support</h4>
                        <p>Our goal is to simplify the technological obstacles that stand in the way of great product development and service delivery. We help partners establish lean </p>
                         <ul>
                            <li>Dev-Ops Support</li>
                            <li>Partnerships</li>
                            <li>Brand and culture</li>
                            <li>Application Support</li>
                        </ul>
                        <!-- <a href="#"><i class="btn-icon icon-arrow-right-circle"></i></a> -->
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card">
                        <i class="icon icon-screen-desktop"></i>
                        <h4>Go-to-Market Strategy</h4>
                        <p>With e develop growth strategies and establish a customer base to test and define product audiences. We buil brands as well as products.</p>
                         <ul>
                            <li>Product Launches</li>
                            <li>Brand Strategy</li>
                            <li>Marketing Tools</li>
                            <li>Brand Voice</li>
                            <li>Brand Look & Feel</li>
                        </ul>
                        <!-- <a href="#"><i class="btn-icon icon-arrow-right-circle"></i></a> -->
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card">
                        <i class="icon icon-graph"></i>
                        <h4>Data Insights & Analytics</h4>
                        <p>Through effective product user analytics captured via embedded tools and recorded user interations we improve products by meeting customer needs, identifying market gaps and</p>
                         <ul>
                            <li>Product User Analytics</li>
                            <li>Business Model Strategy</li>
                            <li>Fundraising Strategy</li>
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
        name: 'bit-services',
        mounted() {
            styleService.applyStyling();
        }
    }
</script>
