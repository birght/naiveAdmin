<template>
  <div class="p-6 py-4 ste1_bg flex gap-4">
    <n-card
      v-for="(item, index) in yearData"
      :key="index"
      :title="item.title"
      bordered
      hoverable
      class="rounded-lg border-2 wordcc"
      @click="selectCard(index)"
      :class="{ 'border-indigo-600': selectedCard === index }"
    >
      <template #default>
        <div class="flex items-center justify-between">
          <img :src="coverImageRef1" class="imgsize" />
          <span v-if="selectedCard === index" class="selected-state">
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
  import coverImage1 from '@/assets/icons/word.svg';
  import { Checkbox } from '@vicons/ionicons5';

  const emit = defineEmits(['nextStep']);
  const coverImageRef1 = ref(coverImage1);

  const yearData = ref([
    { title: '2021年药品使用总体情况' },
    { title: '2021年药品审核情况' },
    { title: '2022年药品使用总体情况' },
    { title: '2022年药品审核情况' },
    { title: '2023年药品使用总体情况' },
    { title: '2023年药品审核情况' },
    { title: '2024年药品使用总体情况' },
    { title: '2024年药品审核情况' },
  ]);

  const selectedCard = ref<number | null>(null);
  const selectCard = (cardIndex: number) => {
    selectedCard.value = cardIndex;
  };
</script>

<style lang="less" scoped>
  .ste1_bg {
    border-radius: 4px;
    background: #f0f2f5;
    overflow-x: auto;
    display: inline-flex;
    gap: 4px;
    white-space: nowrap;
  }
  .wordcc {
    width: 300px;
    flex-shrink: 0;
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
