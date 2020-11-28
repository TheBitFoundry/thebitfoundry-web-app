<template>
    <header id="header">

        <!-- Navbar -->
        <nav data-aos="zoom-out" data-aos-delay="800" class="navbar navbar-expand">
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
                        <a href="#" class="nav-link">foundries <i class="icon-arrow-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="nav-item"><router-link to="/software-foundry" class="nav-link">_software</router-link></li>
                                <li class="nav-item"><router-link to="aerotechnical-foundry" class="nav-link">_aerotechnical</router-link></li>
                                <li class="nav-item"><router-link to="/clean-tech-foundry" class="nav-link">_cleantech</router-link></li>
                                <li class="nav-item"><router-link to="/blockchain-foundry" class="nav-link">_blockchain</router-link></li>
                                <li class="nav-item"><router-link to="/creative-foundry" class="nav-link">_thecreativebit</router-link></li>
                                <li class="nav-item"><router-link to="/scale-up-foundry" class="nav-link">_scaleup</router-link></li>
                            </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link">services <i class="icon-arrow-down"></i></a>
                        <ul class="dropdown-menu">
                            <li class="nav-item"><router-link to="/technical-services" class="nav-link">_technical</router-link></li>
                            <li class="nav-item"><router-link to="/creative-services" class="nav-link">_creative</router-link></li>
                            
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">portfolio</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link">products <i class="icon-arrow-down"></i></a>
                        <ul class="dropdown-menu">
                            <li class="nav-item"><a href="#" class="nav-link">_QuickConstruct</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">_PayRoute</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">_Riserware</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">_BlueSight </a></li>
                            <li class="nav-item"><a href="#" class="nav-link">_FuturistEdu </a></li>
                            <li class="nav-item"><a href="#" class="nav-link">_RadioWorks </a></li>
                            <li class="nav-item"><a href="#" class="nav-link">_TyreDev </a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">blog </a>
                    </li>
                </ul>

                <!-- Navbar Icons -->
                <ul class="navbar-nav icons">
                    <li class="nav-item">
                        <a href="#" class="nav-link" data-toggle="modal" data-target="#search">
                            <i class="icon-magnifier"></i>
                        </a>
                    </li>
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
                        <a href="#contact" class="btn ml-lg-auto dark-button smooth-anchor" data-aos="zoom-out-up" data-aos-delay="1200"><i class="icon-rocket"></i>Contact</a>
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
        name: 'header-component'
    }
</script>
