<template>
    <section id="blog" class="section-1 showcase blog-grid masonry news">
        <div data-aos="zoom-in" data-aos-delay="200" data-aos-anchor="body" class="container">
            <div class="row content blog-grid masonry">
                <main class="col-12 p-0">
                    <div v-for="blog in blogs" v-bind:key="blog.title" class="bricklayer items columns-4">
                        <div class="card p-0 text-center item">
                            <div class="image-over">
                                <img :src="blog.metadata.titlecard.url" alt="Lorem ipsum">
                            </div>
                            <div class="card-caption col-12 p-0">
                                <div class="card-body">
                                    <a onclick="this.openSingleBlog()">{{ blog.title }}</a>
                                </div>
                                <div class="card-footer d-lg-flex align-items-center justify-content-center">
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-user"></i>John Doe</a>
                                    <a href="#" class="d-lg-flex align-items-center"><i class="icon-clock"></i>3 Days Ago</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <!-- Pagination -->
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
        </div>
    </section>
</template>

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
        created() {
            this.blogs = blogs.getMultipleBlogs(20)
        },
        methods: {
            openSingleBlog: function(blog) {
                this.$router.push({
                    name: 'single',
                    params: { slug: blog.slug }
                });
            }
        }
    };

</script>
