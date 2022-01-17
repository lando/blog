<template>
  <div class="written-by">
    <a :href="link" target="_blank"><img :src="pic" :alt="name" /></a>
    <a :href="link" target="_blank">{{ name }}</a>
    | {{ resolvedDate }}
  </div>
</template>

<script>
import dayjs from 'dayjs';
import {ClockIcon, NavigationIcon} from 'vue-feather-icons';

export default {
  components: {ClockIcon, NavigationIcon},
  name: 'PostHeader',
  props: {
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
.written-by
  font-size: 1.25em
  padding-bottom: 1.8125rem
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
</style>
