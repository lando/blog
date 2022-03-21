<template>
  <div class="home-wrapper">
    <main class="home">
      <h1>Blog</h1>
      <div class="tagline">
        We share things about tech, DevOps, workflows and doing the developments because it makes other developers lives easier.
      </div>
      <div class="home-content">
        <TagPage :pages="filteredContent" />
        <div class="rightbar">
          <h3>Topics</h3>
          <div
            v-if="tags.length > 0"
            class="topic-list"
          >
            <a
              v-for="tag in tags"
              :key="tag.key"
              class="topic-link"
              @click="filterContent(tag.name)"
            >
              {{ tag.tag }}
            </a>
          </div>
          <h3>Search</h3>
          <NavbarSearch />
        </div>
      </div>
    </main>
    <div class="footer-wrapper">
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import {useSiteData} from '@vuepress/client';
import TagPage from '@lando/vuepress-theme-default-plus/plugins/plugin-simple-tags/TagPage.vue';

const siteData = useSiteData();
const {content, tags} = siteData.value;

const filter = ref(null);
const filteredContent = computed(() => {
  if (filter.value) {
    return content.filter(page => page.tags.includes(filter.value));
  } else {
    return content;
  }
});

const filterContent = tag => {
  filter.value = tag;
};
</script>

<style lang="scss">
@import './node_modules/@lando/vuepress-theme-default-plus/styles/main.scss';
.home {
  width: 900px;
  #main-title {
    display: none;
  }
}
.tagline {
  padding-top: 2em;
  padding-bottom: 2em;
  font-weight: 700;
  font-size: 1.5em;
}
.home-content {
  display: flex;
  .tag-page {
    width: var(--content-width);
  }
  .rightbar {
    width: var(--rightbar-width);
    padding-top: 0;
    h3 {
      padding-top: 0;
      margin-top: 0;
    }
    .search-box {
      margin-left: 0;
      width: 100%;
    }
    .topic-link {
      cursor: pointer;
      color: var(--c-brand-light);
      display: block;
    }
  }
}

@media (max-width: 1500px) {
.home-content
  .rightbar {
    display: none;
  }
  .read-mode {
    .page-wrapper-outer {
      padding-top: 0;
      padding-left: 0;
    }
  }
}
</style>
