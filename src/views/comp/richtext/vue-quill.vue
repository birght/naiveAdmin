<template>
  <div>
    <p>{{ displayedText }}</p>
    <button @click="startDisplayingText">展示文字</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const fullText = ref('这是要逐字显示的文字。这里是第二句。');
      const displayedText = ref('');
      let currentIndex = 0;

      const startDisplayingText = () => {
        if (currentIndex >= fullText.value.length) return;

        const displayNextChar = () => {
          displayedText.value += fullText.value[currentIndex];
          currentIndex++;

          if (currentIndex < fullText.value.length) {
            const delay =
              fullText.value[currentIndex] === '，' || fullText.value[currentIndex] === '。'
                ? 400
                : 100; // 在标点符号处稍作停顿
            setTimeout(displayNextChar, delay);
          }
        };

        displayNextChar();
      };

      return {
        displayedText,
        startDisplayingText,
      };
    },
  });
</script>

<style scoped>
  p {
    font-family: 'Courier New', Courier, monospace;
    white-space: pre-wrap;
    font-size: 1.2em;
  }
</style>
