<template>
  <div>
    <Slider></Slider>
    <!-- <VideoComponent></VideoComponent> -->
    <Skills></Skills>
    <RecentProjectsStatic></RecentProjectsStatic>
    <FoundryCards></FoundryCards>
    <Partner></Partner>
    <BlogSection></BlogSection>
    <!-- <Contact></Contact> -->
  </div>
</template>

<script>
  import Slider from "@/components/slider.vue";
  import Skills from "@/components/skills.vue";
  // import VideoComponent from "@/components/video-component.vue";
  // import Portfolio from "@/components/portfolio.vue";
  import FoundryCards from "@/components/foundry-cards.vue";
  import Partner from "@/components/partner.vue";
  // import Contact from "@/components/contact.vue";
  import BlogSection from "@/components/blog-section.vue";
  import styleService from "@/resources/style-service";
  import RecentProjectsStatic from "@/components/recent-projects-static.vue";
  //
  export default {
    name: 'Home',
    components: {
      Slider,
      Skills,
      // VideoComponent,
      // Portfolio,
      FoundryCards,
      Partner,
      // Contact,
      BlogSection,
      RecentProjectsStatic,
    },
    mounted() {
      styleService.applyStyling();
    }
  };
</script>
