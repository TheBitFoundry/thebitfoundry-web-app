<template>
    <section id="stack-filter-static" class="section-1 showcase portfolio blog-grid filter-section">
        <div class="overflow-holder">
            <div class="container">
                <div class="row text-center intro">
                    <div class="col-12">
                        <h2 class="mb-0">Technology we work with</h2>
                        <p>Thechnologies used on projects vary depending on the project scope and objectives. We have experience with a wide range of technologies and work with the best options based on specific challenges.</p>
                    </div>
                </div>
                <div class="row justify-content-center text-center">
                    <div class="col-12">
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label class="btn active">
                                <input type="radio" value="all" checked class="btn-filter-item">
                                <span>All</span>
                            </label>
                            <label class="btn">
                                <input type="radio" value="eCommerce" class="btn-filter-item">
                                <span>front-end</span>
                            </label>
                            <label class="btn">
                                <input type="radio" value="brand" class="btn-filter-item">
                                <span>back-end</span>
                            </label>
                            <label class="btn">
                                <input type="radio" value="product" class="btn-filter-item">
                                <span>cloud</span>
                            </label>
                            <label class="btn">
                                <input type="radio" value="mobile" class="btn-filter-item">
                                <span>design</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row items filter-items">
                    <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["front-end"]'>
                        <div class="row card p-0 text-center">
                            <div class="gallery">
                                <a href="#" class="image-over">
                                    <img src="@/assets/img/hero-image-1.png" alt="Lorem ipsum">
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <h4 class="m-0">We designed and built a clean eCommerce solution and helped a slow fashion brand establsih their digital identity.</h4>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <p>Agape Luxury</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["mobile", "brand", "web"]'>
                        <div class="row card p-0 text-center">
                            <div class="gallery">
                                <a href="#" class="image-over">
                                    <img src="@/assets/img/hero-image-1.png" alt="Lorem ipsum">
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <h4 class="m-0">The Bit Foundry is working closely with NGO's to build a blockchain solution that builds trust and transparency into conservation, education and clean technology investment initiatives for corpoarte and government.</h4>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <p>NB Earth </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["web"]'>
                        <div class="row card p-0 text-center">
                            <div class="gallery">
                                <a href="#" class="image-over">
                                    <img src="@/assets/img/hero-image-1.png" alt="Lorem ipsum">
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <h4 class="m-0">Not much to see here because all our work is behind the scenes. We provide Roag with technical support and data management solutions.</h4>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <p>Roag </p>
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

                    <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["mobile","web","brand", "product"]'>
                        <div class="row card p-0 text-center">
                            <div class="gallery">
                                <a href="assets/images/news-10-h.jpg" class="image-over">
                                    <img src="@/assets/img/hero-image-1.png" alt="Lorem ipsum">
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <h4 class="m-0">We worked closely with a client to develop a custom CRM solution for their business needs. We build software that integrates with business operation allowing companies to operate more effectively, manage risk and save costs.</h4>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <p>Translink Logistics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["mobile","web","product"]'>
                        <div class="row card p-0 text-center">
                            <div class="gallery">
                                <a href="assets/images/news-10-h.jpg" class="image-over">
                                    <img src="@/assets/img/hero-image-1.png" alt="Lorem ipsum">
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <h4 class="m-0">We built web application for the renewable energy and construction industry. We used .NET to deliver a user-friendly interface and effective project management solution and implemented technology to capture project information, manage data and generate reports for effective project management.</h4>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <p>Quick</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["web","product"]'>
                        <div class="row card p-0 text-center">
                            <div class="gallery">
                                <a href="assets/images/news-11-h.jpg" class="image-over">
                                    <img src="@/assets/img/hero-image-1.png" alt="Lorem ipsum">
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <h4 class="m-0">We built a custom solution for our clients in the insurance industry customizing a suitable solution for optimized data and policy management.</h4>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <p>BitSure</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["web","eCommerce"]'>
                        <div class="row card p-0 text-center">
                            <div class="gallery">
                                <a href="assets/images/news-11-h.jpg" class="image-over">
                                    <img src="@/assets/img/hero-image-1.png" alt="Lorem ipsum">
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <h4 class="m-0">Custom eCommerce website development, technical support and hosting for a zero-waste home and lifestyle start up.</h4>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <p>Rethink Redesign</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["brand"]'>
                        <div class="row card p-0 text-center">
                            <div class="gallery">
                                <a href="assets/images/news-11-h.jpg" class="image-over">
                                    <img src="@/assets/img/hero-image-1.png" alt="Lorem ipsum">
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <h4 class="m-0">The Creative Bit produced a vibrant corporate identity and logo for a new TV show, Invade.</h4>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <p>Invade</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["web","brand","mobile"]'>
                        <div class="row card p-0 text-center">
                            <div class="gallery">
                                <a href="assets/images/news-12-h.jpg" class="image-over">
                                    <img src="@/assets/img/hero-image-1.png" alt="Lorem ipsum">
                                </a>
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <h4 class="m-0">The Bit Foundry worked on UI/UX and data integration for a aerospace platform. We used .NET to deliver a user-friendly interface and a flexible data integration solution. We developed the platform’s front-end and implemented technology to capture aerotechnical information, organize data, and generate reports and rich functionality to the UI.</h4>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <p>Riser </p>
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
        name: 'stack-filter-static'
    }
</script>
