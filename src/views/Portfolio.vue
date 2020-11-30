<template>
    <portfolio-section></portfolio-section>
</template>

<script>
    import portfolioSection from "../components/portfolio-section";
    import portfolioService from "../resources/portfolio-service";
    export default {
        name: 'portfolio-page',
        data() {
            return {
                portfolioItems: []
            }
        },
        async mounted() {
            this.portfolioItems = await portfolioService.getAllPortfolioItems()
        },

        components: {
            portfolioSection
        }
    }
</script>
