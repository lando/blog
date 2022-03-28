<template>
  <div class="tag-page-summary-card-outer">
    <RouterLink
      :to="props.page.path"
      class="tag-page-title"
    >
      <div class="tag-page-summary-card">
        <h2>{{ title }}</h2>
        <div class="tag-page-attribution">
          <div class="authors">
            <span
              v-for="author in authors"
              :key="author.pic"
              class="pic"
            >
              <a
                :href="author.link"
                target="_blank"
              ><img
                width="32"
                height="32"
                :src="author.pic"
                :alt="author.name"
                class="custom"
              ></a>
            </span>

            <span
              v-for="author in authors"
              :key="author.pic"
              class="author"
            >
              <a
                :href="author.link"
                target="_blank"
              >{{ author.name }}{{ author.separator }}</a>
            </span>
          </div>

          <div
            class="date"
          >
            | {{ date }}
          </div>
        </div>
        <div
          class="tag-page-summary"
        >
          {{ summary }}
        </div>
        <a
          class="read-more"
          :href="props.page.path"
        >
          Read More
        </a>
      </div>
    </RouterLink>
  </div>
</template>

<script setup>
import blueimpMd5 from 'blueimp-md5';
import {RouterLink} from 'vue-router';
import {computed} from 'vue';

const props = defineProps({
  page: {
    type: Object,
    required: true,
  },
});

// Normalize page input
const title = computed(() => props.page.title);
const summary = computed(() => props.page.summary);
const date = computed(() => {
  const updatedDate = new Date(props.page.timestamp);
  const abbrevDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${abbrevDays[updatedDate.getDay()]}, ${months[updatedDate.getMonth()]} ${updatedDate.getDate()}, ${updatedDate.getFullYear()}`;
});
const authors = computed(() => {
  const people = (props.page.authors || props.page.contributors)
    .map(person => {
      if (!person.pic && person.email) {
        const gravatarUrl = new URL('https://gravatar.com/avatar/');
        gravatarUrl.pathname += blueimpMd5(person.email);
        gravatarUrl.search = new URLSearchParams({size: 60});
        person.pic = gravatarUrl.toString();
      }
      if (!person.link && person.email) {
        person.link = `mailto:${person.email}`;
      }
      person.alt = `Picture of ${person.name}`;
      person.title = person.name;
      person.separator = ',';
      return person;
    });
  const lastPerson = people[people.length - 1];
  lastPerson.separator = '';
  return people;
});
</script>

<style lang="scss" scoped>
@import '../styles/main.scss';
.tag-page-summary-card-outer {
  box-shadow: 0px 14px 40px rgba(73,66,78,0.14);
  border-radius: 6px;
  padding: 2.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  a {
    color: var(--c-text-light);
  }
  .tag-page-summary-card {
    h2 {
      border: 0;
    }
    &:hover {
      transition: all 0.2s;
    }
    .tag-page-summary {
      padding-top: 2.8125rem;
      padding-bottom: 2rem;
      line-height: 1.7;
      opacity: .86;
      font-size: 1.25rem;
      color: $landoGrey;
      font-weight: 400;
    }
    .tag-page-attribution {
      padding: 0 18px;
      display: flex;
      align-items: center;
      gap: .5rem;
      color: $quotedText;
      font-size: 1.5625rem;
      font-weight: 400;
      .authors {
        display: flex;
        align-items: center;
        .author {
          margin-right: 5px;
          a {
            color: $quotedText;
            font-weight: 400;
          }
        }
        .pic {
          margin-right: 8px;
          a {
            display: flex;
            img {
              margin-left: -19px;
              border-radius: 50% !important;
              max-width: initial;
            }

          }
        }
      }
    }
    .read-more {
      color: $electricPink;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1rem;
      display: flex;
      align-items: center;
      &:after {
        content: url("/images/chevron-right.svg");
        position: relative;
        top: 1px;
        display: inline-flex;
        justify-content: center;
        background: none;
        width: 40px;
        padding: 2px 0px;
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .tag-page-summary-card-outer {
    padding: 1.5rem 2rem;
    h2 {
      margin-top: 1rem;
    }
    .tag-page-summary-card {
      .tag-page-summary {
        padding-top: 1.8125rem;
      }
      .tag-page-attribution {
        font-size: 1rem;
      }
    }
  }
}
</style>
