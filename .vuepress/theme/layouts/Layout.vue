<template>
  <ParentLayout>
    <template #footer>
      <FooterCustom />
    </template>
  </ParentLayout>
</template>

<script setup>
import ParentLayout from '@lando/vuepress-theme-default-plus/layouts/Layout.vue';
import FooterCustom from './../components/FooterCustom.vue';
</script>

<style lang="scss">
@import '../styles/main.scss';
.page-wrapper-outer {
  padding-top: 3em;
}

</style>
