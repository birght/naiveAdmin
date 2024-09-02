<template>
  <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false" />
</template>

<script lang="ts">
  import { defineComponent, h } from 'vue';
  import { NButton, useMessage } from 'naive-ui';
  import type { DataTableColumns } from 'naive-ui';
  import { useRouter } from 'vue-router';

  interface tableItem {
    no: number;
    title: string;
    xxm: string;
    dbr: string;
    address: string;
  }

  function createColumns({
    play,
    anotherAction,
  }: {
    play: (row: tableItem) => void;
    anotherAction: (row: tableItem) => void;
  }): DataTableColumns<tableItem> {
    return [
      {
        title: 'N',
        key: 'no',
      },
      {
        title: '企业名称',
        key: 'title',
      },
      {
        title: '统一社会信用信息码',
        key: 'xxm',
      },
      {
        title: '法定代表人',
        key: 'dbr',
      },
      {
        title: '地址',
        key: 'address',
      },
      {
        title: '操作',
        key: 'actions',
        render(row) {
          return [
            h(
              NButton,
              {
                strong: true,
                size: 'small',
                onClick: () => play(row),
              },
              { default: () => '庭审' }
            ),
            h('div', { style: { width: '10px', display: 'inline-block' } }), // 调整按钮之间的距离
            h(
              NButton,
              {
                type: 'info',
                size: 'small',
                onClick: () => anotherAction(row),
              },
              { default: () => '裁决' }
            ),
          ];
        },
      },
    ];
  }

  const data: tableItem[] = [
    {
      no: 1,
      title: '辽宁某堂制药有限公司',
      xxm: '91371300MA3R064567',
      dbr: '张代表',
      address: '沈阳市高新区工业三路',
    },
    {
      no: 2,
      title: '辽宁某堂制药有限公司1',
      xxm: '91371300MA3R064568',
      dbr: '张代表',
      address: '沈阳市高新区工业三路',
    },
    {
      no: 3,
      title: '辽宁某堂制药有限公司2',
      xxm: '91371300MA3R064569',
      dbr: '张代表',
      address: '沈阳市高新区工业三路',
    },
    {
      no: 4,
      title: '辽宁某堂制药有限公司3',
      xxm: '91371300MA3R064570',
      dbr: '张代表',
      address: '沈阳市高新区工业三路',
    },
    {
      no: 5,
      title: '辽宁某堂制药有限公司4',
      xxm: '91371300MA3R064571',
      dbr: '张代表',
      address: '沈阳市高新区工业三路',
    },
    {
      no: 6,
      title: '辽宁某堂制药有限公司5',
      xxm: '91371300MA3R064572',
      dbr: '张代表',
      address: '沈阳市高新区工业三路',
    },
    {
      no: 7,
      title: '辽宁某堂制药有限公司6',
      xxm: '91371300MA3R064573',
      dbr: '张代表',
      address: '沈阳市高新区工业三路',
    },
  ];
  export default defineComponent({
    setup() {
      const message = useMessage();
      const router = useRouter();

      function play(row: tableItem) {
        message.info(`Play ${row.title}`);
      }

      function anotherAction() {
        router.push({ name: 'shidetail' });
      }

      return {
        data,
        columns: createColumns({ play, anotherAction }),
        pagination: false as const,
      };
    },
  });
</script>
