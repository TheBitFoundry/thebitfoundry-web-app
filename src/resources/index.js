export default {
    allBlogs: function() {
        return "https://api.cosmicjs.com/v1/mainblog/objects" +
            "?pretty=true" +
            "&hide_metafields=true" +
            "&type=blogs" +
            "&read_key=2bng6EQVujaDI6yCjX8VTErNFkbcvoTfNJWbi4jKNkBTTycWNc" +
            "&limit=20" +
            "&props=slug,title,content,metadata,";
    },
    singleBlog: function() {
        return "https://api.cosmicjs.com/v1/mainblog/object/" +
            "[slug]" +
            "?pretty=true" +
            "&hide_metafields=true" +
            "&read_key=2bng6EQVujaDI6yCjX8VTErNFkbcvoTfNJWbi4jKNkBTTycWNc" +
            "&props=slug,title,content"
    },
    getSlug() {
        return this.$route.params.slug;
    },
    getSingleLink: function (slug) {
        return this.singleBlog()
            .replace("[slug]", slug || this.getSlug());
    }
}
