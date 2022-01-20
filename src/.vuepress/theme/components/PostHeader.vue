<template> 
  <div class="post-header">
    <h1 class="post-title">{{ title }}</h1>
    <div class="written-by">
      <a :href="link" target="_blank"><img :src="pic" :alt="name" /></a>
      <a :href="link" target="_blank">{{ name }}</a>
      | {{ resolvedDate }}
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import {ClockIcon, NavigationIcon} from 'vue-feather-icons';

export default {
  components: {ClockIcon, NavigationIcon},
  name: 'PostHeader',
  props: {
    title: {
      type: String,
    },
    name: {
      type: String,
      default: 'Team Lando',
    },
    pic: {
      type: String,
      default: 'https://www.gravatar.com/avatar/db2470075fb67c330c155cab9698826f',
    },
    link: {
      type: String,
      default: 'https://twitter.com/devwithlando',
    },
    date: {
      type: String,
    },
  },
  computed: {
    resolvedDate() {
      return dayjs(this.date).format(
        this.$themeConfig.dateFormat || 'ddd, MMM DD, YYYY'
      );
    },
  },
};
</script>

<style lang="stylus">
.post-header
  margin-bottom: 5rem;
  .post-title
    padding-top 0
  .written-by
    color: $quotedText
    font-size: 1.25em
    img
      width: 32px
      border-radius: 100%
      float: left
      position: relative
      margin-right: .6875em
    svg
      width 14px
      height 14px
      color: lighten($landoBlue, 50%)
      position: relative
      top: 3px
      margin-left: 3px
      margin-right: 3px
    a
      font-weight: normal
      color: $quotedText
      &:after
        background: none
</style>
