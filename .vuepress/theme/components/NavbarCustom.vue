<template>
  <header class="navbar">
    <div class="navbar-interior">
      <span class="logo-wrapper">
          <a
            :href="siteBrandLink"
            aria-current="page"
          >
            <NavbarBrandLogo />
          </a>
      </span>

      <div class="navbar-links-wrapper">
        <slot name="before" />
        <NavbarItems class="can-hide" />
        <slot name="after" />
      </div>

      <div class="navbar-links-right-wrapper">
        <ToggleColorModeButton v-if="enableColorModeSwitch" />
        <a
          href="https://github.com/sponsors/lando"
          class="donate btn btn-primary has-heart can-hide"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DonateHeart />
          Donate
        </a>
        <ToggleSidebarButtonCustom @toggle="$emit('toggle-sidebar')" />
      </div>
    </div>
  </header>
</template>

<script setup>
import {useRouteLocale, useSiteLocaleData, withBase, ClientOnly} from '@vuepress/client';
import {computed, h} from 'vue';
import {useThemeLocaleData, useDarkMode} from '@vuepress/theme-default/client';
import DonateHeart from './DonateHeart.vue';
import NavbarItems from '@vuepress/theme-default/components/NavbarItems.vue';
import ToggleSidebarButtonCustom from './ToggleSidebarButtonCustom.vue';
import ToggleColorModeButton from '@theme/ToggleColorModeButton.vue';

defineEmits(['toggle-sidebar']);

const enableColorModeSwitch = computed(() => themeLocale.value.colorModeSwitch);

const routeLocale = useRouteLocale();
const siteLocale = useSiteLocaleData();
const themeLocale = useThemeLocaleData();
const isDarkMode = useDarkMode();

const siteBrandLink = computed(
  () => themeLocale.value.home || routeLocale.value,
);
const navbarBrandLogo = computed(() => {
  if (isDarkMode.value && themeLocale.value.logoDark !== undefined) {
    return themeLocale.value.logoDark;
  }
  return themeLocale.value.logo;
});
const navbarBrandTitle = computed(() => siteLocale.value.title);

const NavbarBrandLogo = () => {
  if (!navbarBrandLogo.value) return null;
  let img = h('img', {
    class: 'logo',
    src: withBase(navbarBrandLogo.value),
    alt: navbarBrandTitle.value,
  });
  if (themeLocale.value.logoDark === undefined) {
    return img;
  }
  // wrap brand logo with <ClientOnly> to avoid ssr-mismatch
  // when using a different brand logo in dark mode
  return h(ClientOnly, img);
};
</script>

<style lang="scss">
@import '../styles/main.scss';
  .theme-container {
    .navbar {
    position: relative;
    background: inherit;
    border-bottom: none;
    display: flex;
    padding: 1.25rem 0 0 0;
    max-width: var(--total-width);
    margin: auto;
    z-index: 200;
    font-size: 1.375rem;
    .logo-wrapper {
      width: 173px;
    }
    .logo    {
      margin-right: 3.8125rem;
    }
    .navbar-interior {
      width: var(--total-width);
      display: flex;
      align-items: center;
      .navbar-links-wrapper, .navbar-links-right-wrapper {
        align-items: center;
        display: inline-flex;
        margin-left: 3rem;
        position: static;
        min-width: 0;
        // Should probably make our own navbar-links and do this there.
        .navbar-items {
          .navbar-item {
            font-size: 1rem;
          }
        }
      }
      .navbar-links-wrapper {
        flex: 1 1 auto;
      }
      .navbar-links-right-wrapper {
        flex: 0 0 auto;
        justify-content: flex-end;
      }
      .toggle-color-mode-button {
        margin: 0px 1rem;
        align-self: center;
      }
      .toggle-sidebar-button {
        position: static;
        padding: .3rem 1.25rem;
      }
    }
  }
}

@media (max-width: $MQNarrow) {
  .navbar {
    padding: 2rem;
    .can-hide,
    .navbar-links-wrapper {
      display: none;
    }
    .logo-wrapper {
      a {
        position: relative;
        padding-left: 1em;
      }
    }
    .toggle-sidebar-button {
      display: block;
      .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
        background-color: var(--c-text);
        :hover {
          background-color: var(--c-brand);
        }
      }
    }
    .sidebar {
      top: 0 !important;
    }

  }
  .donate {
    display: none !important;
  }
}

@media (max-width: $MQMobileNarrow) {
  .navbar .navbar-interior .navbar-links-right-wrapper, .navbar .navbar-interior .navbar-links-wrapper {
    margin-left: 0rem;
  }
}
</style>
