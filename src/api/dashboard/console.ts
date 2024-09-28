import { http } from '@/utils/http/axios';

//获取药械智能审批信息
export function getConsoleInfo() {
  return http.request({
    url: '/dashboard/console',
    method: 'get',
  });
}
