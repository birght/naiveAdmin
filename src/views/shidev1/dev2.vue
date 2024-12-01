<template>
  <div class="h-full hzp_container" ref="hzpContainer">
    <div class="p-4 hzp_content">
      <div v-for="(section, index) in exampleData" :key="index" class="flex w-full">
        <div v-for="item in section" :key="item.itemPid ?? 'default-key'" class="w-full">
          <!-- Title -->
          <div v-if="item.showType === 'title'" class="mt-4">
            <div class="my-3 shititle">
              {{ item.showName }}
            </div>
          </div>

          <!-- Radio -->
          <div v-if="item.showType === 'radio'" class="shiradio_cc">
            <div :class="item.itemValue === '1' ? 'shiradio_check' : 'shiradio_uncheck'"></div>
            <div class="mt-3 align-middle shiradio1">
              {{ item.showName }}
              <n-popover v-if="item.resultType === '1' || item.resultType === '3'" trigger="hover">
                <template #trigger>
                  <n-icon color="red">
                    <InformationCircleOutline />
                  </n-icon>
                </template>
                <span>{{ item.message }}</span>
              </n-popover>
            </div>
          </div>

          <!-- Card -->
          <div v-if="item.showType === 'card'" class="flex">
            <div
              v-for="(leve2item, index2) in item.cardList"
              :key="leve2item.itemPid ?? 'default-key'"
              class="box-border w-1/3 p-2"
            >
              <n-card :class="'markcard' + ((index2 % 3) + 1)">
                <div :class="'shi_card_bg' + ((index2 % 3) + 1)">
                  <strong>{{ leve2item.showName }}</strong>
                  <div class="shi_xuline"></div>
                  <div>
                    {{ leve2item.itemValue }}
                    <n-popover v-if="item.resultType === '2'" trigger="hover">
                      <template #trigger>
                        <n-icon color="red">
                          <InformationCircleOutline />
                        </n-icon>
                      </template>
                      <span>{{ item.message }}</span>
                    </n-popover>
                  </div>
                </div>
              </n-card>
            </div>
          </div>

          <!-- File Table -->
          <div v-if="item.showType === 'file'">
            <n-tag class="my-2" effect="light" size="large" hit>
              {{ item.showName }}
            </n-tag>
            <n-table :bordered="true" :single-line="false" :data="item.fileList">
              <thead>
                <tr>
                  <th v-for="col in item.colomn" :key="col.prop">{{ col.label }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, rowIndex) in item.fileList" :key="rowIndex">
                  <td v-for="col in item.colomn" :key="col.prop">
                    <template v-if="col.prop === 'message'">
                      <span class="text-red-5">{{ row[col.prop] }}</span>
                    </template>
                    <template v-else-if="col.prop === 'warn'">
                      <span class="text-yellow-5">{{ row[col.prop] }}</span>
                    </template>
                    <template v-else>
                      {{ row[col.prop] }}
                    </template>
                  </td>
                </tr>
              </tbody>
            </n-table>
          </div>

          <!-- Description -->
          <div v-if="item.showType === 'description'">
            <n-descriptions :column="2" bordered class="w-full">
              <n-descriptions-item
                v-for="des in item.descriptionList"
                :key="des.itemPid"
                :label="des.showName"
                label-class-name="w-1/5"
              >
                {{ des.itemValue }}
                <n-popover v-if="des.resultType === '1' || des.resultType === '3'" trigger="hover">
                  <template #trigger>
                    <n-icon color="red">
                      <InformationCircleOutline />
                    </n-icon>
                  </template>
                  <span>{{ des.message }}</span>
                </n-popover>
              </n-descriptions-item>
            </n-descriptions>
          </div>

          <!-- Table -->
          <div v-if="item.showType === 'table'" class="flex w-full mt-2">
            <n-table :bordered="true" :single-line="false" :data="item.tableList">
              <thead>
                <tr>
                  <th v-for="col in item.colomn" :key="col.prop">{{ col.label }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, rowIndex) in item.tableList" :key="rowIndex">
                  <td v-for="col in item.colomn" :key="col.prop">
                    <template v-if="col.prop === 'message'">
                      <span class="text-red-5">{{ row[col.prop] }}</span>
                    </template>
                    <template v-else-if="col.prop === 'warn'">
                      <span class="text-yellow-5">{{ row[col.prop] }}</span>
                    </template>
                    <template v-else>
                      {{ row[col.prop] }}
                    </template>
                  </td>
                </tr>
              </tbody>
            </n-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted, defineProps } from 'vue';
  import { PageDetailSection } from './type';
  import { InformationCircleOutline } from '@vicons/ionicons5';
  // 接收父组件传递过来的 props
  const props = defineProps<{
    exampleData: PageDetailSection[][]; // 定义接收的 props 类型
  }>();
  // 创建一个本地的 ref 来存储传递的数据
  const exampleData = ref<PageDetailSection[][]>(props.exampleData);
  // 使用 onMounted 生命周期钩子进行额外的操作
  onMounted(() => {
    console.log(exampleData.value, 'exampleData');
  });
</script>
<style lang="less" scoped>
  .shiradio1 {
    width: 178px;
    height: 33px;
    line-height: 33px;
    text-indent: 20px;
    background-image: url('../../assets/images/radiobg1.png');
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 3px;
  }
  .shiradio_check {
    width: 27px;
    height: 27px;
    background-image: url('../../assets/images/check.png');
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center;
  }
  .shiradio_uncheck {
    width: 27px;
    height: 27px;
    background-image: url('../../assets/images/uncheck.png');
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center;
  }
  .shititle {
    height: 32px;
    line-height: 32px;
    background-image: url('../../assets/images/titlebg.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
    text-indent: 52px;
  }
  .shiradio_cc {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .shiradio_cc > div {
    margin-right: 10px; /* 调整间距 */
  }
  .shi_card_bg1 {
    height: 62px;
    background-image: url('../../assets/images/card1.png');
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: 2% 0;
    padding-left: 60px;
  }
  .shi_card_bg2 {
    height: 62px;
    background-image: url('../../assets/images/card2.png');
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: 2% 0;
    padding-left: 60px;
  }
  .shi_card_bg3 {
    height: 62px;
    background-image: url('../../assets/images/card3.png');
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: 2% 0;
    padding-left: 60px;
  }
  .markcard1 {
    padding: 0px !important;
    background-color: #e9f7f4 !important;
  }
  .markcard2 {
    padding: 0px;
    background-color: #edf5fd !important;
  }
  .markcard3 {
    padding: 0px;
    background-color: #cedcec !important;
  }
  .shi_xuline {
    margin: 10px 0;
    height: 0;
    border: 1px dashed #e4e4e4;
  }
  .shi_asider_title1 {
    font-style: italic; // 设置斜体
    font-weight: bold; // 设置粗体
    font-size: 24px;
    // color: #195bcd;
    color: #fff;
    text-align: center;
  }
  .shi_asider_title {
    font-style: italic; // 设置斜体
    font-weight: bold; // 设置粗体
    font-size: 24px;
    color: #fff;
    text-align: center;
  }
</style>
