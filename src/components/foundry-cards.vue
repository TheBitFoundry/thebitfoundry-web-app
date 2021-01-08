<template>
    <section id="foundry-cards" class="section-4 odd offers featured right">
        <div class="container">
            <div class="row intro">
                <div class="col-12 col-md-9 align-self-center text-center text-md-left">
                    <h2 class="featured">Meet The Bit Foundry</h2>
                    <p>We care about building products that matter and strive for success with our products, project partners, clients and customers. We have many interests but we really love freedom, privacy, software, smart design, data, science, healthcare, clean technology &amp; adventure.</p>
                </div>
                <!-- <div class="col-12 col-md-3 align-self-end">
                    <a href="#" class="btn mx-auto mr-md-0 ml-md-auto primary-button"><i class="icon-grid"></i>VIEW ALL</a>
                </div> -->
            </div>
            <div class="row justify-content-center text-center items">
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card featured">
                        <i class="icon icon-mustache"></i>
                        <h4>Bit Foundry</h4>
                        <p>The Bit Foundry is home to various software products and services. As a software first foundry we support products, clients and partners with their AI, data, software and technology requirements. We build APIs, mobile apps, professional responsive websites and eCommerce solutions optimized for our clients needs.</p>
                        <router-link to="/software-foundry" onclick="makeItJazzy();"><i class="btn-icon icon-arrow-right-circle"></i></router-link>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card">
                        <i class="icon icon-plane"></i>
                        <h4>Aerotechnical Foundry</h4>
                        <p>The Aerotechical Foundry was founded to explore the humans spirit of adventure and our aspirations for flight and efficiency. We explore products and solutions in aerosports, aeromedicine, electric aircrafts and VTOL.</p>
                        <router-link to="/aerotechnical-foundry" onclick="makeItJazzy();"><i class="btn-icon icon-arrow-right-circle"></i></router-link>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card">
                        <i class="icon icon-power"></i>
                        <h4>Clean Tech Foundry</h4>
                        <p>The Clean Tech Foundry is passionate about clean energy innovation, sustainable design and building systems and solutions that optimize agriculture, health and energy efficiency. Together with our partners we work on solar, construction automation, private and commercial projects.</p>
                        <router-link to="/clean-tech-foundry" onclick="makeItJazzy();"><i class="btn-icon icon-arrow-right-circle"></i></router-link>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card">
                        <i class="icon icon-chemistry"></i>
                        <h4>Creative Foundry</h4>
                        <p>The Creative Foundry is a collective playing at the nexus of Art &amp; Science. Working in the realm where logic and creativity meet the creative foundry takes the lead on all things brand, design, marketing and media.</p>
                        <router-link to="/creative-foundry" onclick="makeItJazzy();"><i class="btn-icon icon-arrow-right-circle"></i></router-link>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card">
                        <i class="icon icon-chart"></i>
                        <h4>Scale Up Foundry</h4>
                        <p>The Scale up Foundry supports entreprenuers and SMEs via strategic partnerships, cutting edge web and software solutions, hackathons and events. We strive to scale products and services that matter.</p>
                        <router-link to="/scale-up-foundry" onclick="makeItJazzy();"><i class="btn-icon icon-arrow-right-circle"></i></router-link>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card featured">
                        <i class="icon icon-docs"></i>
                        <h4>Blockchain Foundry</h4>
                        <p>The Blockchain Foundry works with corporates, governments and institutions to develop blockchain solutions that improve transparency, security and accessibility across various domains.</p>
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
