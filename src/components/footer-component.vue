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
                                            <img src="../../public/img/BitFoundry-Logo-thebitfoundry-www.thebitfoundry.net.png" alt="The Bit Foundry">
                                       
                                    </a>
                                </div>
                                <p>Authentic and innovative.<br>We design, build and scale software solutions with a focus on reusability, optimization <br>and performance.</p>

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
                                        <a href="https://www.twitter.com/realbitfoundry/" class="nav-link" target="_blank"><i class="icon-social-twitter"></i></a>
                                    </li>
                                      <li class="nav-item">
                                        <a href="https://www.github.com/thebitfoundry/" class="nav-link" target="_blank"><i class="icon-social-github"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-9 p-0">
                        <div class="row">
                            <div class="col-12 col-lg-4 p-3 text-center text-lg-left item">
                                <h4 class="title">Get in Touch</h4>
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            <i class="icon-phone mr-2"></i>
                                            (+27) 83 234 9009
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
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
                                        <a href="#contact" class="mt-4 mr-auto ml-auto ml-lg-0 btn dark-button smooth-anchor"><i class="icon-speech"></i>SEND A MESSAGE</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-12 col-lg-4 p-3 text-center text-lg-left item">
                                <h4 class="title">Our Services</h4>
                                <ul class="navbar-nav">
                                        <li class="nav-item"><router-link to="/technical-services" onclick="makeItJazzy();"  class="nav-link">_technical</router-link></li>
                                         <li class="nav-item"><router-link to="/creative-services" onclick="makeItJazzy();"  class="nav-link">_creative</router-link></li>
                                </ul>
                            </div>
                            <div class="col-12 col-lg-4 p-3 text-center text-lg-left item">
                                <h4 class="title">Popular Tags</h4>
                                <a href="#" class="badge tag">Mobile</a>
                                <a href="#" class="badge tag">Agriculture</a>
                                <a href="#" class="badge tag">Software</a>
                                <a href="#" class="badge tag">AI</a>
                                <a href="#" class="badge tag">Machine Learning</a>
                                <a href="#" class="badge tag">Education</a>
                                <a href="#" class="badge tag">Business</a>
                                <a href="#" class="badge tag">Health</a>
                                <a href="#" class="badge tag">Automation</a>
                                <a href="#" class="badge tag">Clean Technology</a>
                                <a href="#" class="badge tag">Aerospace</a>
                                <a href="#" class="badge tag">Design</a>
                                <a href="#" class="badge tag">Creative</a>
                                <a href="#" class="badge tag">Finance</a>
                                <a href="#" class="badge tag">Blockchain</a>
                                <a href="#" class="badge tag">Entertainment</a>
                                <a href="#" class="badge tag">Sports &amp; Recreation</a>
                                <a href="#" class="badge tag">Environment</a>
                                <a href="#" class="badge tag">Agriculture</a>
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
                        <p>© 2020 The Bit Foundry</p>

                        
                        <!--
                            Suggestion: Replace the text above with a description of your website.
                         -->
                    </div>
                    <div class="col-12 col-md-6 p-3 text-center text-lg-right">
                        <p>Proudly coded by <a href="#" target="_blank">Jess &amp; Caybo</a>.</p>
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
