<template>
    <section id="services-technical" class="section-4 odd offers featured left">
        <div class="container">
            <div class="row intro">
                <div class="col-12 col-md-9 align-self-left text-left text-md-left">
                    <h2 class="featured">Technical Services</h2>
                    <p>The Bit Foundry, lead by Caybo &amp; Jessica, is a team of highly skilled creative technologists and engineers that specialize in digital strategy consulting, product development, design, data management and software. The Bit Foundry is especially interested in developing solutions for effective data management and using software and machine intelligence to improve business, process, produce. product and quality of life. </p>
                </div>
                <!-- <div class="col-12 col-md-3 align-self-end">
                    <a href="#" class="btn mx-auto mr-md-0 ml-md-auto primary-button"><i class="icon-grid"></i>VIEW ALL</a>
                </div> -->
            </div>
            <div class="row justify-content-center text-center items">
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card featured">
                        <i class="icon icon-screen-smartphone"></i>
                        <h4>Full-stack Software Engineering</h4>
                        <p>The Bit Foundry team of 12 engineers is based in Durban, South Africa. We provide comprehensive technical services.</p>
                         <ul>
                            <li>Web and Software Engineering</li>
                            <li>Mobile Application Development</li>
                            <li>API Development</li>
                            <li>Custom Software Development</li>
                            <li>Dev-Ops Implemenatations</li>
                            <li>Ecommerce Website Development</li>
                            <li>Web and Cloud Hosting</li>
                            <li>Application Support</li>
                        </ul>
                        <!-- <a href="#"><i class="btn-icon icon-arrow-right-circle"></i></a> -->
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card">
                        <i class="icon icon-screen-desktop"></i>
                        <h4>UX &amp; Design</h4>
                        <p>We recognise that each client is unique so we tailor solutions to each clients specific needs. With a focus on reusablitity, smart UX and API development for application efficiency, automation and integration we support clients with end-to-end services including consulting, design, development, implementation and managed services.</p>
                         <ul>
                            <li>UX and UI Design Consulting</li>
                            <li>Prototyping</li>
                            <li>IT Consulting</li>
                            <li>Software and SaaS Consulting</li>
                            <li>CRM Consulting</li>
                            <li>Ecommerce Consulting</li>
                        </ul>
                        <!-- <a href="#"><i class="btn-icon icon-arrow-right-circle"></i></a> -->
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card">
                        <i class="icon icon-graph"></i>
                        <h4>Product Development</h4>
                        <p>We develop custom software applications for enterprise, web, desktop and mobile platforms. We build products and systems to help industry and enterprises automate processes, increase productivity and facilitate workflow management. Within the product space we focus on:</p>
                         <ul>
                            <li>Machine Intelligence</li>
                            <li>Automation</li>
                            <li>Data Processing and Management</li>
                            <li>CRMs and Business Technology</li>
                            <li>Mobile Solution Development</li>
                            <li>Tracking and Tracing</li>
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
        name: 'Services-Technical',
        mounted() {
            styleService.applyStyling();
        }
    }
</script>
