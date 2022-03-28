<template>
  <div class="footer-cta">
    <h3>{{ heading }}</h3>
    <p>{{ text }}</p>
    <a :href="ctaLink" class="btn">{{ ctaText }}</a>
  </div>
</template>

<style lang="scss" scoped>
  @import '../styles/main.scss';
  .footer-cta {
    background: radial-gradient(102.17% 322.14% at -4.98% 92.25%, #DD3F8F 13.06%, #412B6B 100%);
    padding: 5.875rem;
    text-align: center;
    font-size: 1.25rem;
    color: $text-dark;
    h3 {
      font-size: 3rem;
      color: $text-dark;
    }
    p {
      color: $text-dark;
      margin: 0 auto 2rem auto;
      max-width: var(--content-width);
    }
    a.btn {
      color: var(--c-brand);
      font-weight: bold;
      text-transform: uppercase;
      background-color: $text-dark;
      &:after {
        content: url("/images/chevron-right.svg");
        margin-left: 1rem;
      }
    }
  }

  .sidebar .footer-cta {
    padding: 3rem 0rem;
    position: absolute;
    width: 100%;
    bottom: 0;
    font-size: 1rem;
    h3 {
      font-size: 1.5rem;
    }
    a {
      font-size: 1rem;
    }
  }

  @media (max-width: $MQNarrow) {
    .footer-cta {
      padding: 3rem 0rem;
      width: 100%;
      bottom: 0;
      font-size: 1rem;
      h3 {
        font-size: 1.5rem;
      }
      a {
        font-size: 1rem;
      }
    }
  }
</style>

<script>
export default {
  props: {
    heading: String,
    text: String,
    ctaText: String,
    ctaLink: String,
  },
};
</script>
