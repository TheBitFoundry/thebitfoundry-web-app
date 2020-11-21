import helper from "./index";
import axios from "axios";

export default {
    getSingleBlog() {
        let blogLink = helper.singleBlogResourceLink(helper.getSlug());
        let blog;
        let errors;

        axios.get(blogLink).then(
            response => {
                this.blog = response.data;
            }
        ).catch(e => {
            this.errors.push(e);
            console.log(errors);
        })

        return {
            title: blog.object.title,
            imageUrl: blog.object.metadata.titlecard.url,
            excerpt: blog.object.metadata.excerpt,
            categories: blog.object.metadata.categories,
            content: blog.object.content,
            slug: blog.object.slug
        }
    },
    getMultipleBlogs(count) {
        let blogsLink = helper.allBlogsResourceLink(count);
        let response;
        let blogs;
        let errors;

        axios.get(blogsLink).then(
            response => {
                this.response = response.data;
            }
        ).catch(e => {
            this.errors.push(e);
            console.log(errors);
        })

        for(let blog in response.objects) {
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
