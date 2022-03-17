<template>
  <div v-if="url" class="video-responsive">
    <lazy-component tag="div">
      <iframe width="560" height="315" :src="url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </lazy-component>
  </div>
</template>

<script>

export default {
  name: 'YouTube',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="stylus">
.video-responsive
  margin-top 1em
  overflow hidden
  padding-bottom 56.25%
  position relative
  height 0
  iframe
    left 0
    top 0
    height 100%
    width 100%
    position absolute
</style>
