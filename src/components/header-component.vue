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
                        <a href="#" class="nav-link">Foundries <i class="icon-arrow-down"></i></a>
                            <ul class="dropdown-menu">
                                <li class="nav-item"><a href="/software" class="nav-link">Software</a></li>
                                <li class="nav-item"><a href="/aerotechnical" class="nav-link">Aerotechnical</a></li>
                                <li class="nav-item"><a href="/cleantech" class="nav-link">Clean Tech</a></li>
                                <li class="nav-item"><a href="/creative" class="nav-link">Creative</a></li>
                                <li class="nav-item"><a href="/scaleup" class="nav-link">Scale Up</a></li>
                                <li class="nav-item"><a href="/blockchain" class="nav-link">Blockchain</a></li>
                            </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link">Services <i class="icon-arrow-down"></i></a>
                        <ul class="dropdown-menu">
                            <li class="nav-item"><a href="/services" class="nav-link">Technical</a></li>
                            <li class="nav-item"><a href="/thecreativebit" class="nav-link">Creative</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link">Portfolio <i class="icon-arrow-down"></i></a>
                        <ul class="dropdown-menu">
                            <li class="nav-item"><a href="#" class="nav-link">Content+</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">Content++</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">Content+++</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link">Products <i class="icon-arrow-down"></i></a>
                        <ul class="dropdown-menu">
                            <li class="nav-item"><a href="#" class="nav-link">QuickConstruct</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">PayRoute</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">Riserware</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">BlueSight </a></li>
                            <li class="nav-item"><a href="#" class="nav-link">FuturistEdu </a></li>
                            <li class="nav-item"><a href="#" class="nav-link">RadioWorks </a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Blog </a>
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
                        <a href="/buy-at-themeforest" target="_blank" class="btn ml-lg-auto dark-button"><i class="icon-rocket"></i>Contact</a>
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
