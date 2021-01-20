<template>
    <section id="portfolio-grid" class="section-1 showcase portfolio blog-grid filter-section">
        <div class="overflow-holder">
            <div class="container">
                <div class="row text-center intro">
                    <div class="col-12">
                        <h2 class="mb-0">Recent projects</h2>
                    </div>
                </div>
                <div class="row justify-content-center text-center">
                    <div class="col-12">
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label class="btn">
                                <input type="radio" value="web" checked class="btn-filter-item">
                                <span>web</span>
                            </label>
                            <label class="btn">
                                <input type="radio" value="eCommerce" class="btn-filter-item">
                                <span>eCommerce</span>
                            </label>
                            <label class="btn">
                                <input type="radio" value="brand" class="btn-filter-item">
                                <span>brand</span>
                            </label>
                            <label class="btn">
                                <input type="radio" value="product" class="btn-filter-item">
                                <span>product</span>
                            </label>
                            <label class="btn">
                                <input type="radio" value="mobile" class="btn-filter-item">
                                <span>mobile</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row items filter-items">
                    <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["web","eCommerce","brand"]'>
                        <div class="row card p-0 text-center">
                            <div class="gallery">
                                <a href="#" class="image-over">
                                    <img src="@/assets/img/portfolio/agape-luxury-ecommerce.png" alt="Lorem ipsum">
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <h4 class="m-0">Agape Luxury</h4>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <p>We designed and built a clean eCommerce solution and helped a slow fashion brand establsih their digital identity.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["mobile", "brand", "web"]'>
                        <div class="row card p-0 text-center">
                            <div class="gallery">
                                <a href="#" class="image-over">
                                    <img src="@/assets/img/portfolio/nb-earth-project.png" alt="Lorem ipsum">
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <h4 class="m-0">NB Earth</h4>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <p>The Bit Foundry is working closely with NGO's to build a blockchain solution that builds trust and transparency into conservation, education and clean technology investment initiatives for corpoarte and government.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["web"]'>
                        <div class="row card p-0 text-center">
                            <div class="gallery">
                                <a href="#" class="image-over">
                                    <img src="@/assets/img/portfolio/roag-event-data-management.png" alt="Roag">
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <h4 class="m-0">Roag</h4>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <p>Not much to see here because all our work is behind the scenes. We provide Roag with technical support and data management solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["software","design"]'>
                        <div class="row card p-0 text-center">
                            <div class="gallery">
                                <a href="https://www.youtube.com/watch?v=7e90gBu4pas" class="image-over">
                                    <i class="play-video-full icon-control-play"></i>
                                    <div class="mask-radius-full"></div>
                                    <img src="@/assets/img/hero-image-1.png" alt="Lorem ipsum">
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <h4 class="m-0">We worked closely with a client to develop a custom CRM solution for their business needs. We build software that integrates with business operation allowing companies to operate more effectively, manage risk and save costs.</h4>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <p>BlueSight Logistics </p>
                                </div>
                            </div>
                        </div>
                    </div> -->

                    <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["mobile", "web", "brand", "product"]'>
                        <div class="row card p-0 text-center">
                            <div class="gallery">
                                <a href="#" class="image-over">
                                    <img src="@/assets/img/portfolio/translink-custom-crm.png" alt="Translink">
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <h4 class="m-0">Translink Logistics</h4>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <p>We worked closely with a client to develop a custom logistics CRM solution for their business needs. We built the software to integrate with business operations allowing companies to use data more effectively, manage risk and save costs.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["mobile","web","product"]'>
                        <div class="row card p-0 text-center">
                            <div class="gallery">
                                <a href="#" class="image-over">
                                    <img src="@/assets/img/portfolio/quick-custom-crm.png" alt="Quick">
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <h4 class="m-0">Quick</h4>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <p>We built a cross-platform web application for the energy and construction industry. Using .NET we delivered a user-friendly project management app. We implemented features to capture project information, manage data and generate reports for effective project management.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["mobile","web"]'>
                        <div class="row card p-0 text-center">
                            <div class="gallery">
                                <a href="#" class="image-over">
                                    <img src="@/assets/img/portfolio/on-form-website.png" alt="On Form">
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <h4 class="m-0">Forms Control</h4>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <p>We built a simple professional responsive WordPress website for Forms Control and the On Form brand.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["web","eCommerce"]'>
                        <div class="row card p-0 text-center">
                            <div class="gallery">
                                <a href="#" class="image-over">
                                    <img src="@/assets/img/portfolio/rethink-ecommerce.png" alt="Rethink Redesign">
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <h4 class="m-0">Rethink Redesign</h4>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <p>Custom eCommerce website development, technical support and hosting for a zero-waste home and lifestyle start up.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-1 filter-sizer"></div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'portfolio-filter'
    }
</script>
