export default {
    name: 'styleService',
    styleRoutes: [
        {
            routeSlug: "agape-luxury",
            theme: "theme-white"
        },
        {
            routeSlug: "creative-services",
            theme: "theme-light-blue"
        },
        {
            routeSlug: "creative-foundry",
            theme: "theme-light-blue"
        },
        {
            routeSlug: "aerotechnical-foundry",
            theme: "theme-blue"
        },
        {
            routeSlug: "clean-tech-foundry",
            theme: "theme-yellow"
        },
        {
            routeSlug: "blockchain-foundry",
            theme: "theme-orange"
        },
        {
            routeSlug: "scale-up-foundry",
            theme: "theme-pink"
        },
        {
            routeSlug: "portfolio",
            theme: "theme-light-green"
        },
        {
            routeSlug: "", //home page.
            theme: "theme-light-green"
        }],
    applyStyling: function() {
        let lastUrlSegment = document.location.href
            .substring(document.location.href
                .lastIndexOf('/') + 1);

        console.log("Current Route:", lastUrlSegment);

        let foundryThemeCss = "css/theme-light-green.css";

        this.styleRoutes.forEach(f => {
            if(lastUrlSegment === f.routeSlug) {
                foundryThemeCss = `css/${f.theme}.css`;
            }
        });

        document.getElementById("theme-css")
            .setAttribute('href', foundryThemeCss);
    }
}
