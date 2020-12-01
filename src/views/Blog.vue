<template>
  <div class="align-self-center text-center">
                    <h2 class="featured">Latest blog posts</h2>
                    <p>We are both creative and technical and strive to build beautiful and functional solutions for brands, business and industry.</p>
            </div>
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

