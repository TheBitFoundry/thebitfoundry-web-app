<template>
    <!-- Portfolio Grid -->
        <section id="portfolio-grid" class="section-1 showcase portfolio blog-grid filter-section">
            <div class="overflow-holder">
                <div class="container">
                    <div class="row text-center intro">
                        <div class="col-12">
                            <h2 class="mb-0">View some of our work</h2>
                        </div>
                    </div>
                    <div class="row justify-content-center text-center">
                        <div class="col-12">
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn active">
                                    <input type="radio" value="all" checked class="btn-filter-item">
                                    <span>All</span>
                                </label>
                                <label class="btn">
                                    <input type="radio" value="software" class="btn-filter-item">
                                    <span>Software</span>
                                </label>
                                <label class="btn">
                                    <input type="radio" value="creative" class="btn-filter-item">
                                    <span>Creative</span>
                                </label>
                            </div>
                        </div>
                    </div>                  
                    <div class="row items filter-items">
                       <div class="col-12 col-md-6 col-lg-4 item filter-item" data-groups='["technology","branding"]'>
                            <div class="row card p-0 text-center">
                                <div class="gallery">
                                    <a href="assets/images/news-8-h.jpg" class="image-over">
                                        <img src="assets/images/news-8-h.jpg" alt="Lorem ipsum">
                                    </a>
                                </div>
                                <div class="card-caption col-12 p-0">
                                    <div class="card-body">
                                        <h4 class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                                    </div>
                                    <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    
                        <div class="col-1 filter-sizer"></div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <nav>
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <a class="page-link" href="#" tabindex="-1">
                                    <i class="icon-arrow-left"></i>
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item active"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">4</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    <i class="icon-arrow-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </section>    
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

    export default {
        name: 'blog-section',
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

