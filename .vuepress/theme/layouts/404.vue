<template>
  <main class="not-found-page" aria-labelledby="not-found-title">
    <section class="not-found-content">
      <div class="not-found-visual">
        <NotFoundVisual class="not-found-planet" aria-hidden="true" />
        <h1 id="not-found-title">404</h1>
      </div>

      <p class="not-found-quip">Looks like this route got yeeted into <code>/dev/null</code>.</p>
      <p class="not-found-copy">
        While we rebuild the hyperspace lane, you can head back to the blog or support the free developer tools that keep Lando orbiting.
      </p>

      <div class="not-found-actions">
        <a
          href="https://github.com/sponsors/lando"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary has-heart"
        >
          <DonateHeart />
          Donate
        </a>
        <a :href="homeLink" class="not-found-home">{{ homeText }}</a>
      </div>
    </section>
  </main>
</template>

<script setup>
import {computed} from 'vue';
import {useRouteLocale} from '@vuepress/client';
import {useThemeLocaleData} from '@vuepress/theme-default/client';

import DonateHeart from '../components/DonateHeart.vue';
import NotFoundVisual from '../components/NotFoundVisual.vue';

const routeLocale = useRouteLocale();
const themeLocale = useThemeLocaleData();
const homeLink = computed(() => themeLocale.value.home ?? routeLocale.value);
const homeText = computed(() => themeLocale.value.backToHome ?? 'Back to blog');
</script>

<style lang="scss">
@import '../styles/main.scss';
</style>

<style scoped lang="scss">
@import '../styles/palette.scss';

.not-found-page {
  --not-found-star: #ffffff;
  align-items: center;
  background:
    radial-gradient(70% 78% at 50% 16%, rgba(121, 73, 147, .42) 0%, rgba(38, 29, 45, 0) 60%),
    radial-gradient(90% 80% at 90% 10%, rgba(65, 43, 107, .5) 0%, var(--c-bg) 65%);
  box-sizing: border-box;
  color: var(--c-text-lightest);
  display: flex;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  padding: 4.5rem 1.5rem 5.5rem;
  text-align: center;
}

.not-found-content {
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 980px;
  position: relative;
  width: 100%;
}

.not-found-visual {
  align-items: center;
  display: grid;
  justify-items: center;
  margin: 0 auto 1.75rem;
  min-height: clamp(260px, 48vw, 520px);
  position: relative;
  width: min(760px, 100%);
}

.not-found-planet {
  filter: drop-shadow(0 28px 70px rgba(31, 22, 41, .58));
  opacity: .78;
  position: absolute;
  width: clamp(320px, 70vw, 690px);
  z-index: 0;
}

h1 {
  color: #fff;
  font-size: clamp(7.5rem, 24vw, 18rem);
  font-weight: 800;
  letter-spacing: 0;
  line-height: .78;
  margin: 0;
  position: relative;
  text-shadow: 0 18px 46px rgba(31, 22, 41, .72);
  z-index: 1;
}

.not-found-quip {
  color: #fff;
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 800;
  line-height: 1.25;
  margin: 0 0 1rem;
  max-width: 760px;

  code {
    background: rgba(255, 255, 255, .12);
    border-radius: 6px;
    color: #DEDB8E;
    font-size: .82em;
    padding: .1em .35em;
  }
}

.not-found-copy {
  color: var(--c-text);
  font-size: clamp(1.05rem, 2vw, 1.28rem);
  line-height: 1.55;
  margin: 0 auto 2rem;
  max-width: 720px;
}

.not-found-actions {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.25rem;
  justify-content: center;

  .btn {
    min-width: 148px;
  }
}

.not-found-home {
  color: #fff;
  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  text-underline-offset: .25em;

  &:hover {
    color: var(--c-brand-light);
  }
}

html:not(.dark) {
  .not-found-page {
    --not-found-star: #794993;
    background:
      radial-gradient(70% 78% at 50% 16%, rgba(221, 63, 143, .22) 0%, rgba(238, 237, 239, 0) 62%),
      radial-gradient(90% 80% at 90% 10%, rgba(67, 217, 255, .2) 0%, var(--c-bg) 65%);
  }

  .not-found-planet {
    filter: drop-shadow(0 24px 62px rgba(73, 66, 78, .24));
    opacity: .84;
  }

  h1,
  .not-found-quip,
  .not-found-home {
    color: $spaceBlack;
  }

  h1 {
    text-shadow: 0 18px 46px rgba(121, 73, 147, .25);
  }

  .not-found-quip code {
    background: rgba(121, 73, 147, .12);
    color: $galaxyPurple;
  }
}

@media (max-width: $MQMobile) {
  .not-found-page {
    padding: 3rem 1rem 4rem;
  }

  .not-found-visual {
    margin-bottom: 1.25rem;
    min-height: clamp(230px, 70vw, 360px);
  }

  .not-found-planet {
    width: clamp(300px, 98vw, 420px);
  }
}
</style>
