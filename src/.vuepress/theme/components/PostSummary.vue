<template>
  <div id="post">
    <ul v-if="post.tags" class="post-meta-tags">
      <PostTag v-for="tag in post.tags" :class="tag" :key="tag" :tag="tag" />
    </ul>
    <div class="post-title">
      <NavLink :link="post.path">{{ post.title }}</NavLink>
    </div>

    <div class="post-meta">
      <PostHeader
        :name="post.frontmatter.author"
        :pic="post.frontmatter.pic"
        :link="post.frontmatter.link"
        :date="post.frontmatter.date"
      />
    </div>

    <p class="post-summary">
      {{ post.frontmatter.description || post.description || post.frontmatter.summary || post.summary  }}
    </p>

    <p class="read-more">
      <NavLink :link="post.path">Read More</NavLink>
    </p>

  </div>
</template>

<script>
import PostHeader from '@theme/components/PostHeader.vue';
import PostTag from '@theme/components/PostTag.vue';

export default {
  components: {PostHeader, PostTag},
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    resolvedTags() {
      console.log(this.post);
      if (!this.post.tags || Array.isArray(this.post.tags)) return this.post.tags;
      return [this.post.tags];
    },
  },
};
</script>

<style lang="stylus">
#post
  box-shadow: 0px 14px 40px rgba(73, 66, 78, 0.14)
  border-radius: 6px
  padding: 2.5rem
  margin-top: 1rem
  margin-bottom: 1rem
  a
    &:after
        content: none
  .post-title
    a
      font-size: 2rem
      color: $landoGrey
      font-weight: bold
      line-height: 1.5625em
  .post-meta
    font-size: 1.25rem
    color: #786F7E
    a
      font-weight: normal
      color: #786F7E
  .post-summary
    font-size: 1.25rem
  .read-more
    a
      color: $landoPink
      text-transform: uppercase
      font-weight: bold
      font-size: 1rem
      &:after
        content: url('/images/chevron-right.svg');
        position: relative;
        display: inline-flex;
        justify-content: center;
        background: none
        width: 40px
        padding: 2px 0px


</style>
