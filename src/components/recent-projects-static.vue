<template>
<div>
    <section id="recent-projects-static" class="section-3 odd offers secondary featured left">
        <div class="container">
            <div class="row intro">
                <div class="col-12 col-md-9 align-self-center text-center text-md-left pb-5">
                    <h2 class="featured">Team favourites</h2>
                    <p>It's not just about development for us, we work with clients on projects and products that we care to invest in. Here are a few of our favourites. </p>
                </div>
            <!-- <div class="col-12 col-md-3 align-self-end pb-5">
                   <router-link to="/portfolio" class="btn mx-auto mr-md-0 ml-md-auto primary-button" onclick="makeItJazzy();"><i class="icon-grid"></i>view all</router-link>
             </div> -->
            
                <div class="col-12 col-md-6 col-lg-4 item pb-4">
                    <div class="card">
                        <h4>API &amp; Application Development</h4>
                        <p>We built the front-end, back-end and data integration layer for a aerospace platform. We used .NET to deliver a fast, user-friendly experience and data management solution. We implemented technology to capture aerotechnical information, organize data, and generate reports and rich functionality to the UI.</p>
                        <div class="gallery pb-2">
                                <img src="@/assets/img/logos/rware.png" alt="RWARE">
                        </div>
                        <p>Phase: Private Use</p>
                    </div>
                </div>
                <!-- <div class="col-12 col-md-6 col-lg-4 item pb-4">
                    <div class="card featured">
                        <h4>Tracking Solution</h4>
                        <p>We worked closely with a partner and client to develop a custom tracking CRM solution for their business needs. We built software that integrates with their business operation allowing them to operate more effectively, manage risk and save costs.</p>
                        <div class="gallery">
                            <img src="@/assets/img/logos/bluesight.png" alt="BlueSight">
                        </div>
                        <p>Phase: Closed Beta Testing</p>
                    </div>
                </div> -->
                <div class="col-12 col-md-6 col-lg-4 item pb-4">
                    <div class="card featured">
                        <h4>Platform Development</h4>
                        <p>We are currently developing a system that facilitates a new way for NPO's, individuals, and private companies to invest in assets, communities, clean technology, conservation, and more.</p>
                        <div class="gallery">
                            <img src="@/assets/img/logos/aryablock.png" alt="Arya">
                        </div>
                        <p>Phase: Closed Alpha Testing</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Portfolio Grid -->
        <!-- <section id="portfolio-grid" class="section-1 showcase portfolio blog-grid filter-section">
            <div class="overflow-holder">
                <div class="container">
                    <div class="row text-center intro">
                        <div class="col-12">
                            <h2 class="mb-0">What We Do</h2>
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
                                    <input type="radio" value="design-thinking" class="btn-filter-item">
                                    <span>Software</span>
                                </label>
                                <label class="btn">
                                    <input type="radio" value="branding" class="btn-filter-item">
                                    <span>Creative</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row items filter-items">
                        <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["technology","digital-marketing","photography"]'>
                            <div class="row card p-0 text-center">
                                <div class="gallery">
                                    <a href="@/assets/img/brand/BitFoundry-Logo-thebitfoundry-www.thebitfoundry.net.png" class="image-over">
                                        <img src="@/assets/img/brand/BitFoundry-Logo-thebitfoundry-www.thebitfoundry.net.png" alt="Lorem ipsum">
                                    </a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <h4 class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                                    </div>
                                    <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["technology","branding"]'>
                            <div class="row card p-0 text-center">
                                <div class="gallery">
                                    <a href="assets/images/news-8-h.jpg" class="image-over">
                                        <img src="assets/images/news-8-h.jpg" alt="Lorem ipsum">
                                    </a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <h4 class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                                    </div>
                                    <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["technology","digital-marketing"]'>
                            <div class="row card p-0 text-center">
                                <div class="gallery">
                                    <a href="https://www.youtube.com/watch?v=7e90gBu4pas" class="image-over">
                                        <i class="play-video-full icon-control-play"></i>
                                        <div class="mask-radius-full"></div>
                                        <img src="assets/images/news-9-h.jpg" alt="Lorem ipsum">
                                    </a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <h4 class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                                    </div>
                                    <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-1 filter-sizer"></div>
                    </div>
                </div>
            </div>
        </section> -->
    </section>
</div>
</template>

<style>

.blog-item {
    width: 33.30% !important;
    float: left !important;
    padding:10px;
}

@media(max-width: 767px) {

.blog-item {
width: 100% !important;
float: left !important;
padding:10px;

} }

</style>

<script>
    export default {
        name: 'recent-projects-static'
    }  

</script>

