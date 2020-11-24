import axios from "axios";
import resources from "./index";

export default {
    getFoundries: async function() {
        let foundries = [];
        let response = await axios.get(resources.allFoundriesResourceLink());
        console.log("FoundriesService", response);
        response.data.objects.forEach(f => {
            let obj = {
                slug: f.slug,
                title: f.title,
                link: f.metadata.foundry_router_link
            }
            foundries.push(obj);
        });
        return foundries;
    }
}
