<template>
    <header id="header">

        <!-- Navbar -->
        <nav class="navbar navbar-expand">
            <div class="container header">

                <!-- Navbar Brand-->
                <a class="navbar-brand" href="/">
                    The Bit Foundry<i class="leverage-2-0">2.0</i>
                    <!--
                        Custom Logo
                        <img src="assets/images/logo.svg" alt="Leverage">
                    -->
                </a>

                <!-- Nav holder -->
                <div class="ml-auto"></div>

                <!-- Navbar Items -->
                <ul class="navbar-nav items">
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link">services <i class="icon-arrow-down"></i></a>
                        <ul class="dropdown-menu">

                            <li class="nav-item"><router-link to="/technical-services" onclick="makeItJazzy();" v-on:click="reloadFunc()" class="nav-link">_technical</router-link></li>

                            <li class="nav-item"><router-link to="/creative-services" onclick="makeItJazzy();" class="nav-link">_creative</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link">foundries <i class="icon-arrow-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="nav-item"><router-link to="/software-foundry" onclick="makeItJazzy();"  class="nav-link">_software</router-link></li>
                                <li class="nav-item"><router-link to="aerotechnical-foundry" onclick="makeItJazzy();" class="nav-link">_aerotechnical</router-link></li>
                                <li class="nav-item"><router-link to="/clean-tech-foundry" onclick="makeItJazzy();"  class="nav-link">_cleantech</router-link></li>
                                <li class="nav-item"><router-link to="/blockchain-foundry" onclick="makeItJazzy();"  class="nav-link">_blockchain</router-link></li>
                                <li class="nav-item"><router-link to="/creative-foundry" onclick="makeItJazzy();"  class="nav-link">_thecreativebit</router-link></li>
                                <li class="nav-item"><router-link to="/scale-up-foundry" onclick="makeItJazzy();"  class="nav-link">_scaleup</router-link></li>
                            </ul>
                    </li>
                     <!--<li class="nav-item dropdown">
                        <a href="#" class="nav-link">products<i class="icon-arrow-down"></i></a>
                        <ul class="dropdown-menu">
                            <li class="nav-item"><router-link to="/portfolio/quick" onclick="makeItJazzy();"  class="nav-link">_quick</router-link></li>
                            <li class="nav-item"><router-link to="/portfolio/tyre-dev" onclick="makeItJazzy();"  class="nav-link">_tyredev</router-link></li>
                            <li class="nav-item"><router-link to="/portfolio/instant-ecommerce" onclick="makeItJazzy();"  class="nav-link">_iCommerce</router-link></li>
                           <li class="nav-item"><a href="#" class="nav-link">_futuristedu </a></li>
                            <li class="nav-item"><a href="#" class="nav-link">_radioworks </a></li>
                            <li class="nav-item"><a href="#" class="nav-link">_payroute</a></li>
                        </ul>
                    </li> -->
                    <li class="nav-item">
                        <router-link to="/portfolio" onclick="makeItJazzy();" class="nav-link">portfolio</router-link>
                    </li>
                     <li class="nav-item">
                         <router-link to="/blog" class="nav-link" onclick="makeItJazzy();" data-dismiss="modal">blog</router-link>
                    </li>
                </ul>

                <!-- Navbar Icons -->
                <ul class="navbar-nav icons">
                    <!-- <li class="nav-item" id="search">
                        <a href="#" class="nav-link" data-toggle="modal" data-target="#search">
                            <i class="icon-magnifier"></i>
                        </a>
                    </li> -->
                    <li class="nav-item social">
                        <a href="https://www.twitter.com/realbitfoundry" class="nav-link" target="_blank"><i class="icon-social-twitter"></i></a>
                    </li>
                    <li class="nav-item social">
                        <a href="https://www.linkedin.com/company/the-bit-foundry/" class="nav-link" target="_blank"><i class="icon-social-linkedin"></i></a>
                    </li>
                    <li class="nav-item social">
                        <a href="https://www.facebook.com/thebitfoundry" class="nav-link" target="_blank"><i class="icon-social-facebook"></i></a>
                    </li>
                </ul>

                <!-- Navbar Toggle -->
                <ul class="navbar-nav toggle">
                    <li class="nav-item">
                        <a href="#" class="nav-link" data-toggle="modal" data-target="#menu">
                            <i class="icon-menu m-0"></i>
                        </a>
                    </li>
                </ul>

                <!-- Navbar Action -->
                <ul class="navbar-nav action">
                    <li class="nav-item ml-3">
                        <a href="mailto:info@thebitfoundry.net" target="_blank" class="btn ml-lg-auto dark-button smooth-anchor" data-aos="zoom-out-up" data-aos-delay="1200"><i class="icon-rocket"></i>Contact</a>
                        <!--
                            Suggestion: Replace the purchase button above with a contact button.

                            <a href="#contact" class="smooth-anchor btn ml-lg-auto dark-button"><i class="icon-rocket"></i>CONTACT US</a>
                        -->
                    </li>
                </ul>
            </div>
        </nav>

    </header>
</template>

<script>
    export default {
        name: 'header-component',
        methods: {
            reloadFunc: function() {
                console.log("BastardTriggered;");
                // this.document.location.reload();
            }
        }
    }
</script>

<style scoped>
    @media screen and (max-width: 420px) {
        #search {
            display: none;
        }
    }
</style>
