import blogService from "./blogs.js";
export default {
    getFoundryTitlesWithCount: async function () {
        const blogs = await blogService.getMultipleBlogs(500);
        let blogPageFilter = [];

        for(let blog of blogs) {
            blogPageFilter.push({
                title: blog.title
            });
        }

        return blogPageFilter;
    }
}
