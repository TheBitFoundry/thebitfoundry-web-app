<template>
    <div>
        <portfolio-filter></portfolio-filter>
    </div>
    <!-- <portfolio-section
            v-bind:projects="portfolioItems"
            v-bind:projectTags="portfolioTags">
    </portfolio-section> -->
</template>

<script>
    // import portfolioSection from "../components/portfolio-section";
    // import PortfolioSection from '../components/portfolio-section.vue';
    // import portfolioService from "../resources/portfolio-service";
    import portfolioFilter from "../components/portfolio-filter";
    import StyleServices from "./../resources/style-service";

    export default {
        name: 'portfolio-page',
        data() {
            return {
                portfolioItems: [],
                portfolioTags: []
            }
            
        },
        // async mounted() {
        //     this.portfolioItems = await portfolioService.getAllPortfolioItems();
        //     this.portfolioTags = await portfolioService.getAllPortfolioTags();
        // },

        components: {
            portfolioFilter,
        },
        mounted () {
            StyleServices.applyStyling();
        }
    }

</script>
