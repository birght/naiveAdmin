<template>
  <n-layout>
    <n-layout-header>
      <div class="top">
        <!-- <div class="text-xl font-bold"> Neusoft </div> -->
        <div class="pl-2 text-base"> 化妆品智能辅助审核 </div>
      </div>
    </n-layout-header>
    <n-layout-content content-style="padding: 12px;" class="mt-4">
      <n-row gutter="12">
        <n-col :span="4">
          <n-card>
            <n-col :span="4">
              <n-icon size="60" color="#092a80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      d="M6.5 14.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75zm.75-6.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5zm10.53-.78a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 0 1 1.06-1.06l.47.47l1.47-1.47a.75.75 0 0 1 1.06 0zm0 6.56a.75.75 0 1 0-1.06-1.06l-1.47 1.47l-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0l2-2zM5.25 3A2.25 2.25 0 0 0 3 5.25v13.5A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V5.25A2.25 2.25 0 0 0 18.75 3H5.25zM4.5 5.25a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V5.25z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </n-icon>
            </n-col>
            <n-col :span="20" class="text-center">
              <div>待整理</div>
              <div class="text-2xl">3</div>
            </n-col>
          </n-card>
        </n-col>
        <n-col :span="4">
          <n-card>
            <n-row>
              <n-col :span="4">
                <n-icon size="60" color="#d03050">
                  <CreateOutline />
                </n-icon>
              </n-col>
              <n-col :span="20" class="text-center">
                <div>退回</div>
                <div class="text-2xl">0</div>
              </n-col>
            </n-row>
          </n-card>
        </n-col>
        <n-col :span="4">
          <n-card>
            <n-col :span="4">
              <n-icon size="60" color="#0e7a0d">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5L214 654.3V226.7l298-101.6l298 101.6v427.6z"
                    fill-opacity=".8"
                    fill="currentColor"
                  />
                  <path
                    d="M214 226.7v427.6l298 232.2l298-232.2V226.7L512 125.1L214 226.7zM632.8 328H688c6.5 0 10.3 7.4 6.5 12.7L481.9 633.4a16.1 16.1 0 0 1-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.2 0 10 2.5 13 6.6l64.7 89.1l150.9-207.8c3-4.1 7.9-6.6 13-6.6z"
                    fill-opacity=".1"
                    fill="currentColor"
                  />
                  <path
                    d="M404.2 453.3c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z"
                    fill-opacity=".8"
                    fill="currentColor"
                  />
                </svg>
              </n-icon>
            </n-col>
            <n-col :span="20" class="text-center">
              <div>待确认</div>
              <div class="text-2xl">0</div>
            </n-col>
          </n-card>
        </n-col>
      </n-row>
      <n-spin :show="show">
        <n-data-table
          :columns="columns"
          :data="data"
          class="mt-4"
          :pagination="pagination"
          bordered
          bottom-bordered
        />
        <template #description>
          <div id="typewriter" ref="typewriter"></div>
        </template>
      </n-spin>
    </n-layout-content>
  </n-layout>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { NButton } from 'naive-ui';
  import { h, nextTick, ref } from 'vue';
  import Typewriter from 'typewriter-effect/dist/core';
  import { CreateOutline } from '@vicons/ionicons5';

  const show = ref(false);
  const pagination = {
    pageSize: 10,
    pageSizes: [10, 20, 30, 40],
    showSizePicker: true,
    showQuickJumper: true,
  };

  const columns = [
    { title: '备案编号', key: 'process' },
    { title: '产品名称', key: 'title' },
    { title: '申请类型', key: 'applicationType' }, // 修改为 'applicationType' 以更符合语境
    { title: '业务类别', key: 'businessCategory' }, // 修改为 'businessCategory' 以更符合语境
    { title: '环节', key: 'stage' }, // 修改为 'stage'，更准确描述流程中的环节
    { title: '所在地', key: 'location' }, // 修改为 'location'，更清晰地描述地方
    { title: '申请时间', key: 'applicationTime' }, // 修改为 'applicationTime'，更精确
    { title: '产品性质', key: 'productNature' }, // 修改为 'productNature'，更准确描述产品类型
    { title: '安评附件', key: 'safetyAssessmentAttachments' }, // 修改为 'safetyAssessmentAttachments'
    { title: '是否填报功能宣称', key: 'functionalClaimsReported' }, // 修改为 'functionalClaimsReported'
    { title: '责改状态', key: 'responsibilityModificationStatus' }, // 修改为 'responsibilityModificationStatus'
    {
      title: '操作',
      key: 'actions',
      render(row) {
        return h(
          'div',
          {
            style: {
              display: 'flex',
              justifyContent: 'flex-center',
            },
          },
          [
            h(
              NButton,
              {
                strong: true,
                size: 'small',
                type: 'info',
                onClick: () => anotherAction(row),
              },
              { default: () => '智能审核' }
            ),
          ]
        );
      },
    },
  ];

  interface tableItem {
    no: number;
    title: string;
    xxm: string;
    dbr: string;
    address: string;
    level?: string;
    levelMsg?: string;
    process?: string; // 对应 '备案编号'
    applicationType?: string; // 对应 '申请类型'
    businessCategory?: string; // 对应 '业务类别'
    stage?: string; // 对应 '环节'
    location?: string; // 对应 '所在地'
    applicationTime?: string; // 对应 '申请时间'
    productNature?: string; // 对应 '产品性质'
    safetyAssessmentAttachments?: string; // 对应 '安评附件'
    functionalClaimsReported?: string; // 对应 '是否填报功能宣称'
    responsibilityModificationStatus?: string; // 对应 '责改状态'
    tipsInfo?: string;
    tipsWarn?: string;
  }
  const data: tableItem[] = [
    {
      no: 1,
      title: '北京牙膏1号',
      xxm: '首次申请',
      dbr: '一般产品',
      address: '资料整理初审',
      level: 'warning', // 假设 'warning' 作为示例
      levelMsg: '一般风险',
      process: '京国牙育网备字2023000028',
      applicationTime: '2024-11-17 13:27:49', // '申请时间'
      stage: '资料整理初审', // '环节'
      location: '北京市市辖区大兴区', // '所在地'
      productNature: '牙膏', // '产品性质'
      safetyAssessmentAttachments: '化妆品', // '安评附件'
      functionalClaimsReported: '是', // '是否填报功能宣称'
      responsibilityModificationStatus: '是', // '责改状态'
      applicationType: '首次申请', // 对应 '申请类型'
      businessCategory: '一般产品',
      tipsInfo: '智能审核',
      tipsWarn: '智能审核',
    },
    {
      no: 2,
      title: '沪堂保湿唇有2号',
      xxm: '首次申请',
      dbr: '一般产品',
      address: '资料整理初审',
      level: 'info', // 假设 'info' 作为示例
      levelMsg: '低风险',
      process: '沪G妆网备字2021500003',
      applicationTime: '2021-11-17 15:23:48', // '申请时间'
      stage: '资料整理初审', // '环节'
      location: '上海市市辖区奉贤区', // '所在地'
      productNature: '化妆品', // '产品性质'
      safetyAssessmentAttachments: '化妆品', // '安评附件'
      functionalClaimsReported: '否', // '是否填报功能宣称'
      responsibilityModificationStatus: '是', // '责改状态'
      tipsInfo: '智能审核',
      tipsWarn: '智能审核',
      applicationType: '首次申请', // 对应 '申请类型'
      businessCategory: '一般产品',
    },
    {
      no: 3,
      title: '河南堂保湿唇膏1号',
      xxm: '首次申请',
      dbr: '一般产品',
      address: '资料整理初审',
      level: 'info', // 假设 'info' 作为示例
      levelMsg: '低风险',
      process: '豫G妆网备字2021500008',
      applicationTime: '2021-11-17 15:42:32', // '申请时间'
      stage: '资料整理初审', // '环节'
      location: '河南省开封市龙亭区', // '所在地'
      productNature: '化妆品', // '产品性质'
      safetyAssessmentAttachments: '化妆品', // '安评附件'
      functionalClaimsReported: '否', // '是否填报功能宣称'
      responsibilityModificationStatus: '是', // '责改状态'
      tipsInfo: '智能审核',
      tipsWarn: '智能审核',
      applicationType: '首次申请', // 对应 '申请类型'
      businessCategory: '一般产品',
    },
  ];

  const router = useRouter();

  function anotherAction(row) {
    show.value = true;
    console.log(row, '22');
    nextTick(() => {
      const app = document.querySelector('#typewriter');
      if (app) {
        let typewriter = new Typewriter(app, {
          delay: 15,
        });
        typewriter
          .typeString('<div><strong>化妆品智能辅助审核</strong></div>')
          .pauseFor(100)
          .typeString('<span style="font-size:14px">开启内容核对</span> ')
          .typeString('<strong>备案申请表</strong>')
          .deleteChars(8)
          .typeString('<strong>产品名称命名依据</strong>')
          .deleteChars(5)
          .typeString('<strong>产品配方</strong>')
          .deleteChars(3)
          .typeString('<strong>产品安全评估资料</strong>')
          .deleteChars(4)
          .pauseFor(100)
          .typeString('<strong> <span style="color: #27ae60;">完成检查..</span></strong>')
          .pauseFor(300)
          .callFunction(() => {
            router.push({
              name: 'dev1detail',
              // 保留当前路径并删除第一个字符，以避免目标 URL 以 `//` 开头。
              params: { pathMatch: JSON.stringify(row) },
            });
          })
          .start();
      }
    });
  }
</script>

<style lang="less" scoped>
  .top {
    display: flex;
    height: 2.5rem;
    padding: 0rem 0.75rem;
    align-items: center;
    align-self: stretch;
    // background: #6e82f7;
  }
  #typewriter {
    width: 600px;
    height: 100px;
    text-align: center;
    font-size: 18px;
    border-radius: 20px;
  }
</style>
