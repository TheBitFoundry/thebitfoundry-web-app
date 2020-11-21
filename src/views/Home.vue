<template>
  <div>
    <Slider></Slider>
    <VideoComponent></VideoComponent>
    <BlogSection></BlogSection>
    <Skills></Skills>
    <Portfolio></Portfolio>
    <Services></Services>
    <Partner></Partner>
    <Contact></Contact>
  </div>
</template>

<script>
  import Slider from "@/components/slider-component.vue";
  import Skills from "@/components/slider.vue";
  import VideoComponent from "@/components/video-component.vue";
  import Portfolio from "@/components/portfolio.vue";
  import Services from "@/components/services.vue";
  import Partner from "@/components/partner.vue";
  import Contact from "@/components/contact.vue";
  import BlogSection from "@/components/blog-section.vue";
  //
  export default {
    name: 'Home',
    components: {
      Slider,
      Skills,
      VideoComponent,
      Portfolio,
      Services,
      Partner,
      Contact,
      BlogSection
    }
  };
</script>
