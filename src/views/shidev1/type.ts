export interface DetailDirectoryRequest {
  id: String;
  applyId: string;
  ofVer: string;
  functionId: string;
  ofOrg?: string;
  pageSize?: string;
  pageNum?: string;
  orderBy?: string;
  orderType?: string;
}

export interface DetailDirectoryResponse {
  code: string;
  msg: string | null;
  data: DetailDirectory[];
}

export interface DetailDirectory {
  id: string;
  functionId: string;
  moduleId: string;
  moduleName: string;
  messagesNum: string;
}

export interface PageDetailRequest {
  id: string;
  functionId: string;
  moduleId: string;
  applyId: string;
  pageSize?: string;
  pageNum?: string;
}

export interface PageDetailResponse {
  code: string;
  msg: string | null;
  data: PageDetailSection[][];
}

export interface PageDetailSection {
  fileList: unknown;
  showName: string | null;
  itemPid: string | null;
  showType: string;
  showColIndex: string | null;
  showRowIndex: string | null;
  showWidth: string | null;
  showColIcon: string | null;
  showColBg: string | null;
  resultType: string | null;
  failResults: string;
  itemValue: string | null;
  colomn: Column[];
  tableList: TableList[];
  message: string | null;
  descriptionList: DescriptionList[];
  warn: string | null;
  cardList: DescriptionList[];
}

export interface DescriptionList {
  showName: string | null;
  itemPid: string | null;
  showType: string;
  showColIndex: string | null;
  showRowIndex: string | null;
  showWidth: string | null;
  showColIcon: string | null;
  showColBg: string | null;
  resultType: string | null;
  failResults: string;
  itemValue: string | null;
  colomn: Column[];
  tableList: TableList[];
  message: string | null;
  descriptionList: DescriptionList[];
  warn: string | null;
  cardList: null;
}
export interface Column {
  label: string;
  prop: string;
}

export interface TableList {
  [key: string]: string;
  resultType: string;
  message: string;
}
