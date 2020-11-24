
export default {
    allBlogsResourceLink: function(count) {
        if(count == null) count = 20;
        return `https://api.cosmicjs.com/v1/mainblog/objects
            ?pretty=true
            &hide_metafields=true
            &type=blogs
            &read_key=${this.getReadKeyToken()}
            &limit=${count}
            &props=slug,title,content,metadata,`.replace(/\s/g, '');
    },
    singleBlogResourceLink: function(slug) {
        return `https://api.cosmicjs.com/v1/mainblog/object/
            ${slug}
            ?pretty=true
            &hide_metafields=true
            &read_key=${this.getReadKeyToken()}
            &props=slug,title,content,metadata`.replace(/\s/g, '');
    },
    allFoundriesResourceLink: function(count) {
        return `https://api.cosmicjs.com/v1/mainblog/objects
            ?pretty=true
            &hide_metafields=true
            &type=foundries
            &read_key=${this.getReadKeyToken()}
            &limit=${count || 20}
            &props=slug,title,content,metadata,`.replace(/\s/g, '');
    },
    getReadKeyToken() {
        return "2bng6EQVujaDI6yCjX8VTErNFkbcvoTfNJWbi4jKNkBTTycWNc";
    }
}

