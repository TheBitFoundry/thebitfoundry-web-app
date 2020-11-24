<template>
    <section id="content" class="section-1 single featured">
        <div class="container">
            <div class="row">

                <!-- Main -->
                <main class="col-12 col-lg-8 p-0">
                    <div class="row">
                        <div class="col-12 align-self-center">
<<<<<<< HEAD
                            <img :src="blog.imageUrl" alt="somethig"/>
                            
                            <h2 class="featured mt-0 ml-0 pt-5 pb-5">{{ blog.title }}</h2>

=======
                            <h2 class="featured mt-0 ml-0">{{ blog.title }}</h2>
>>>>>>> 61c0f856b5370aaeaf21c9816c636ddadc0845fa
                            <div v-html="blog.content"></div>

                            <!-- Post Holder -->
                            <ul class="mb-5 post-holder">
                                <li class="post-meta-item">
                                    <time class="date"><span class="posted-on">Posted on <a href="#" rel="bookmark"><time class="entry-date published updated" datetime="2018-11-01T06:18:46+00:00">November 12, 2019</time></a></span></time>
                                </li>
                            </ul>

                            <!-- Comments -->
<!--                            <h3>Leave a Reply</h3>-->
<!--                            <p>Sed mauris nulla, tempor eu est vel, dapibus hendrerit mauris.</p>-->
<!--                            <form>-->
<!--                                <fieldset>-->
<!--                                    <div class="row">-->
<!--                                        <div class="col-12 col-lg-6 input-group p-0 pr-lg-3">-->
<!--                                            <input type="text" name="name" data-minlength="3" class="form-control" placeholder="Name" required>-->
<!--                                        </div>-->
<!--                                        <div class="col-12 col-lg-6 input-group p-0">-->
<!--                                            <input type="email" name="email" data-minlength="3" class="form-control" placeholder="Email" required>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div class="row">-->
<!--                                        <div class="col-12 input-group p-0">-->
<!--                                            <textarea name="message" data-minlength="3" class="form-control" placeholder="Message" required></textarea>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div class="col-12 input-group p-0">-->
<!--                                        <a id="next-3" class="send btn primary-button">SEND<i class="icon-login left"></i></a>-->
<!--                                    </div>-->
<!--                                </fieldset>-->
<!--                            </form>-->
                        </div>
                    </div>
                </main>

                <!-- Sidebar -->
                <aside class="col-12 col-lg-4 pl-lg-5 p-0 float-right sidebar">
                    <div class="row">
                        <div class="col-12 align-self-center text-left">

                            <!-- Widget [author] -->
                            <div class="item widget-author">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <a href="#" class="author">
                                            <img src="assets/images/team-1.jpg" alt="Lorem ipsum">
                                            <h4 class="title">{{ blog.authorName }}</h4>
                                        </a>
                                        <p class="biography">{{ blog.authorBio }}</p>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <span class="d-lg-flex align-items-center"><i class="icon-clock mr-2"></i>3 Days Ago</span>
                                    </li>
                                </ul>
                            </div>

                            <!-- Widget [categories] -->
                            <div class="item widget-categories">
                                <h4 class="title">Foundries</h4>
                                <ul class="list-group list-group-flush">
                                    <li v-for="pageTag in pageTags" v-bind:key="pageTag.slug" class="list-group-item d-flex justify-content-between align-items-center">
                                        <router-link :to="pageTag.link">{{ pageTag.title }}</router-link>
<!--                                        <span class="badge circle">23</span>-->
                                    </li>
                                </ul>
                            </div>

                            <!-- Widget [tags] -->
                            <div class="item widget-tags">
                                <h4 class="title">Blog Tags</h4>
                                <span v-for="category in blog.categories" v-bind:key="category.value" class="badge tag text-success">{{ category.value }}</span>
                            </div>

                            <!-- Widget [share-this] -->
                            <div class="item widget-share-this">
                                <h4 class="title">Share This</h4>
                                <ul class="navbar-nav social share-list">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link"><i class="icon-social-instagram ml-0"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link"><i class="icon-social-facebook"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link"><i class="icon-social-linkedin"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link"><i class="icon-social-twitter"></i></a>
                                    </li>
                                </ul>
                            </div>

                            <!-- Widget [gallery] -->
<!--                            <div class="item widget-gallery">-->
<!--                                <h4 class="title">Image Gallery</h4>-->
<!--                                <div class="gallery row justify-content-center">-->
<!--                                    <a class="col-6 item" href="assets/images/portfolio-1.jpg">-->
<!--                                        <img src="assets/images/gallery-1.jpg" class="w-100">-->
<!--                                    </a>-->
<!--                                </div>-->
<!--                            </div>-->
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </section>
</template>

<script>
    import blogs from "./../resources/blogs";
    import foundriesService from "./../resources/foundries-service";

    export default {
        name: 'blog-single',
        async mounted() {
            this.blog = await blogs.getSingleBlog(this.$route.params.slug);
            this.pageTags = await foundriesService.getFoundries();
        },
        data() {
          return {
              blog: {},
              pageTags: []
          }
        }
    }
</script>
