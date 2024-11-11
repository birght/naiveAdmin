<template>
  <div class="p-6 py-4 ste1_bg flex gap-4">
    <n-card
      title="药品"
      bordered
      hoverable
      class="rounded-lg border-2"
      @click="selectCard(1)"
      :class="{ 'border-indigo-600': selectedCard === 1 }"
    >
      <template #default>
        <div class="flex items-center justify-between">
          <img :src="coverImageRef1" class="imgsize" />
          <span v-if="selectedCard === 1" class="selected-state">
            <n-icon size="24" color="#092a80">
              <Checkbox />
            </n-icon>
          </span>
        </div>
      </template>
    </n-card>
    <n-card
      title="化妆品"
      bordered
      hoverable
      class="rounded-lg border-2"
      @click="selectCard(2)"
      :class="{ 'border-indigo-600': selectedCard === 2 }"
    >
      <template #default>
        <div class="flex items-center justify-between">
          <img :src="coverImageRef2" class="imgsize" />
          <span v-if="selectedCard === 2" class="selected-state">
            <n-icon size="24" color="#092a80">
              <Checkbox />
            </n-icon>
          </span>
        </div>
      </template>
    </n-card>
    <n-card
      title="医疗器械"
      bordered
      hoverable
      class="rounded-lg border-2"
      @click="selectCard(3)"
      :class="{ 'border-indigo-600': selectedCard === 3 }"
    >
      <template #default>
        <div class="flex items-center justify-between">
          <img :src="coverImageRef3" class="imgsize" />
          <span v-if="selectedCard === 3" class="selected-state">
            <n-icon size="24" color="#092a80">
              <Checkbox />
            </n-icon>
          </span>
        </div>
      </template>
    </n-card>
  </div>
</template>

<script setup lang="ts">
  import { ref, defineEmits } from 'vue';
  import coverImage1 from '@/assets/icons/yaopin.png';
  import coverImage2 from '@/assets/icons/huazhuangpin.png';
  import coverImage3 from '@/assets/icons/yiliaoqixie.png';
  import { Checkbox } from '@vicons/ionicons5';

  const emit = defineEmits(['nextStep']);
  const coverImageRef1 = ref(coverImage1);
  const coverImageRef2 = ref(coverImage2);
  const coverImageRef3 = ref(coverImage3);

  const selectedCard = ref(1); // 默认选中第一个卡片

  const selectCard = (cardIndex: number) => {
    selectedCard.value = cardIndex;
  };
</script>

<style lang="less" scoped>
  .ste1_bg {
    border-radius: 4px;
    background: #f0f2f5;
  }

  .imgsize {
    width: 100px;
    height: 100px;
  }

  .selected {
    border: 2px solid #224376;
  }

  .selected-state {
    font-weight: bold;
  }
</style>
