import helper from "./index";
import axios from "axios";

export default {
    getAllPortfolioItems: async function(count) {
        let portfolioLink = helper.allPortfolioItemsResourceLink(count||20);
        let response;
        let projectItems = [];

        try {
            let axiosResponse = await axios.get(portfolioLink);
            response = axiosResponse.data;
        } catch (error) {
            console.log("error", error)
        }

        for(let item of response.objects) {
            console.log("portfolio service", item)
            let obj = {
                title: item.title||"",
                content: item.content||"",
                imageUrl: item.metadata.titlecard.url||"",
                excerpt: item.metadata.excerpt||"",
                projectTags: item.metadata.select_project_tags||"",
            }
            projectItems.push(obj);
        }
        return projectItems;
    },
    getSinglePortfolioItem: async function() {

    },
    getAllPortfolioTags: async function() {
        let portfolioTagsLink = helper.allPortfolioItemsResourceLink();
        let response;
        let projectTags = [];

        try {
            let axiosResponse = await axios.get(portfolioTagsLink);
            response = axiosResponse.data;
        } catch (error) {
            console.log("error", error)
        }

        for(let item of response.objects) {
            console.log("portfolio service", item)
            let obj = {
                title: item.title||"",
                content: item.content||"",
                imageUrl: item.metadata.titlecard.url||"",
                excerpt: item.metadata.excerpt||"",
                projectTags: item.metadata.select_project_tags||"",
            }
            projectTags.push(obj);
        }
        return projectTags;
    }
}
