<template>
    <portfolio-section
            v-bind:projects="portfolioItems"
            v-bind:projectTags="portfolioTags">
    </portfolio-section>
</template>

<script>
    import portfolioSection from "../components/portfolio-section";
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
            portfolioSection
        }
    }
</script>
