<template>
 <!-- Contact -->
        <section id="simple-form" class="section-3 odd form">
            <div class="container smaller">
                <div class="row text-center intro">
                    <div class="col-12">
                        <h2 class="mb-0 super effect-static-text">Let's Talk?</h2>
                    </div>
                </div>
                <form action="php/form.php" id="leverage-simple-form" class="leverage-simple-form">
                    <input type="hidden" name="section" value="leverage_form">

                    <input type="hidden" name="reCAPTCHA">
                    <!-- Remove this field if you want to disable recaptcha -->

                    <div class="row form-group-margin">
                        <div class="col-12 col-md-6 m-0 p-2 input-group">
                            <input type="text" name="name" class="form-control field-name" placeholder="Name">
                        </div>
                        <div class="col-12 col-md-6 m-0 p-2 input-group">
                            <input type="email" name="email" class="form-control field-email" placeholder="Email">
                        </div>
                        <div class="col-12 col-md-6 m-0 p-2 input-group">
                            <input type="text" name="phone" class="form-control field-phone" placeholder="Phone">
                        </div>
                        <div class="col-12 col-md-6 m-0 p-2 input-group">
                            <i class="icon-arrow-down mr-3"></i>
                            <select name="budget" class="form-control field-budget">
                                <option value="" selected disabled>What's your budget range?</option>
                                <option>Less than $2.000</option>
                                <option>$2.000 — $5.000</option>
                                <option>$5.000 — $10.000</option>
                                <option>$10,000+</option>
                            </select>
                        </div>
                        <div class="col-12 m-0 p-2 input-group">
                            <textarea name="message" class="form-control field-message" placeholder="Message"></textarea>
                        </div>
                        <div class="col-12 col-12 m-0 pl-md-2">
                            <span class="form-alert"></span>
                        </div>
                        <div class="col-12 input-group m-0 p-2">
                            <a class="btn primary-button">SEND</a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
</template>
<script>
    export default {
        name: 'simple-form'
    }
</script>
