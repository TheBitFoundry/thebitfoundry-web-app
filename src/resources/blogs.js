import helper from "./index";
import axios from "axios";

export default {
    getSingleBlog: async function(slug) {
        let blogLink = helper.singleBlogResourceLink(slug);
        let blog;

        try {
            const data = await axios.get(blogLink);
            blog = data.data;
        } catch (error) {
            console.log("error", error);
        }

        return {
            title: blog.object.title,
            imageUrl: blog.object.metadata.titlecard.url,
            excerpt: blog.object.metadata.excerpt,
            categories: blog.object.metadata.categories,
            content: blog.object.content,
            slug: blog.object.slug
        }
    },
    getMultipleBlogs: async function(count) {
        let blogsLink = helper.allBlogsResourceLink(count);
        let response;
        let blogs = [];

        try {
            let axiosResponse = await axios.get(blogsLink);
            response = axiosResponse.data;
        } catch (error) {
            console.log("error", error)
        }

        for(let blog of response.objects) {
            console.log("blog service", blog)
            let obj = {
                title: blog.title||"",
                imageUrl: blog.metadata.titlecard.url||"",
                except: blog.metadata.excerpt||"",
                categories: blog.metadata.categories||"",
                content: blog.content||"",
                slug: blog.slug||"",
                foundryTag: blog.metadata.select_foundry.title||"",
                dateAuthored: blog.metadata.data_authored||"",
                author: blog.metadata.author||"",
                authorLink: blog.metadata.author_link||""
            }
            blogs.push(obj);
        }
        return blogs;
    }
}
