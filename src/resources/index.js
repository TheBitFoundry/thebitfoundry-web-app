export default {
    allBlogsResourceLink: function(count) {
        if(count == null) count = 20;
        return `https://api.cosmicjs.com/v1/mainblog/objects
            ?pretty=true
            &hide_metafields=true
            &type=blogs
            &read_key=2bng6EQVujaDI6yCjX8VTErNFkbcvoTfNJWbi4jKNkBTTycWNc
            &limit=${count}
            &props=slug,title,content,metadata,`;
    },
    singleBlogResourceLink: function(slug) {
        if(slug == null) return null;
        return `https://api.cosmicjs.com/v1/mainblog/object/
            ${slug}
            ?pretty=true
            &hide_metafields=true
            &read_key=2bng6EQVujaDI6yCjX8VTErNFkbcvoTfNJWbi4jKNkBTTycWNc
            &props=slug,title,content`;
    },
    getSlug() {
        return this.$route.params.slug;
    }
}
