<template>
    <section id="foundry-cards" class="section-4 odd offers featured right">
        <div class="container">
            <div class="row intro">
                <div class="col-12 col-md-9 align-self-center text-center text-md-left">
                    <h2 class="featured">Meet The Bit Foundry</h2>
                    <p>The Bit Foundry, lead by Jess &amp; Caybo, is a team of creative technologists and engineers that specialize in digital strategy consulting, software product development, design, and data management. We care about building products that matter, and strive for success with our products, project partners, and customers.</p>
                </div>
                <!-- <div class="col-12 col-md-3 align-self-end">
                    <a href="#" class="btn mx-auto mr-md-0 ml-md-auto primary-button"><i class="icon-grid"></i>VIEW ALL</a>
                </div> -->
            </div>
            <div class="row justify-content-center text-center items">
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card featured">
                        <i class="icon icon-mustache"></i>
                        <h4>Software</h4>
                        <p>The Bit Foundry is a software first company. We support products, clients and partners with their AI, data, software, and technology requirements. We build APIs, mobile apps, eCommerce solutions, professional responsive websites and technology optimized for our clients needs.</p>
                        <router-link to="/software-foundry" onclick="makeItJazzy();"><i class="btn-icon icon-arrow-right-circle"></i></router-link>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card">
                        <i class="icon icon-plane"></i>
                        <h4>Aerotechnical</h4>
                        <p>The Aerotechical Foundry is where we let our our spirit of adventure and our aspirations for fun, flight and efficiency take the lead. This is the place where man meets machine, where we explore products and solutions in aerosports, entertainment, recreation and aviation.</p>
                        <router-link to="/aerotechnical-foundry" onclick="makeItJazzy();"><i class="btn-icon icon-arrow-right-circle"></i></router-link>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card">
                        <i class="icon icon-power"></i>
                        <h4>Clean Technology</h4>
                        <p>The Clean Tech Foundry is dedicated to clean energy innovation, sustainable design, and building systems and solutions that optimize agriculture, health and energy efficiency. Together with our partners we work on solar, construction automation, as well as private and commercial projects.</p>
                        <router-link to="/clean-tech-foundry" onclick="makeItJazzy();"><i class="btn-icon icon-arrow-right-circle"></i></router-link>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card">
                        <i class="icon icon-chemistry"></i>
                        <h4>Creative</h4>
                        <p>The Creative Foundry is a collective playing at the nexus of Art &amp; Science. Working in the realm where logic and creativity meet, the creative foundry takes the lead on all things brand, design, marketing, and media.</p>
                        <router-link to="/creative-foundry" onclick="makeItJazzy();"><i class="btn-icon icon-arrow-right-circle"></i></router-link>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card">
                        <i class="icon icon-chart"></i>
                        <h4>Scale Up</h4>
                        <p>The Scale up Foundry supports entreprenuers and SMEs via strategic partnerships, cutting edge web and software solutions, hackathons, and events. We strive to scale products and services that matter.</p>
                        <router-link to="/scale-up-foundry" onclick="makeItJazzy();"><i class="btn-icon icon-arrow-right-circle"></i></router-link>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card featured">
                        <i class="icon icon-docs"></i>
                        <h4>Blockchain</h4>
                        <p>The Blockchain Foundry works with private companies, governments, and institutions to develop blockchain solutions that improve transparency, security and accessibility across various domains.</p>
                        <router-link to="/blockchain-foundry" onclick="makeItJazzy();"><i class="btn-icon icon-arrow-right-circle"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'foundry-cards'
    }
</script>