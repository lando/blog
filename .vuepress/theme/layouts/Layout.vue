<template>
  <ParentLayout>
    <template #footer>
      <Footer />
    </template>
  </ParentLayout>
</template>

<script setup>
import ParentLayout from '@lando/vuepress-theme-default-plus/layouts/Layout.vue';
import Footer from './../components/Footer.vue';
</script>

<style lang="scss">
@import '../styles/main.scss';
.page-wrapper-outer {
  padding-top: 3em;
}

</style>
