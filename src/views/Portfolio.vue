<template>
    <portfolio-section-static></portfolio-section-static>
    <!-- <portfolio-section
            v-bind:projects="portfolioItems"
            v-bind:projectTags="portfolioTags">
    </portfolio-section> -->
</template>

<script>
    // import portfolioSection from "../components/portfolio-section";
import PortfolioSectionStatic from '../components/portfolio-section-static.vue';
// import PortfolioSection from '../components/portfolio-section.vue';
    import portfolioService from "../resources/portfolio-service";
    export default {
        name: 'portfolio-page',
        data() {
            return {
                portfolioItems: [],
                portfolioTags: []
            }
        },
        async mounted() {
            this.portfolioItems = await portfolioService.getAllPortfolioItems();
            this.portfolioTags = await portfolioService.getAllPortfolioTags();
        },

        components: {
            PortfolioSectionStatic,
        }
    }
</script>
