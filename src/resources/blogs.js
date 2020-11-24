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
            slug: blog.object.slug,
            foundryTag: blog.object.metadata.select_foundry.title||"",
            dateAuthored: blog.object.metadata.data_authored||"",
            authorName: blog.object.metadata.select_author.title||"",
            authorLink: blog.object.metadata.select_author.metadata.author_link||"",
            authorProfileImageUrl: blog.object.metadata.select_author.metadata.profile_picture.url||"",
            authorBio: blog.object.metadata.select_author.metadata.author_bio||"",
            shareLinkedIn: blog.object.metadata.linkedin||"",
            shareFacebook: blog.object.metadata.facebook||"",
            shareTwitter: blog.object.metadata.twitter||""
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
                authorName: blog.metadata.select_author.title||"",
                authorLink: blog.metadata.select_author.metadata.author_link||"",
                authorProfileImageUrl: blog.metadata.select_author.metadata.profile_picture.url||"",
                authorBio: blog.metadata.select_author.metadata.author_bio||""
            }
            blogs.push(obj);
        }
        return blogs;
    }
}
