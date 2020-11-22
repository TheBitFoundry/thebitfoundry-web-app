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

        console.log("Things", blog);

        return {
            title: blog.object.title,
            imageUrl: blog.object.metadata.titlecard.url,
            excerpt: blog.object.metadata.excerpt,
            categories: blog.object.metadata.categories,
            content: blog.object.content,
            slug: blog.object.slug
        }
    },
    getMultipleBlogs: function(count) {
        let blogsLink = helper.allBlogsResourceLink(count);
        let response;
        let blogs;
        let errors;

        axios.get(blogsLink).then(
            response => {
                this.response = response.data;
                console.log(response.data);
            }
        ).catch(e => {
            this.errors.push(e);
            console.log(errors);
        })

        for(let blog of response.objects) {
            let obj = {
                title: blog.title,
                imageUrl: blog.metadata.titlecard.url,
                except: blog.metadata.excerpt,
                categories: blog.metadata.categories,
                content: blog.content,
                slug: blog.slug
            }
            this.blogs.push(obj);
        }

        return blogs;
    }
}
