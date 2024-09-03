<template>
  <n-layout-header>
    <div class="top">
      <div class="text-lg text-white"> NEUSOFT </div>
      <div class="pl-3 text-lg font-bold text-white indent-5"> 药品检查方案智能助手系统 </div>
      <div class="flex p-2 ml-auto font-bold text-white">
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
            h('div', { style: { width: '10px', display: 'inline-block' } }), // 调整按钮之间的距离
            h(
              NButton,
              {
                type: 'info',
                size: 'small',
                onClick: () => anotherAction(row),
              },
              { default: () => '检查' }
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
<style lang="less" scoped>
  .top {
    display: flex;
    height: 2.5rem;
    padding: 0rem 0.75rem;
    align-items: center;
    align-self: stretch;
    background: #092a80;
  }
</style>
