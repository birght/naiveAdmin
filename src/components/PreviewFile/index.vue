<!-- PdfViewer.vue -->
<template>
  <vue-office-pdf
    v-if="fileType === 'pdf'"
    :src="src"
    @rendered="renderedHandler"
    @error="errorHandler"
  />
  <vue-office-docx v-else :src="src" @rendered="renderedHandler" @error="errorHandler" />
</template>

<script setup>
  import { ref, defineProps } from 'vue';
  import VueOfficePdf from '@vue-office/pdf';
  import VueOfficeDocx from '@vue-office/docx';
  import '@vue-office/docx/lib/index.css';

  const props = defineProps({
    src: {
      type: String,
      required: true,
    },
    fileType: {
      type: String,
      required: true,
    },
  });
  function renderedHandler() {
    console.log('渲染完成');
  }

  function errorHandler() {
    console.log('渲染失败');
  }
</script>
