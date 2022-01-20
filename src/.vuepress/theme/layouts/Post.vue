<template>
  <div id="vuepress-theme-blog__post-layout" class="post-content">
    <PostHeader
      :title="$frontmatter.title"
      :name="$frontmatter.author"
      :pic="$frontmatter.pic"
      :link="$frontmatter.link"
      :date="$frontmatter.date"
      :location="$frontmatter.location"
    />
    <div class="vuepress-blog-theme-content">
      <div class="main-content">
        <CarbonAds />
        <Content />
        <hr />
        <Newsletter />
        <PostFooter
          :original="$frontmatter.original"
        />
      </div>
      <div class="sidebar">
        <Toc />
        <h2>Tags</h2>
        <PostTags
          :tags="$frontmatter.tags"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CarbonAds from '@theme/components/CarbonAds.vue';
import PostHeader from '@theme/components/PostHeader.vue';
import PostFooter from '@theme/components/PostFooter.vue';
import PostTags from '@theme/components/PostTags.vue';
import Toc from '../components/Toc.vue';

export default {
  components: {CarbonAds, PostHeader, PostFooter, Toc, PostTags}, // eslint-disable-line
  mounted() {
    console.log(this);
  },
};
</script>

<style lang="stylus">
.post-content
  .carbon-ads
    position: fixed
    max-height: 100vh
    max-width: 320px
    overflow-y: auto
    padding-top: 8em
    top: 0
    right: 10px
    box-sizing: border-box
    z-index: 0
  #special_sponsors
    opacity .8
    position: fixed
    padding-top: 8em
    top: 0
    left 0
    z-index: 0
  .vuepress-toc
    padding-top: 0rem
    margin-bottom: 2rem
    max-width: 295px
    width: 295px
    position static
    a:after
      background: none
  hr
    border-top: 1px dotted #ddd
  .custom-block
    &.caption
      background-color: #f8f8f8
      padding: .1em 1em
      color: $landoBlue
      font-size: .8em
      font-weight: 700
      font-family: Lexend
    &.thumbnail
      border: 1px dashed #ccc
      padding: 1em
.vuepress-blog-theme-content
  display: flex
  gap: 4.375rem
  font-size 16px
  letter-spacing 0px
  font-family Lexend
  color $textColor
  position relative
  .main-content
    flex-basis: 80%
  .sidebar
    position sticky
    top 2rem
    align-self flex-start
    h2
      margin: 0rem 1rem
@media (max-width: $MQSmall)
  .post-content
    .carbon-ads
      position: relative
      float: right
      padding: 2em
      max-height: 100vh
      max-width: 300px
      overflow-y: auto
      z-index: 0
      border: 1px solid lighten($landoGrey, 90%)
      margin: 2em
@media (max-width: $MQMobile)
  .vuepress-blog-theme-content
    padding-top 0
  .post-title
    margin-top 0
</style>
