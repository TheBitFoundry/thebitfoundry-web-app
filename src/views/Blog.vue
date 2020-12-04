<template>
<div>
    <!-- Hero -->
        <section id="slider" class="hero p-0 odd featured">
            <div class="swiper-container no-slider slider-h-75">
                <div class="swiper-wrapper">

                    <!-- Item 1 -->
                    <div class="swiper-slide slide-center">
                        
                        <!-- <img src="assets/images/bg-5.jpg" class="full-image" data-mask="70"> -->
                        
                        <div class="slide-content row text-center">
                            <div class="col-12 mx-auto inner">
                                <h1 data-aos="zoom-out-up" data-aos-delay="400" class="title effect-static-text">Blog Posts</h1>
                                <nav data-aos="zoom-out-up" data-aos-delay="800" aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="/#demos">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Blog</li>
                                    </ol>
                                    <!-- <p class="breadcrumb-item active"></p> -->
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <BlogSection></BlogSection>
</div>

</template>

<style>

.blog-item {
    width: 33.30% !important; 
    float: left !important; 
    padding:10px;
}

@media(max-width: 767px) {

.blog-item {
width: 100% !important; 
float: left !important; 
padding:10px;

} }

</style>

<script>
    import blogs from "../resources/blogs";
    import BlogSection from "../components/blog-section";

    export default {
        name: 'blog-page',
        components: {
            BlogSection,
        },
        data() {
            return {
                blogs: [],
                errors: []
            }
        },
        async created() {
            this.blogs = await blogs.getMultipleBlogs(100);
        },
        methods: {
            openSingleBlog: function(blog) {
                this.$router.push({
                    name: 'Blogs',
                    params: { slug: blog.slug }
                });
            }
        }
    };

</script>

