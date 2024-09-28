<template>
  <n-layout-header>
    <div class="top">
      <div class="text-xl font-bold"> Neusoft </div>
      <div class="pl-2 text-base"> 药品检查方案智能助手 </div>
      <div class="flex p-2 ml-auto font-bold">
        <n-icon size="20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
          >
            <path
              d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3z"
              fill="currentColor"
            />
            <path
              d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm-6 24.377V25a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3v1.377a11.899 11.899 0 0 1-12 0zm13.992-1.451A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z"
              fill="currentColor"
            />
          </svg>
        </n-icon>
        <div> 下午好，用户 </div>
      </div>
    </div>
  </n-layout-header>
  <n-list hoverable clickable>
    <n-list-item v-for="item in data" :key="item.no">
      <n-thing :title="item.title" content-style="margin-top: 10px;" content-indented>
        <template #header>
          <div class="my-2 text-xl">
            {{ item.title }}
            <span class="inline-block text-sm text-blue-500 indent-3">{{ item.ccDate }}</span>
          </div>
        </template>
        <template #description>
          <n-space size="small" style="margin-top: 4px">
            <n-tag :type="item.level" size="small">
              {{ item.levelMsg }}
            </n-tag>
            <n-tag :type="item.level" size="small"> {{ item.process }} </n-tag>
            <n-tag :type="item.level" size="small"> {{ item.tipsInfo }} </n-tag>
          </n-space>
        </template>
        <div class="py-2 text-base font-medium">
          {{ item.tipsWarn }}
        </div>
      </n-thing>
      <template #suffix>
        <div class="flex">
          <n-button @click="anotherAction()">
            <template #icon>
              <n-icon size="24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 20 20"
                >
                  <g fill="none">
                    <path
                      d="M10 12c0 .924-.314 1.775-.84 2.453l3.691 3.692a.5.5 0 1 1-.707.707L8.453 15.16A4 4 0 1 1 10 12zm-4 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6zM5.5 3a.5.5 0 0 0-.5.5v3.6c-.348.07-.683.177-1 .316V3.5A1.5 1.5 0 0 1 5.5 2h5.086a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V16.5a1.5 1.5 0 0 1-1.5 1.5h-.587a1.494 1.494 0 0 0-.354-.563L13.12 17H14.5a.5.5 0 0 0 .5-.5V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H5.5zm5.5.207V6.5a.5.5 0 0 0 .5.5h3.293L11 3.207z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </n-icon>
            </template>
            详情</n-button
          >
          <n-button @click="anotherAction()" type="info" class="ml-2">
            <template #icon>
              <n-icon>
                <CreateOutline />
              </n-icon>
            </template>
            检查处置</n-button
          >
        </div>
      </template>
    </n-list-item>
  </n-list>
</template>

<script lang="ts" setup>
  import { NButton } from 'naive-ui';
  import { useRouter } from 'vue-router';
  import { CreateOutline } from '@vicons/ionicons5';
  interface tableItem {
    no: number;
    title: string;
    xxm: string;
    dbr: string;
    address: string;
    level?: string;
    levelMsg?: string;
    process?: string;
    companyDes?: string;
    ccDate?: string;
    tipsInfo?: string;
    tipsWarn?: string;
  }

  const data: tableItem[] = [
    {
      no: 1,
      title: '福建省瑞康制药有限公司',
      xxm: '91371300MA3R064567',
      dbr: '张代表',
      address: '福建省高新区工业三路',
      level: 'error',
      levelMsg: '高风险',
      process: '未完成',
      companyDes: '国有企业,产值1500,涵盖多种药品,器械生产资质,5A安全企业',
      ccDate: '2024年9月20日',
      tipsInfo: '药品监督检查缺陷预警',
      tipsWarn: '存在严重缺陷',
    },
    {
      no: 2,
      title: '福建省诺华制药有限公司',
      xxm: '91371300MA3R064568',
      dbr: '李代表',
      address: '福建省高新区工业四路',
      level: 'warning',
      levelMsg: '中风险',
      process: '进行中',
      companyDes: '民营企业,产值1200,涵盖多种药品,器械生产资质,4A安全企业',
      ccDate: '2024年9月20日',
      tipsInfo: '产品抽检不合格',
      tipsWarn: '当前批次不合格',
    },
    {
      no: 3,
      title: '福建省阿斯利康制药有限公司',
      xxm: '91371300MA3R064569',
      dbr: '王代表',
      address: '福建省高新区工业五路',
      level: 'success',
      levelMsg: '低风险',
      process: '已完成',
      companyDes: '合资企业,产值1000,涵盖多种药品,器械生产资质,3A安全企业',
      ccDate: '2024年9月20日',
      tipsInfo: '抽检合格',
      tipsWarn: '存在3项以上主要缺陷',
    },
    {
      no: 4,
      title: '福建省辉瑞制药有限公司',
      xxm: '91371300MA3R064570',
      dbr: '赵代表',
      address: '福建省高新区工业六路',
      level: 'error',
      levelMsg: '高风险',
      process: '未完成',
      companyDes: '国有企业,产值2000,涵盖多种药品,器械生产资质,5A安全企业',
      ccDate: '2024年9月20日',
      tipsInfo: '产品抽检不合格',
      tipsWarn: '存在严重缺陷',
    },
    {
      no: 5,
      title: '福建省拜耳制药有限公司',
      xxm: '91371300MA3R064571',
      dbr: '钱代表',
      address: '福建省高新区工业七路',
      level: 'warning',
      levelMsg: '中风险',
      process: '进行中',
      companyDes: '民营企业,产值1500,涵盖多种药品,器械生产资质,4A安全企业',
      ccDate: '2024年9月20日',
      tipsInfo: '药品监督检查缺陷预警',
      tipsWarn: '存在严重缺陷',
    },
    {
      no: 6,
      title: '福建省罗氏制药有限公司',
      xxm: '91371300MA3R064572',
      dbr: '孙代表',
      address: '福建省高新区工业八路',
      level: 'success',
      levelMsg: '低风险',
      process: '已完成',
      companyDes: '合资企业,产值1800,涵盖多种药品,器械生产资质,3A安全企业',
      ccDate: '2024年9月20日',
      tipsInfo: '药品监督检查缺陷预警',
      tipsWarn: '存在严重缺陷',
    },
    {
      no: 7,
      title: '福建省葛兰素史克制药有限公司',
      xxm: '91371300MA3R064573',
      dbr: '周代表',
      address: '福建省高新区工业九路',
      level: 'error',
      levelMsg: '高风险',
      process: '未完成',
      companyDes: '国有企业,产值2200,涵盖多种药品,器械生产资质,5A安全企业',
      ccDate: '2024年9月20日',
      tipsInfo: '药品监督检查缺陷预警',
      tipsWarn: '存在严重缺陷',
    },
  ];
  const router = useRouter();
  function anotherAction() {
    router.push({ name: 'shidetail' });
  }
</script>

<style lang="less" scoped>
  .top {
    display: flex;
    height: 2.5rem;
    padding: 0rem 0.75rem;
    align-items: center;
    align-self: stretch;
    // background: #092a80;
  }
</style>
