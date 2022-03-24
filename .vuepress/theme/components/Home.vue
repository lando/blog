<template>
  <div class="home-wrapper">
    <main class="home">
      <img src="/images/Planet.svg" />
      <h1>Blog</h1>
      <div class="tagline">
        We share things about tech, DevOps, workflows and doing the developments because it makes other developers' lives easier.
      </div>
      <div class="home-content">
        <TagPage :pages="filteredContent" />
        <div class="home-rightbar-wrapper">
          <div class="home-rightbar">
            <h3>Topics</h3>
            <div
              v-if="frontpageTags.length > 0"
              class="topic-list"
            >
              <a
                v-for="tag in frontpageTags"
                :key="tag.key"
                class="topic-link"
                :class="{active: tag.name === filter}"
                @click="filterContent(tag.name)"
              >
                {{ tag.tag }}
              </a>
            </div>
            <h3>Search</h3>
            <NavbarSearch />
          </div>
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
const {content, frontpageTags} = siteData.value;

const filter = ref(null);
const filteredContent = computed(() => {
  if (filter.value) {
    return content.filter(page => page.tags.includes(filter.value));
  } else {
    return content;
  }
});

const filterContent = tag => {
  if (filter.value === tag) filter.value = null;
  else filter.value = tag;
};
</script>

<style lang="scss">
@import './node_modules/@lando/vuepress-theme-default-plus/styles/main.scss';
  .blog-home {
    .home {
    width: var(--homepage-width);
    h1 {
      margin-top: 1.125rem;
    }
    #main-title {
      display: none;
    }
    .tagline {
      font-size: 1.8em;
      letter-spacing: 0px;
      padding-bottom: 2em;
    }
    .home-content {
      display: flex;
      .tag-page {
        width: var(--content-width);
      }
      .home-rightbar {
        width: var(--rightbar-width);
        padding-top: 0;
        transition: transform var(--t-transform), background-color var(--t-color), border-color var(--t-color);
        width: var(--rightbar-width);
        margin-left: var(--rightbar-margin);
        padding-left: 0;
        position: sticky;
        top: var(--navbar-height);
        > * {
          margin-bottom: 1em;
        }
        h3 {
          padding-top: 0;
          margin-top: 0;
          font-size: 1.5rem;
        }
        .search-box {
          margin-left: 0;
          width: 100%;
          input {
            border-radius: 42px;
            border: 2px solid #BDB6C2;
            width: 13rem;
          }
        }
        .topic-link {
          cursor: pointer;
          color: var(--c-text-lightest);
          display: block;
          font-size: 1.25rem;
          margin-bottom: .625rem;
          text-transform: capitalize;
          &.active {
            text-decoration: underline;
            color: var(--c-brand-light);
          }
        }
      }
    }
  }
}

@media (max-width: 1000px) {
  .blog-home {
    .home-content {
      .home-rightbar {
        display: none;
      }
    }
    .read-mode {
      .page-wrapper-outer {
        padding-top: 0;
        padding-left: 0;
      }
    }
  }
}

@media (max-width: $MQNarrow) {
  .no-sidebar {
    &.blog-home {
      .page-wrapper-outer {
        display: block;
        padding: 2em;
      }
    }
  }
  .blog-home {
    .home {
      width: 100%;
      padding: 0;
    }
    .page-wrapper-inner {
      width: 100%;
      display: block;
    }
    .page {
      width: 100%;
    }
    .tag-page {
      width: 100%;
    }
  }
}
</style>
