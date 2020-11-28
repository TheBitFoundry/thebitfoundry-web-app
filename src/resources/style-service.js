export default {
    styleRoutes: [{
        routeSlug: "creative-services",
        theme: "theme-light-blue"
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
