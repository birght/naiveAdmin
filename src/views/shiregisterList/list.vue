<template>
  <n-layout>
    <n-layout-header>
      <div class="top">
        <div class="text-xl font-bold"> Neusoft </div>
        <div class="pl-2 text-base"> 药械智能审批助手 </div>
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
              <div>待办项</div>
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
                <div>审核未通过数</div>
                <div class="text-2xl">1</div>
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
              <div>通过数</div>
              <div class="text-2xl">2</div>
            </n-col>
          </n-card>
        </n-col>
      </n-row>
      <n-data-table
        :columns="columns"
        :data="data"
        class="mt-4"
        :pagination="pagination"
        bordered
        bottom-bordered
      />
    </n-layout-content>
  </n-layout>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { CreateOutline } from '@vicons/ionicons5';
  import { NButton, NTag } from 'naive-ui';
  import { h } from 'vue';
  const pagination = 10;
  const columns = [
    { title: '企业名称', key: 'tipsWarn' },
    { title: '产品名称', key: 'title' },
    { title: '待办事项', key: 'dbr' },
    { title: '类别', key: 'companyDes' },
    { title: '提交时间', key: 'ccDate' },
    {
      title: '超时状态',
      key: 'xxm',
      render(row) {
        return h(
          NTag,
          {
            style: {
              marginRight: '6px',
            },
            type: 'success',
            bordered: false,
          },
          {
            default: () => row.xxm,
          }
        );
      },
    },
    { title: '待办任务', key: 'address' },
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
              { default: () => '智审结果' }
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
    process?: string;
    companyDes?: string;
    ccDate?: string;
    tipsInfo?: string;
    tipsWarn?: string;
  }

  const data: tableItem[] = [
    {
      no: 1,
      title: '注射用克林霉素磷酸酯0.9g',
      xxm: '正常',
      dbr: '再注册',
      address: '受理审查',
      level: 'error',
      levelMsg: '高风险',
      process: '未完成',
      companyDes: '药品',
      ccDate: '2024年9月27日 17点51分',
      tipsInfo: '药品监督检查缺陷预警',
      tipsWarn: '禾特健药品有限公司',
    },
    {
      no: 2,
      title: 'GE Healthcare LOGIQ E9 with XDclear 2.0-超声诊断仪',
      xxm: '正常',
      dbr: '注销',
      address: '受理审查',
      level: 'warning',
      levelMsg: '中风险',
      process: '进行中',
      companyDes: '医疗器械',
      ccDate: '2024年9月27日 08点35分',
      tipsInfo: '产品抽检不合格',
      tipsWarn: '同北医药有限公司',
    },
    {
      no: 2,
      title: 'Estée Lauder 小棕瓶精华液 (Advanced Night Repair Synchronized Recovery Complex II)',
      xxm: '正常',
      dbr: '变更',
      address: '受理审查',
      level: 'warning',
      levelMsg: '中风险',
      process: '进行中',
      companyDes: '化妆品',
      ccDate: '2024年9月27日 12点11分',
      tipsInfo: '产品抽检不合格',
      tipsWarn: '中兴制药有限公司',
    },
  ];
  const router = useRouter();
  function anotherAction(row) {
    console.log(row, '22');
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
    // background: #6e82f7;
  }
</style>
