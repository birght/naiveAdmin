<template>
  <n-space vertical>
    <n-slider v-model:value="height" :min="200" :max="500" :step="100" style="max-width: 180px" />
    <n-data-table
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :scroll-x="1800"
      :style="{ height: `${height}px` }"
      flex-height
    />
  </n-space>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import type { DataTableColumns } from 'naive-ui';

  interface RowData {
    key: number;
    drugName: string;
    approvalDate: string;
    status: string;
    remarks: string;
  }

  function createColumns(): DataTableColumns<RowData> {
    return [
      {
        type: 'selection',
        fixed: 'left',
      },
      {
        title: '药品名称',
        key: 'drugName',
        width: 150,
        fixed: 'left',
      },
      {
        title: '批准日期',
        key: 'approvalDate',
        width: 150,
        fixed: 'left',
      },
      {
        title: '状态',
        key: 'status',
        width: 50,
      },
      {
        title: '备注',
        key: 'remarks',
        width: 250,
        fixed: 'right',
      },
    ];
  }

  export default defineComponent({
    setup() {
      return {
        data: Array.from({ length: 46 }).map((_, index) => ({
          key: index,
          drugName: `药品名称 ${index + 1}`,
          approvalDate: `202${index % 5}-01-15`, // 示例日期
          status: index % 2 === 0 ? '已批准' : '待审批',
          remarks: index % 2 === 0 ? '合规' : '需补充材料',
        })),
        columns: createColumns(),
        pagination: { pageSize: 10 },
        height: ref(200),
      };
    },
  });
</script>
