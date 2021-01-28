<template>
    <section id="services-technical" class="section-4 odd offers featured left">
        <div class="container">
            <div class="row intro">
                <div class="col-12 col-md-9 align-self-left text-left text-md-left">
                    <h2 class="featured pb-3 pt-3">Technical Services</h2>
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
                        <p>Our engineering team is based in Durban, South Africa and provide comprehensive technical services.</p>
                         <ul>
                            <li>Website and Mobile Development</li>
                            <li>Native, Hybrid and Cross-platform Development</li>
                            <li>eCommerce Website Development</li>
                            <li>Application Support</li>
                        </ul>
                        <!-- <a href="#"><i class="btn-icon icon-arrow-right-circle"></i></a> -->
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card">
                        <i class="icon icon-screen-desktop"></i>
                        <h4>Technical Consulting</h4>
                        <p>With a focus on efficiency, automation and integration we support clients with end-to-end services including consulting, design, development, implementation and managed services.</p>
                         <ul>
                            <li>UX and Design Consulting</li>
                            <li>IT Infrastructure Consulting</li>
                            <li>Software and SaaS Consulting</li>
                            <li>CRM Consulting</li>
                            <li>eCommerce Consulting</li>
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
                            <li>Product Design</li>
                            <li>Research and Testing</li>
                            <li>Process and Product Integration</li>
                            <li>Product Growth</li>
                        </ul>
                        <!-- <a href="#"><i class="btn-icon icon-arrow-right-circle"></i></a> -->
                    </div>
                </div>
            </div>
              <div class="row justify-content-center text-center items">
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card featured">
                        <i class="icon icon-screen-smartphone"></i>
                        <h4>API Development</h4>
                        <p>We recognise that each client is unique so we tailor solutions to each clients specific needs and business critical requirements.</p>
                         <ul>
                            <li>API Development</li>
                            <li>Custom Software Development</li>
                            <li>Dev-Ops Implemenatations</li>
                        </ul>
                        <!-- <a href="#"><i class="btn-icon icon-arrow-right-circle"></i></a> -->
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card">
                        <i class="icon icon-screen-desktop"></i>
                        <h4>Cloud Archtecture</h4>
                        <p>We work with all major cloud service providers including Amazon, Microsoft and Google Cloud. Work with us to establish what will work best for you.</p>
                         <ul>
                            <li>Cloud Hosting</li>
                            <li>Cloud Archtecture</li>
                            <li>Web and App Hosting</li>
                        </ul>
                        <!-- <a href="#"><i class="btn-icon icon-arrow-right-circle"></i></a> -->
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 item">
                    <div class="card">
                        <i class="icon icon-graph"></i>
                        <h4>Data Engineering</h4>
                        <p>We use effective data management solutions and data insights to guide product development and business growth.</p>
                         <ul>
                            <li>Database Design</li>
                            <li>Data Management</li>
                            <li>Database Architecture</li>
                            <li>Data Analysis</li>
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
        name: 'services-technical',
        mounted() {
            styleService.applyStyling();
        }
    }
</script>
