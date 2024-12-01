<!-- DocxViewer.vue -->
<template>
  <n-layout>
    <n-layout-header>
      <div class="top">
        <!-- <div class="text-xl font-bold"> Neusoft </div> -->
        <div class="pl-2 text-base"> 化妆品智能辅助审核 </div>
      </div>
    </n-layout-header>
    <n-layout content-style="padding: 24px 10px 10px 10px;" class="mt-4">
      <n-row>
        <n-col :span="18" class="pl-4">
          <div class="text-lg font-bold tracking-wider">
            {{ rowData?.title }}
            <n-tag type="success" class="ml-2" size="small">{{ rowData?.applicationType }}</n-tag>
            <n-tag type="error" class="ml-4" size="small"> 审核不通过 </n-tag>
            <n-badge :value="6" :offset="offset">
              <n-tag type="error" class="ml-2" size="small">存在问题项(总)</n-tag>
            </n-badge>
          </div>
          <n-descriptions label-placement="left" :column="2" class="w-3/5 mt-3">
            <n-descriptions-item label="备案号">
              {{ rowData?.process }}
            </n-descriptions-item>
            <n-descriptions-item label="产品名称"> {{ rowData?.title }} </n-descriptions-item>
            <n-descriptions-item label="环节">{{ rowData?.stage }}</n-descriptions-item>
            <n-descriptions-item label="责改状态">{{
              rowData?.responsibilityModificationStatus
            }}</n-descriptions-item>
            <n-descriptions-item label="所在地">{{ rowData?.location }}</n-descriptions-item>
            <n-descriptions-item label="申请时间">
              {{ rowData?.applicationTime }}
            </n-descriptions-item>
          </n-descriptions>
        </n-col>
        <n-col :span="6" class="flex items-end justify-end">
          <n-space>
            <n-button type="info" @click="docComparison" size="small">文档比对</n-button>
            <n-button type="info" @click="outputFileRs" size="small">导出审核结果</n-button>
          </n-space>
        </n-col>
      </n-row>
      <n-divider />
      <n-card>
        <n-collapse :default-expanded-names="['1', '5', '7']">
          <n-collapse-item title="1.备案申请表" name="1">
            <template #arrow>
              <n-icon color="#092a80">
                <ArrowCircleLeftTwotone />
              </n-icon>
            </template>
            <template #header>
              <div class="font-bold">1.备案申请表</div>
              <n-tag type="error" class="ml-2" size="small">审核不通过</n-tag>
              <n-badge :value="2" :offset="offset">
                <n-tag type="error" class="ml-2" size="small">存在问题项</n-tag>
              </n-badge>
            </template>
            <template #header-extra>
              <n-button
                class="ml-2"
                size="small"
                type="info"
                @click.stop="gotoQuestionNum(data1, '1')"
                >详情</n-button
              >
            </template>
            <n-data-table :columns="columns" :data="data1" />
          </n-collapse-item>
          <n-collapse-item title="2.产品名称命名依据" name="2">
            <template #arrow>
              <n-icon color="#092a80">
                <ArrowCircleLeftTwotone />
              </n-icon>
            </template>
            <template #header>
              <div class="font-bold">2.产品名称命名依据</div>
              <n-tag type="success" class="ml-2" size="small">审核通过</n-tag>
            </template>
            <template #header-extra>
              <n-button class="ml-2" size="small" type="info" @click.stop="gotoQuestionNum([], '2')"
                >详情</n-button
              >
            </template>
          </n-collapse-item>
          <n-collapse-item title="3.产品配方" name="3">
            <template #arrow>
              <n-icon color="#092a80">
                <ArrowCircleLeftTwotone />
              </n-icon>
            </template>
            <template #header>
              <div class="font-bold">3.产品配方</div>
              <n-tag type="success" class="ml-2" size="small">审核通过</n-tag>
            </template>
            <template #header-extra>
              <n-button class="ml-2" size="small" type="info" @click.stop="gotoQuestionNum([], '3')"
                >详情</n-button
              >
            </template>
          </n-collapse-item>
          <n-collapse-item title="4.产品执行的标准" name="4">
            <template #arrow>
              <n-icon color="#092a80">
                <ArrowCircleLeftTwotone />
              </n-icon>
            </template>
            <template #header>
              <div class="font-bold">4.产品执行的标准</div>
              <n-tag type="success" class="ml-2" size="small">审核通过</n-tag>
            </template>
            <template #header-extra>
              <n-button class="ml-2" size="small" type="info" @click.stop="gotoQuestionNum([], '4')"
                >详情</n-button
              >
            </template>
          </n-collapse-item>
          <n-collapse-item title="5.产品标签" name="5">
            <template #arrow>
              <n-icon color="#092a80">
                <ArrowCircleLeftTwotone />
              </n-icon>
            </template>
            <template #header>
              <div class="font-bold">5.产品标签</div>
              <n-tag type="error" class="ml-2" size="small">审核不通过</n-tag>
              <n-badge :value="2" :offset="offset">
                <n-tag type="error" class="ml-2" size="small">存在问题项</n-tag>
              </n-badge>
            </template>
            <template #header-extra>
              <n-button
                class="ml-2"
                size="small"
                type="info"
                @click.stop="gotoQuestionNum(data5, '5')"
                >详情</n-button
              >
            </template>
            <n-data-table :columns="columns" :data="data5" />
          </n-collapse-item>
          <n-collapse-item title="6.产品检验报告" name="6">
            <template #arrow>
              <n-icon color="#092a80">
                <ArrowCircleLeftTwotone />
              </n-icon>
            </template>
            <template #header>
              <div class="font-bold">6.产品检验报告</div>
              <n-tag type="success" class="ml-2" size="small">审核通过</n-tag>
            </template>
            <template #header-extra>
              <n-button class="ml-2" size="small" type="info" @click.stop="gotoQuestionNum([], '6')"
                >详情</n-button
              >
            </template>
          </n-collapse-item>
          <n-collapse-item title="7.产品安全评估资料" name="7">
            <template #arrow>
              <n-icon color="#092a80">
                <ArrowCircleLeftTwotone />
              </n-icon>
            </template>
            <template #header>
              <div class="font-bold">7.产品安全评估资料</div>
              <n-tag type="error" class="ml-2" size="small">审核不通过</n-tag>
              <n-badge :value="2" :offset="offset">
                <n-tag type="error" class="ml-2" size="small">存在问题项</n-tag>
              </n-badge>
            </template>
            <template #header-extra>
              <n-button
                size="small"
                type="info"
                @click="handleButtonClick('安全评估报告样例', 'pdf', $event)"
                >附件预览</n-button
              >
              <n-button
                class="ml-2"
                size="small"
                type="info"
                @click.stop="gotoQuestionNum(data7, '7')"
                >详情</n-button
              >
            </template>
            <n-data-table :columns="columns" :data="data7" />
          </n-collapse-item>
        </n-collapse>
      </n-card>
    </n-layout>
    <n-modal v-model:show="showModal" style="width: 90%" preset="card" fullscreen>
      <n-card>
        <PreviewFile :src="pdfSrc" style="height: 80vh" :fileType="fileTypeParent" />
      </n-card>
    </n-modal>
    <n-drawer v-model:show="showModalissue" width="90%" resizable placement="right">
      <n-drawer-content>
        <n-row>
          <n-col :span="22">
            <div class="text-lg font-bold tracking-wider">
              {{ rowData?.title }}
            </div>
            <n-descriptions label-placement="left" :column="2" class="w-3/5 mt-3">
              <n-descriptions-item label="备案号">
                {{ rowData?.process }}
              </n-descriptions-item>
              <n-descriptions-item label="产品名称"> {{ rowData?.title }} </n-descriptions-item>
              <n-descriptions-item label="环节">{{ rowData?.stage }}</n-descriptions-item>
              <n-descriptions-item label="责改状态">{{
                rowData?.responsibilityModificationStatus
              }}</n-descriptions-item>
              <n-descriptions-item label="所在地">{{ rowData?.location }}</n-descriptions-item>
              <n-descriptions-item label="申请时间">
                {{ rowData?.applicationTime }}
              </n-descriptions-item>
            </n-descriptions>
          </n-col>
          <!-- <n-col :span="2" class="flex items-end justify-end">
            <n-button type="info" class="mt-auto" @click="changeResultSm" size="small"
              >结果标注</n-button
            >
          </n-col> -->
        </n-row>
        <n-data-table :columns="columns1" :data="dataShow" class="mt-4" />
        <n-divider />
        <n-tabs type="line" animated>
          <n-tab-pane name="formData" tab="表单数据">
            <dev2 :exampleData="typedJsonData" />

            <!-- <div v-if="listMark === '1'">
              <dev2 :exampleData="typedJsonData" />
            </div>
            <img v-if="listMark === '5'" src="~@/assets/images/listDataImg2.jpg" alt="" />
            <img v-if="listMark === '7'" src="~@/assets/images/listDataImg3.jpg" alt="" /> -->
          </n-tab-pane>
          <n-tab-pane name="fileData" tab="文档数据">
            <n-row gutter="12" v-if="listMark === '7'">
              <n-col :span="12">
                <n-scrollbar style="max-height: 90vh">
                  <PreviewFile :src="pdfSrc" :fileType="fileTypeParent" />
                </n-scrollbar>
              </n-col>
              <n-col :span="12">
                <div class="flex justify-between">
                  <div>风险等级</div>
                  <n-space class="py-4">
                    <n-tag type="warning"> 风险2 </n-tag>
                    <n-tag type="error"> 问题0 </n-tag>
                  </n-space>
                </div>
                <n-collapse :default-expanded-names="['11', '22']">
                  <n-collapse-item title="报告盖章要求" name="11">
                    <template #header-extra> 1/2 </template>
                    <div class="px-4 leading-8">
                      <div class="font-bold"> 风险分析: </div>
                      <div> 评估人员简历需盖备案人公章 </div>
                      <div class="font-bold"> 修改建议: </div>
                      <div> 建议评估人员简历加盖备案人公章 </div>
                    </div>
                  </n-collapse-item>
                  <n-collapse-item title="评估人员相关要求" name="22">
                    <template #header-extra> 2/2 </template>
                    <div class="px-4 leading-8">
                      <div class="font-bold"> 风险分析: </div>
                      <div>
                        安评报告的评估人、评估日期不应为空
                        安全评估人签名中的签名日期、姓名名应与安评报告评估报告日期保持一致
                      </div>
                      <div class="font-bold"> 修改建议: </div>
                      <div>
                        建议补充安评报告的评估人、评估日期
                        建议修改安全评估人签名中的签名日期、姓名与安评报告的评估人、评估日期保持一致
                      </div>
                    </div>
                  </n-collapse-item>
                </n-collapse>
              </n-col>
            </n-row>
            <div v-else>
              <n-empty description="无文档数据">
                <template #extra> </template>
              </n-empty>
            </div>
          </n-tab-pane>
        </n-tabs>
      </n-drawer-content>
    </n-drawer>
    <n-modal v-model:show="modalShow" :mask-closable="false" preset="card" class="modal-container">
      <n-spin :show="loading">
        <iframe
          :src="iframeSrc"
          width="100%"
          height="600px"
          frameborder="0"
          @load="onIframeLoad"
        ></iframe>
      </n-spin>
    </n-modal>
  </n-layout>
</template>

<script setup lang="ts">
  import { ArrowCircleLeftTwotone } from '@vicons/material';
  import { ref, h, onMounted } from 'vue';
  import { PreviewFile } from '@/components/PreviewFile';
  import { NButton } from 'naive-ui';
  import type { DataTableColumns } from 'naive-ui';
  import { useMessage } from 'naive-ui';
  import { useRoute } from 'vue-router';
  import dev2 from './dev2.vue';
  import jsonData1 from './detaildata1.json';
  import jsonData2 from './detaildata2.json';
  import jsonData3 from './detaildata3.json';
  import jsonData4 from './detaildata4.json';
  import jsonData5 from './detaildata5.json';
  import jsonData6 from './detaildata6.json';
  import jsonData7 from './detaildata7.json';

  import { PageDetailSection } from './type';
  // const typedJsonData = jsonData as PageDetailSection[][];
  const typedJsonData = ref<PageDetailSection[][]>([]);

  const listMark = ref('7');
  const gotoQuestionNum = (curData, newMark) => {
    listMark.value = newMark;
    if (newMark === '1') {
      typedJsonData.value = jsonData1 as unknown as PageDetailSection[][];
    } else if (newMark === '2') {
      typedJsonData.value = jsonData2 as unknown as PageDetailSection[][];
    } else if (newMark === '3') {
      typedJsonData.value = jsonData3 as unknown as PageDetailSection[][];
    } else if (newMark === '4') {
      typedJsonData.value = jsonData4 as unknown as PageDetailSection[][];
    } else if (newMark === '5') {
      typedJsonData.value = jsonData5 as unknown as PageDetailSection[][];
    } else if (newMark === '6') {
      typedJsonData.value = jsonData6 as unknown as PageDetailSection[][];
    } else if (newMark === '7') {
      typedJsonData.value = jsonData7 as unknown as PageDetailSection[][];
    }
    dataShow.value = curData;
    showModalissue.value = true;
  };
  const route = useRoute();
  const message = useMessage();
  const modalShow = ref(false);
  const loading = ref(true);
  const iframeSrc = ref(
    'https://textmind-sdk.bce.baidu.com/textmind/sdk/textdiff/task-f71t8ykbiu236rfz?access_token=24.8561d9ddbeb66c86f010e8284534d3bc.2592000.1735378600.282335-116439206'
  ); // 替换为实际的 iframe 地址
  interface RowData {
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
  const rowData = ref<RowData | null>(null);
  let fileTypeParent = 'pdf';
  let pdfSrc = '安全评估报告样例.pdf';
  const showModal = ref(false);
  const showModalissue = ref(false);
  interface Song {
    standard: string;
    resource: string;
    result: string;
    description: string;
    mark: string;
  }
  const offset = [6, -2] as const;

  onMounted(() => {
    console.log(route);

    if (route.params.pathMatch) {
      rowData.value = JSON.parse(route.params.pathMatch as string);
    }

    console.log(rowData.value);
  });
  // const changeResultSm = () => {
  //   dataShow.value.forEach((element) => {
  //     if (element.result === '问题') {
  //       // Toggle the mark field for items where result is '问题'
  //       element.mark = element.mark === '是' ? '否' : '是';
  //     }
  //   });
  //   console.log(dataShow.value);
  // };

  function createColumns({}: { play: (row: Song) => void }): DataTableColumns<Song> {
    return [
      {
        title: '核查数据项',
        key: 'standard',
      },
      {
        title: '数据来源',
        key: 'resource',
      },
      {
        title: '结果类型',
        key: 'result',
        render(row) {
          return h(
            'span',
            {
              style: {
                color:
                  row.result === '审核不通过'
                    ? 'red'
                    : row.result === '审核通过'
                    ? 'green'
                    : 'inherit',
              },
            },
            row.result
          );
        },
      },
      {
        title: '结果说明',
        key: 'description',
        render(row) {
          return h(
            'span',
            {
              style: {
                color: row.result === '问题' ? 'red' : 'green',
              },
            },
            row.description
          );
        },
      },
    ];
  }
  function createColumns1({}: { play: (row: Song) => void }): DataTableColumns<Song> {
    return [
      {
        title: '核查数据项',
        key: 'standard',
      },
      {
        title: '数据来源',
        key: 'resource',
      },
      {
        title: '结果类型',
        key: 'result',
        render(row) {
          return h(
            'span',
            {
              style: {
                color:
                  row.result === '审核不通过'
                    ? 'red'
                    : row.result === '审核通过'
                    ? 'green'
                    : 'inherit',
              },
            },
            row.result
          );
        },
      },
      {
        title: '结果说明',
        key: 'description',
        render(row) {
          return h(
            'span',
            {
              style: {
                color: row.result === '问题' ? 'red' : 'green',
              },
            },
            row.description
          );
        },
      },
      {
        title: '结果标注',
        key: 'mark',
      },
      {
        title: '操作',
        key: 'action',
        render(row) {
          return h(
            NButton,
            {
              size: 'small',
              type: 'info',
              onClick: () => {
                // 更新行的 mark 属性
                row.mark = row.mark === '是' ? '否' : '是';
              },
            },
            { default: () => '结果标注' }
          );
        },
      },
    ];
  }
  function outputFileRs() {
    const filePath = '/化妆品智能审核结果.docx';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = '化妆品智能审核结果.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const docComparison = () => {
    modalShow.value = true;
    loading.value = true; // 显示加载条
  };

  const onIframeLoad = () => {
    loading.value = false; // 隐藏加载条
  };
  const data1 = ref([
    {
      standard: '人体检验报告号',
      resource: '表单数据',
      result: '问题',
      description: '合法有效性校验不通过',
      mark: '是',
    },
    {
      standard: '使用已注册新原料',
      resource: '表单数据',
      result: '问题',
      description: '材料不完备，格式不符合要求',
      mark: '是',
    },
  ]);
  const data5 = ref([
    {
      standard: '使用期限',
      resource: '表单数据',
      result: '问题',
      description: '使用期限应为生产日期+保质期或生产批号+限期使用日期二选一',
      mark: '是',
    },
    {
      standard: '净含量',
      resource: '表单数据',
      result: '问题',
      description: '净含量单位应使用g(克)、kg(千克)、mL(ml)(室升)、L(I)(升)',
      mark: '是',
    },
  ]);
  const data7 = ref([
    {
      standard: '评估单位',
      resource: '表单数据',
      result: '问题',
      description: '出具检验报告的检验机构不符合资质要求',
      mark: '是',
    },
    {
      standard: '产品安全评估报告',
      resource: '文档数据',
      result: '问题',
      description:
        '评估人员简历需盖备案人公章;安全评估人签名、评估日期应与报告平估人、评估日期保持一致',
      mark: '是',
    },
  ]);
  const dataShow = ref([
    {
      standard: '',
      resource: '',
      result: '',
      description: '',
      mark: '',
    },
  ]);
  const columns = createColumns({ play });
  const columns1 = createColumns1({ play });

  function play(row) {
    console.log('Playing:', row);
  }
  function handleButtonClick(param1, filetype, event) {
    event.stopPropagation();
    console.log(param1, 'param1param1');
    if (!param1) {
      message.info('暂无材料');
      return false;
    }
    pdfSrc = '/' + param1 + '.' + filetype;
    fileTypeParent = filetype;
    showModal.value = true;
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
  .shi_label {
    position: relative;
    padding-left: 10px;
  }
  .shi_label::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 16px; /* 调整高度以适应您的需求 */
    background-color: #092a80; /* 或者您想要的颜色 */
  }
  .shi_label1 {
    position: relative;
    padding-left: 10px;
  }
  .shi_label1::before {
    content: '';
    position: absolute;
    left: 0;
    top: 30%;
    transform: translateY(-50%);
    width: 4px;
    height: 16px; /* 调整高度以适应您的需求 */
    background-color: #092a80; /* 或者您想要的颜色 */
  }
  .pagination-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 0;
  }

  .current-page {
    font-size: 16px;
    font-weight: bold;
    padding: 0 20px;
  }
  .word_cc {
    position: relative;
    height: calc(100vh - 60px);
    background-color: #f1f1f1; /* 模拟文档的背景色 */
    overflow: hidden;
  }
  .word_head {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 10; /* 确保它位于其他元素之上 */
    padding: 10px 0; /* 适当的内边距 */
  }
  .word_doc {
    height: calc(100vh - 138px);
    margin-top: 10px;
    margin-left: 1%;
    width: 98%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 模拟文档阴影效果 */
    padding: 80px 60px; /* 内容与边界的距离 */
    font-family: 'Times New Roman', Times, serif; /* 常见的文档字体 */
    line-height: 2;
    border: 1px solid #d3d3d3; /* 边框线，增加文档的真实感 */
    background-color: #ffffff; /* 文档的白色背景 */
    border-radius: 5px;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
  }
  /* Webkit-based browsers (Chrome, Safari) */
  .word_doc::-webkit-scrollbar {
    width: 4px; /* 滚动条宽度 */
  }

  .word_doc::-webkit-scrollbar-track {
    background: #f1f1f1; /* 滚动条轨道背景 */
    border-radius: 10px;
  }

  .word_doc::-webkit-scrollbar-thumb {
    background: #888; /* 滚动条颜色 */
    border-radius: 2px;
  }

  .word_doc::-webkit-scrollbar-thumb:hover {
    background: #555; /* 滚动条悬停颜色 */
  }
  .info_cc {
    height: calc(100vh - 320px);
    overflow-y: scroll;
  }
  /* 隐藏滚动条 */
  .info_cc::-webkit-scrollbar {
    display: none; /* 隐藏滚动条 */
  }

  .info_cc {
    -ms-overflow-style: none; /* 适用于 Internet Explorer 和 Edge */
    scrollbar-width: none; /* 适用于 Firefox */
  }
  .word_section {
    margin-top: 60px;
    font-size: 18px;
  }
</style>
