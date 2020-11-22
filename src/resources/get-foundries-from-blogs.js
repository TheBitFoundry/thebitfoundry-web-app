import blogService from "./blogs.js";
export default {
    getFoundryTitlesWithCount: async function () {
        const blogs = await blogService.getMultipleBlogs(500);
        let blogPageTags = [];
        let returnObjects = [];

        blogs.forEach((item) => {
            blogPageTags.push(item.pageTag);
        });

        console.log(blogPageTags);

        blogPageTags.forEach((item) => {
           returnObjects.push({
               name: "",
               occurrence: this.getOccurrence(blogPageTags, item)
           });
        });

        return blogPageTags;
    },
    getOccurrence: function(array, value) {
        return array.filter((f) => (f === value)).length;
    }
}
