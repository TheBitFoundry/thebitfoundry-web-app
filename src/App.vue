<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <router-view/>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
  import HeaderComponent from "@/components/header-component.vue";
  import FooterComponent from "@/components/footer-component.vue";
  //
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>

<style lang="scss">

</style>
