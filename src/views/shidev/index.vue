<template>
  <div class="p-8 bg-slate-100 rounded-xl dark:bg-slate-800">
    <n-dropdown :options="options" class="custom-dropdown" @select="handleSelect">
      <n-button type="primary">
        <template #icon>
          <n-icon>
            <FileWordTwotone />
          </n-icon>
        </template>
        选择报告模板
      </n-button>
    </n-dropdown>
  </div>
  <div class="px-8 py-4 mt-4" v-if="showMark">
    <div class="flex justify-between p-2">
      <n-text>{{ selectModel }}</n-text>
      <div>
        <n-button type="primary"> 生成报告 </n-button>
      </div>
    </div>
    <div class="flex">
      <!-- <n-card class="w-2/4 no-pointer-events">
        <vue-office-docx :src="docx" style="height: 60vh" @rendered="rendered" />
      </n-card> -->
      <n-card style="height: 66vh; overflow-y: scroll">
        <n-tree
          block-line
          :data="treedata"
          cascade
          :default-expanded-keys="defaultExpandedKeys"
          expand-on-click
          checkable
        />
      </n-card>
    </div>
  </div>
  <div v-else>
    <n-card bordered hoverable class="border-2 rounded-lg wordcc">
      <template #default>
        <div class="flex items-center">
          <img :src="coverImageRef1" class="imgsize" />
          <div class="px-6">
            <n-steps :current="currentTab" :status="currentStatus">
              <n-step title="第一步" description="请选择模板" />
              <n-step title="第二步" description="选择数据目录" />
              <n-step title="生成报告" />
            </n-steps>
          </div>
        </div>
      </template>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import coverImage1 from '@/assets/icons/word.svg';

  // import VueOfficeDocx from '@vue-office/docx';
  //引入相关样式
  import '@vue-office/docx/lib/index.css';
  import { ref } from 'vue';
  import { NIcon } from 'naive-ui';
  import { FileWordTwotone } from '@vicons/antd';
  const coverImageRef1 = ref(coverImage1);
  const currentTab = ref(3);
  const currentStatus = ref('process');

  // let docx = '/fangan.docx';
  const showMark = ref(false);
  const options = [
    {
      type: 'group',
      label: '药品',
      key: 'main',
      children: [
        { label: '2021年药品使用情况报告', key: 'drug_usage' },
        { label: '2021药品审核结果', key: 'drug_review' },
        { label: '2021药品安全性评估', key: 'drug_safety' },
        { label: '2022年药品使用情况报告', key: 'drug_usage' },
        { label: '2022药品审核结果', key: 'drug_review' },
        { label: '2022药品安全性评估', key: 'drug_safety' },
      ],
    },
    {
      type: 'group',
      label: '化妆品',
      key: 'cosmetics',
      children: [
        { label: '2021年化妆品市场分析', key: 'cosmetic_market' },
        { label: '2021年化妆品成分审核', key: 'cosmetic_ingredients' },
        { label: '2021年化妆品安全评估', key: 'cosmetic_safety' },
      ],
    },
    {
      type: 'group',
      label: '医疗器械',
      key: 'medical_devices',
      children: [
        { label: '2021年器械使用情况报告', key: 'device_usage' },
        { label: '2021年器械审核结果', key: 'device_review' },
        { label: '2021年器械安全性评估', key: 'device_safety' },
      ],
    },
  ];
  const treedata = ref([
    {
      label: '2021年药品使用报告',
      key: '1',
      children: [
        {
          label: '目  录',
          key: '1-1',
          children: [
            {
              label: '第一章 项目概述',
              key: '1-1-1',
              children: [
                { label: '1.1. 项目目标', key: '1-1-1-1' },
                { label: '1.2. 实现方式', key: '1-1-1-2' },
              ],
            },
            {
              label: '第二章 项目需求分析',
              key: '1-1-2',
              children: [
                { label: '2.1. 项目总体定位', key: '1-1-2-1' },
                { label: '2.2. 建设边界', key: '1-1-2-2' },
              ],
            },
          ],
        },
        {
          label: '一、 项目概述',
          key: '1-2',
          children: [
            { label: '1. 项目目标', key: '1-2-1' },
            { label: '2. 项目内容', key: '1-2-2' },
            { label: '3. 涵盖', key: '1-2-3' },
            { label: '4. 康复领域', key: '1-2-4' },
          ],
        },
        {
          label: '二、 项目概述',
          key: '1-3',
          children: [
            { label: '1. 涵盖', key: '1-3-1' },
            { label: '2. 内容', key: '1-3-2' },
          ],
        },
      ],
    },
  ]);
  const defaultExpandedKeys = ref(['1', '1-1', '1-1-1', '1-1-2', '1-2', '1-3']);
  const selectModel = ref<string>('');
  // 点击事件处理函数
  const handleSelect = (key: string, option: { label: string; key: string }) => {
    console.log('选择的模板:', key);
    console.log('选择的模板:', option);
    // 可根据选中的 key 进行相应操作
    selectModel.value = option.label;
    showMark.value = true;
  };
  // const rendered = () => {
  //   console.log('渲染完成');
  // };
</script>

<style scoped>
  .custom-dropdown .n-dropdown-option {
    display: flex;
    align-items: center;
  }

  .custom-dropdown .n-dropdown-option .n-icon {
    margin-right: 8px;
  }
  .imgsize {
    width: 80px;
    height: 80px;
  }
</style>
