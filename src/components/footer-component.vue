<template>
    <footer class="odd">

        <!-- Footer [links] -->
        <section id="footer" class="footer">
            <div class="container">
                <div class="row items footer-widget">
                    <div class="col-12 col-lg-3 p-0">
                        <div class="row">
                            <div class="branding col-12 p-3 text-center text-lg-left item">
                                <div class="brand">
                                    <a href="/" class="logo">
                                        <!-- The Bit Foundry. -->
                                        
                                           <!-- Custom Logo -->
                                            <img src="@/assets/img/brand/BitFoundry-Logo-thebitfoundry-www.thebitfoundry.net.png" alt="The Bit Foundry">
                                       
                                    </a>
                                </div>
                                <p>We are both creative and technical and strive to build beautiful and functional solutions for brands, business, and industry. We design, build and scale software solutions with a focus on reusability, optimization, and performance.</p>

                                <ul class="navbar-nav social share-list mt-0 ml-auto">
                                    <li class="nav-item">
                                        <a href="https://www.instagram.com/thebitfoundry/" class="nav-link" target="_blank"><i class="icon-social-instagram ml-0"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="https://www.facebook.com/thebitfoundry/" class="nav-link" target="_blank"><i class="icon-social-facebook"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="https://www.linkedin.com/company/the-bit-foundry/" class="nav-link" target="_blank"><i class="icon-social-linkedin"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="https://www.twitter.com/thebitgroup/" class="nav-link" target="_blank"><i class="icon-social-twitter"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-9 p-0">
                        <div class="row">
                            <div class="col-12 col-lg-4 p-3 text-center text-lg-left item">
                                <h4 class="title">get in touch</h4>
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a href="tel:+27832349009" class="nav-link">
                                            <i class="icon-phone mr-2"></i>
                                            (+27) 83 234 9009
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="mailto:info@thebitfoundry.net" class="nav-link">
                                            <i class="icon-envelope mr-2"></i>
                                            info@thebitfoundry.net
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            <i class="icon-location-pin mr-2"></i>
                                                 Kloof, KwaZulu-Natal
                                                 <br/>
                                                 <span style="padding-left:28px;">South Africa, RSA 3610</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="mailto:info@thebitfoundry.net" class="mt-4 mr-auto ml-auto ml-lg-0 btn dark-button"><i class="icon-speech"></i>email us</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-12 col-lg-4 p-3 text-center text-lg-left item">
                                <h4 class="title">our services</h4>
                                <ul class="navbar-nav">
                                        <li class="nav-item"><router-link to="/technical-services" onclick="makeItJazzy();"  class="nav-link">_technical</router-link></li>
                                         <li class="nav-item"><router-link to="/creative-services" onclick="makeItJazzy();"  class="nav-link">_creative</router-link></li>
                                </ul>
                            </div>
                            <div class="col-12 col-lg-4 p-3 text-center text-lg-left item">
                                <h4 class="title">industries</h4>
                                <a href="#" class="badge tag">IoT</a>
                                <a href="#" class="badge tag">Agriculture</a>
                                <a href="#" class="badge tag">SaaS</a>
                                <a href="#" class="badge tag">Automation</a>
                                <a href="#" class="badge tag">Machine Intelligence</a>
                                <a href="#" class="badge tag">Education</a>
                                <a href="#" class="badge tag">Health</a>
                                <a href="#" class="badge tag">Energy</a>
                                <a href="#" class="badge tag">Aerospace</a>
                                <a href="#" class="badge tag">Finance</a>
                                <a href="#" class="badge tag">Entertainment</a>
                                <a href="#" class="badge tag">Sports &amp; Recreation</a>
                                <a href="#" class="badge tag">Environment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Copyright -->
        <section id="copyright" class="p-3 copyright">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 p-3 text-center text-lg-left">
                        <p>© 2021 The Bit Foundry</p>

                        
                        <!--
                            Suggestion: Replace the text above with a description of your website.
                         -->
                    </div>
                    <div class="col-12 col-md-6 p-3 text-center text-lg-right">
                        <p>coded with ♥ by <a href="https://www.linkedin.com/in/jessica-k/" target="_blank">Jess &amp; Caybo</a></p>
                    </div>
                </div>
            </div>
        </section>

    </footer>
</template>

<script>
    export default {
        name: 'footer-component'
    }
</script>
