<template>
  <div>
    <!-- <Slider></Slider> -->
    <!-- <VideoComponent></VideoComponent> -->
    <!-- <BlogSection></BlogSection> -->
    <!-- <Skills></Skills> -->
    <Portfolio></Portfolio>
    <ServicesTechnical></ServiceTechnical>
    <ServicesCreative></ServicesCreative>
    <Partner></Partner>
    <!-- <Contact></Contact> -->
  </div>
</template>

<script>
  // import Slider from "@/components/slider.vue";
  // import Skills from "@/components/skills.vue";
  // import VideoComponent from "@/components/video-component.vue";
  // import Portfolio from "@/components/portfolio.vue";
  import ServicesTechnical from "@/components/services-technical.vue";
  import ServicesCreative from "@/components/services-creative.vue";
  import Partner from "@/components/partner.vue";
  // import Contact from "@/components/contact.vue";
  import BlogSection from "@/components/blog-section.vue";
  //
  export default {
    name: 'Services',
    components: {
      // Slider,
      // Skills,
      // VideoComponent,
      // Portfolio,
      // FoundryCards,
      ServicesTechnical,
      ServicesCreative,
      Partner,
      // Contact,
      BlogSection
    }
  };
</script>
