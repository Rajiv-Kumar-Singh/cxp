<template>
  <div class="code">
    <div class="code__container">
      <div class="code__box">
        <h2>HTML / JSX</h2>
        <pre>
        <code :class="(codeData.htmlSyntax) ? 'language-html' : 'language-jsx'">
        {{codeData.htmlCode}}
        </code>
      </pre>
      </div>

      <!-- CSS Code Box -->
      <div class="code__box">
        <h2>CSS Code</h2>
        <pre>
        <code class="language-css">
          {{codeData.cssCode}}
        </code>
        </pre>
      </div>
      <!-- CSS code box end   -->

      <!-- <div class="code__download">
        <a
          href="https://drive.google.com/file/d/1HUO7-w9by8PHKAcefupbHJWUr7nLLhwC/view?usp=share_link"
          download="3DSphere"
          >Download Code</a
        >
      </div> -->
    </div>
  </div>
</template>

<script>
import Prism from '~/plugins/prism';
import 'prismjs/components/prism-jsx';

export default {
  name: 'Code',
  props: {
    codeData: {
      type: Object,
    },
  },
  mounted() {
    Prism.highlightAll();
  },
};
</script>

<style lang="scss" scoped>
.code {
  position: relative;
  top: 0;
  padding: 0 2%;
  color: #ffffff;
  margin-bottom: 5em;

  &__box {
    margin-top: 2em;
    width: 50%;
    h2 {
      font-family: 'Righteous', cursive;
      font-size: 1.33em;
      font-weight: 400;
      padding: 0.5em 0;
    }
    pre {
      width: 100%;
      height: 38em;
      border-radius: 0.2em;
      overflow: scroll;
      margin: 0;

      &::-webkit-scrollbar {
        height: 0.15em;
        width: 0.15em;
      }
      &::-webkit-scrollbar-track {
        background: #203258;
      }

      &::-webkit-scrollbar-thumb {
        background: #203258;
      }

      &::-webkit-scrollbar-thumb:horizontal {
        background: linear-gradient(to right, #d90ae8, #e96443);
        border-radius: 0.625em;
      }
      &::-webkit-scrollbar-thumb:vertical {
        background: linear-gradient(to bottom, #d90ae8, #e96443);
        border-radius: 0.625em;
      }
    }
  }

  @media screen and (max-width: 768px) {
    &__box {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    &__box {
      pre {
        min-width: 32em;
      }
    }
  }
}
</style>
