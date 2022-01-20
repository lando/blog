<template>
  <ul v-if="tags" class="post-tags">
    <PostTag v-for="tag in resolvedTags" :class="tag" :key="tag" :tag="tag" />
  </ul>
</template>

<script>
import PostTag from '@theme/components/PostTag.vue';

export default {
  components: {PostTag},
  name: 'PostFooter',
  props: {
    original: {
      type: String,
      default: '',
    },
    tags: {
      type: [Array, String],
    },
  },
  computed: {
    resolvedTags() {
      if (!this.tags || Array.isArray(this.tags)) return this.tags;
      return [this.tags];
    },
  },
};
</script>

<style lang="stylus">
.post-tags
  list-style none
  margin 0rem

  .post-tag
    a
      background none
      border 1px solid #776F7D
      border-radius 4px
      &:after, &:before
        background none
        box-shadow none
        border none

</style>
