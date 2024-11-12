<template>
  <div>
    <n-card :bordered="false" class="mt-4 proCard">
      <n-space vertical class="steps" justify="center">
        <n-steps :current="currentTab" :status="currentStatus">
          <n-step title="选择审核类别" description="请选择其中一项" />
          <n-step title="审核模板" description="选择具体审核模板" />
          <n-step title="结果查看" />
        </n-steps>
        <step1 v-if="currentTab === 1" @next-step="nextStep" />
        <step2 v-if="currentTab === 2" @next-step="nextStep" @prev-step="prevStep" />
        <step3 v-if="currentTab === 3" @prev-step="prevStep" @finish="finish" />
      </n-space>
    </n-card>
    <div style="margin-left: 12%">
      <n-space v-if="currentTab === 1">
        <n-button type="primary" @click="nextStep">下一步</n-button>
      </n-space>
      <n-space v-if="currentTab === 2">
        <n-button type="primary" @click="nextStep">下一步</n-button>
        <n-button type="default" @click="prevStep">上一步</n-button>
      </n-space>
      <n-space v-if="currentTab === 3">
        <n-button type="primary" @click="finish">完成</n-button>
      </n-space>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import step1 from './Step1.vue';
  import step2 from './Step2.vue';
  import step3 from './Step3.vue';

  const currentTab = ref(1);
  const currentStatus = ref('process');

  function nextStep() {
    if (currentTab.value < 3) {
      currentTab.value += 1;
    }
  }

  function prevStep() {
    if (currentTab.value > 1) {
      currentTab.value -= 1;
    }
  }

  function finish() {
    currentTab.value = 1;
  }
</script>

<style lang="less" scoped>
  .steps {
    max-width: 80%;
    margin: 16px auto;
  }
</style>
