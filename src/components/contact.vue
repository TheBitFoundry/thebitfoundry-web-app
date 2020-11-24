<template>
    <section id="contact" class="section-6 odd form">
        <div class="container">
            <form action="php/form.php" id="leverage-form" class="multi-step-form">
                <input type="hidden" name="section" value="leverage_form">

                <input type="hidden" name="reCAPTCHA">
                <!-- Remove this field if you want to disable recaptcha -->

                <div class="row">
                    <div class="col-12 col-md-6 align-self-start text-center text-md-left">

                        <!-- Success Message -->
                        <div class="row success message">
                            <div class="col-12 p-0">
                                <div class="wait">
                                    <div class="spinner-grow" role="status">
                                        <span class="sr-only">Loading</span>
                                    </div>
                                    <h3 class="sending">SENDING</h3>
                                </div>
                                <div class="done">
                                    <i class="icon bigger icon-check"></i>
                                    <h3>Your message was sent successful. Thanks.</h3>
                                    <a href="" class="btn mx-auto primary-button">
                                        <i class="icon-refresh"></i>
                                        REFRESH
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Steps Message -->
                        <div class="row intro form-content">
                            <div class="col-12 p-0">

                                <!-- Step Title -->
                                <div class="step-title">
                                    <h2 class="featured alt">Let's Talk?</h2>
                                    <p>Don't wait until tomorrow. Get in touch today. Connect with the left &amp; right brain duo behind The Bit Foundry, Jess &amp; Caybo.<br/> Use the form or email <strong>team@thebitfoundry.net</strong></p>
                                </div>

                                <!-- Step Title -->
                                <div class="step-title">
                                    <h2 class="featured alt">Almost There</h2>
                                    <p>We need some important information to understand how we can help you in the best possible way.</p>
                                </div>

                                <!-- Step Title -->
                                <div class="step-title">
                                    <h2 class="featured alt">Are you Ready?</h2>
                                    <p>Tell us a little about your project or company.</p>
                                </div>

                            </div>
                        </div>

                        <!-- Steps Group -->
                        <div class="row text-center form-content">
                            <div class="col-12 p-0">
                                <ul class="progressbar">
                                    <li>Personal Details</li>
                                    <li>Company Budget</li>
                                    <li>Service Setup</li>
                                </ul>

                                <!-- Group 1 -->
                                <fieldset class="step-group">
                                    <div class="row">
                                        <div class="col-12 input-group p-0">
                                            <input type="email" name="email" data-minlength="3" class="form-control field-email" placeholder="Email">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 input-group p-0">
                                            <input type="text" name="name" data-minlength="3" class="form-control field-name" placeholder="Name">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 input-group p-0">
                                            <input type="text" name="phone" data-minlength="3" class="form-control field-phone" placeholder="Phone">
                                        </div>
                                    </div>
                                    <div class="col-12 input-group p-0">
                                        <a class="step-next btn primary-button">NEXT<i class="icon-arrow-right-circle left"></i></a>
                                    </div>
                                </fieldset>

                                <!-- Group 2 -->
                                <fieldset class="step-group">
                                    <div class="row">
                                        <div class="col-12 input-group p-0">
                                            <input type="text" name="company" data-minlength="3" class="form-control field-company" placeholder="Company">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 input-group p-0">
                                            <input type="text" name="manager" data-minlength="3" class="form-control field-manager" placeholder="Manager">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 input-group p-0">
                                            <i class="icon-arrow-down"></i>
                                            <select name="budget" data-minlength="1" class="form-control field-budget">
                                                <option value="" selected disabled>What's your budget range?</option>
                                                <option>Less than $2.000</option>
                                                <option>$2.000 — $5.000</option>
                                                <option>$5.000 — $10.000</option>
                                                <option>$10,000+</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 input-group p-0 d-flex justify-content-between justify-content-md-start">
                                        <a class="step-prev btn primary-button mr-4"><i class="icon-arrow-left-circle"></i>PREV</a>
                                        <a class="step-next btn primary-button">NEXT<i class="icon-arrow-right-circle left"></i></a>
                                    </div>
                                </fieldset>

                                <!-- Group 3 -->
                                <fieldset class="step-group">
                                    <div class="row">
                                        <div class="col-12 input-group p-0">
                                            <textarea name="message" data-minlength="3" class="form-control field-message" placeholder="Message" required></textarea>
                                        </div>
                                    </div>
                                    <div class="col-12 input-group p-0 d-flex justify-content-between justify-content-md-start">
                                        <a class="step-prev btn primary-button mr-4"><i class="icon-arrow-left-circle"></i>PREV</a>
                                        <a class="step-next btn primary-button">SEND<i class="icon-arrow-right-circle left"></i></a>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>

                    <div class="content-images col-12 col-md-6 pl-md-5 d-none d-md-block">

                        <!-- Step 1 -->
                        <div class="gallery">
                            <a class="step-image" data-poster="assets/images/about-2.jpg" href="https://www.youtube.com/watch?v=7e90gBu4pas">
                                <i class="play-video icon-control-play"></i>
                                <div class="mask-radius"></div>
                                <img src="assets/images/about-2.jpg" class="fit-image" alt="Contact Us">
                            </a>
                        </div>

                        <!-- Step 2 -->
                        <div class="gallery">
                            <a class="step-image" href="assets/images/about-3.jpg">
                                <img src="assets/images/about-3.jpg" class="fit-image" alt="Contact Us">
                            </a>
                        </div>

                        <!-- Step 3 -->
                        <div class="gallery">
                            <a class="step-image" href="assets/images/about-4.jpg">
                                <img src="assets/images/about-4.jpg" class="fit-image" alt="Contact Us">
                            </a>
                        </div>

                        <!-- Step 4 -->
                        <div class="gallery">
                            <a class="step-image" href="assets/images/about-leverage.jpg">
                                <img src="assets/images/about-leverage.jpg" class="fit-image" alt="Contact Us">
                            </a>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'contact'
    }
</script>
