<template>
  <div>
    <TeamSlider></TeamSlider>
    <TeamCards></TeamCards>
    <FunFacts></FunFacts>
    <StackFilterStatic></StackFilterStatic>
    <!-- <VideoComponent></VideoComponent> -->
    <!-- <FoundryCards></FoundryCards>
    <Skills></Skills>
    <RecentProjectsStatic></RecentProjectsStatic>
    <Partner></Partner> -->
    <!-- <BlogSection></BlogSection> -->
    <!-- <Contact></Contact> -->
  </div>
</template>

<script>
import TeamSlider from "@/components/team-slider.vue";
import TeamCards from "@/components/team-cards.vue";
import FunFacts from "@/components/fun-facts.vue";
  // import Slider from "@/components/slider.vue";
  // import Skills from "@/components/skills.vue";
  // import RecentProjectsStatic from "@/components/recent-projects-static.vue";
  // import VideoComponent from "@/components/video-component.vue";
  // import Portfolio from "@/components/portfolio.vue";
  // import FoundryCards from "@/components/foundry-cards.vue";
  // import Partner from "@/components/partner.vue";
  // import Contact from "@/components/contact.vue";
  // import BlogSection from "@/components/blog-section.vue";
  import styleService from "@/resources/style-service";
  import StackFilterStatic from '../components/stack-filter-static.vue';
  //
  export default {
    name: 'Team',
    components: {
      TeamSlider,
      TeamCards,
      FunFacts,
      StackFilterStatic
      // Skills,
      // VideoComponent,
      // Portfolio,
      // FoundryCards,
      // Partner,
      // Contact,
      // BlogSection,
      // RecentProjectsStatic,
    },
    mounted() {
      styleService.applyStyling();
    }
  };
</script>
