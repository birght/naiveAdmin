<!-- DocxViewer.vue -->
<template>
  <n-layout>
    <n-layout-header>
      <div class="top">
        <div class="text-xl font-bold"> Neusoft </div>
        <div class="pl-2 text-base"> 药械智能审核助手 </div>
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
    <n-layout content-style="padding: 24px 10px 10px 10px;" class="mt-4">
      <n-row>
        <n-col :span="22" class="pl-4">
          <div class="text-lg font-bold tracking-wider">
            境内生产药品再注册
            <n-tag type="error" class="ml-4" size="small"> 审核不通过 </n-tag>
            <n-badge :value="5" :offset="offset">
              <n-tag type="error" class="ml-2" size="small">不符项(总)</n-tag>
            </n-badge>
          </div>
          <n-descriptions bordered label-placement="left" class="mt-3" :column="2">
            <n-descriptions-item label="原始编号">YP-IC2205-20120225-0904ZBC</n-descriptions-item>
            <n-descriptions-item label="受理号">EEPT-20240927R-YP4402211</n-descriptions-item>
            <n-descriptions-item label="本申请属于">境内生产药品注册</n-descriptions-item>
            <n-descriptions-item label="药品注册分类">化学药品</n-descriptions-item>
            <n-descriptions-item label="药品通用名称">注射用克林霉素磷酸酯</n-descriptions-item>
            <n-descriptions-item label="英文名称/拉丁名称"
              >Clindamycin Phosphate for Injection</n-descriptions-item
            >
            <n-descriptions-item label="汉语拼音"
              >Zhusheyong Kelinmeisu Linsuanzhi</n-descriptions-item
            >
            <n-descriptions-item label="化学名称"
              >(2s-反式)-6-(1-甲基-4-丙基-2-吡咯烷碳酸基)-1-流代-甲基-7-氧-6,7,8-三
              脱氢-L-苏式-a-D-半乳糖吡喃糖苷-2-二氢磷酸酯</n-descriptions-item
            >
            <n-descriptions-item label="制剂">中国药典剂型:注射剂</n-descriptions-item>
            <n-descriptions-item label="规格">按C18H33C1N205S计0.9g</n-descriptions-item>
          </n-descriptions>
        </n-col>
        <n-col :span="2" class="flex items-end justify-end">
          <n-button type="info" class="mt-auto" @click="outputFileRs">导出审核结果</n-button>
        </n-col>
      </n-row>
      <n-divider />
      <n-card>
        <n-collapse>
          <n-collapse-item title="1.药品再注册申请表" name="1">
            <template #arrow>
              <n-icon color="#092a80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                >
                  <path
                    opacity=".3"
                    d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8zm0 11l-4-4h8l-4 4z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-5l4-4H8z"
                    fill="currentColor"
                  />
                </svg>
              </n-icon>
            </template>
            <template #header>
              <div class="font-bold">1.药品再注册申请表</div>
              <n-tag type="error" class="ml-2" size="small">审核不通过</n-tag>
              <n-badge :value="1" :offset="offset">
                <n-tag type="error" class="ml-2" size="small">不符项</n-tag>
              </n-badge>
            </template>
            <template #header-extra>
              <n-button
                secondary
                @click="handleButtonClick('电子申请表', 'pdf', $event)"
                size="small"
                type="info"
                >附件预览</n-button
              >
            </template>
            <n-data-table :columns="columns" :data="data" />
            <n-collapse-item title="主要信息提取">
              <div class="p-4 bg-slate-50">
                <n-descriptions :column="1">
                  <template #header>
                    <div style="font-size: 14px; font-weight: 600">声明</div>
                  </template>
                  <n-descriptions-item>
                    我们保证:
                    <br />
                    ①本中请遵守《中华人民共和国药品管理法》等法律、法规和规章、标准和规范的有关规定:
                    <br />
                    ②本申请所提交资料、样品均真实且来源合法，药品研制全过程符合相关管理规范，信息真实、准确、完整和可追溯。申报事项未侵犯他人的权益，申报资料中除有参考文献的数据和研究资料外，其余数据和研究资料均为申请人自行取得或者合法取得;
                    <br />
                    ③本申请一并提交的电子文件与打印文件内容完全一致;
                    <br />
                    ④以上声明如査有不实之处，我们承担由此导致的一切法律后果。
                  </n-descriptions-item>
                </n-descriptions>
                <n-descriptions :column="2" class="mt-4">
                  <template #header>
                    <div style="font-size: 14px; font-weight: 600">申请事项</div>
                  </template>
                  <n-descriptions-item label="本申请属于">境内生产药品注册</n-descriptions-item>
                  <n-descriptions-item label="药品注册分类">化学药品无</n-descriptions-item>
                </n-descriptions>
                <n-descriptions :column="1" class="mt-4">
                  <template #header>
                    <div style="font-size: 14px; font-weight: 600">药品情况</div>
                  </template>
                  <n-descriptions-item label="药品通用名称"
                    >注射用克林霉素磷酸酯</n-descriptions-item
                  >
                  <n-descriptions-item label="英文名称/拉丁名称"
                    >Clindamycin Phosphate for Injection</n-descriptions-item
                  >
                  <n-descriptions-item label="汉语拼音"
                    >Zhusheyong Kelinmeisu Linsuanzhi</n-descriptions-item
                  >
                  <n-descriptions-item label="化学名称"
                    >(2s-反式)-6-(1-甲基-4-丙基-2-吡咯烷碳酰胺基)-1-硫代-甲基-7-氯-6，7，8-三脱氢-L-苏式-a-D-半乳糖吡喃糖苷-2-二氢磷酸酯</n-descriptions-item
                  >
                  <n-descriptions-item label="商品名称">无</n-descriptions-item>
                  <n-descriptions-item label="制剂">中国药典剂型:注射剂</n-descriptions-item>
                  <n-descriptions-item label="规格">按C18H33C1N205S计0.9g</n-descriptions-item>
                  <n-descriptions-item label="同品种已被受理或同期申报的其他制剂及规格"
                    >0.3g、0.6g、1.2g(均按C18H33C1N205S计)</n-descriptions-item
                  >
                  <n-descriptions-item label="包装"
                    >直接接触药品的包装材料和容器:低硼硅玻璃管制注射剂瓶、注射用冷冻干燥用卤化丁基橡胶塞(溴化)包装规格:1瓶/盒、10瓶/盒</n-descriptions-item
                  >
                  <n-descriptions-item label="药品有效期">24个月</n-descriptions-item>
                  <n-descriptions-item label="处方"
                    >活性成分/中药药味/...:以1000瓶量计:克林素磷酸酯900g(按C18H33C1N205S计)辅料:以1000瓶量计:依地酸二钠1.2g、氢氧化钠约57g、活性炭约2.7g</n-descriptions-item
                  >
                </n-descriptions>
                <n-descriptions :column="2" class="mt-4">
                  <template #header>
                    <div style="font-size: 14px; font-weight: 600">申请人及委托研究机构</div>
                  </template>
                  <n-descriptions-item label="所在省份">山东省</n-descriptions-item>
                  <n-descriptions-item label="申请人类型">生产企业</n-descriptions-item>
                  <n-descriptions-item label="中文名称"
                    >山东XXXX业集团股份有限公司</n-descriptions-item
                  >
                  <n-descriptions-item label="英文名称"
                    >Shandong xxxx Pharmaceutical Group Stock C.，Ltd.</n-descriptions-item
                  >
                  <n-descriptions-item label="职位">董事长</n-descriptions-item>
                  <n-descriptions-item label="注册地址(住所)">山东省</n-descriptions-item>
                  <n-descriptions-item label="职位">职员</n-descriptions-item>
                  <n-descriptions-item label="联系人">未提供</n-descriptions-item>
                  <n-descriptions-item label="电话">0539-8240000</n-descriptions-item>
                </n-descriptions>
              </div>
            </n-collapse-item>
          </n-collapse-item>
          <n-collapse-item title="2.证明性文件" name="2">
            <template #arrow>
              <n-icon color="#092a80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                >
                  <path
                    opacity=".3"
                    d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8zm0 11l-4-4h8l-4 4z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-5l4-4H8z"
                    fill="currentColor"
                  />
                </svg>
              </n-icon>
            </template>
            <template #header>
              <div class="font-bold">2.证明性文件</div>
              <n-tag type="error" class="ml-2" size="small">审核不通过</n-tag>
              <n-badge :value="1" :offset="offset">
                <n-tag type="error" class="ml-2" size="small">不符项</n-tag>
              </n-badge>
            </template>
            <template #header-extra>
              <n-button
                secondary
                @click="handleButtonClick('药品GMP证书', 'jpg', $event)"
                size="small"
                type="info"
                >附件预览</n-button
              >
            </template>
            <n-data-table :columns="columns" :data="data1" />
            <n-collapse-item title="主要信息提取">
              <div class="p-4 bg-slate-50">
                <n-descriptions :column="2" label-class="font-semibold">
                  <n-descriptions-item label="企业名称">
                    山东XXX药业集团股份有限公司 Shandong xxx Pharmaceutical Group Stock CO., Ltd.
                    Manufacturer
                  </n-descriptions-item>
                  <n-descriptions-item label="地址">
                    山东省 Shandong Province Address
                  </n-descriptions-item>
                  <n-descriptions-item label="认证范围">
                    冻干粉针剂 Lyophilized Powder for Injection (Workshop 1502) Scope of Inspection
                  </n-descriptions-item>
                  <n-descriptions-item label="声明">
                    经审查，符合中华人民共和国《药品生产质量管理规范》要求，特发此证。
                  </n-descriptions-item>
                  <n-descriptions-item label="英文声明">
                    This is to certify that the above-mentioned manufacturer complies with the
                    requirements of Chinese Good Manufacturing Practices for Pharmaceutical
                    Products.
                  </n-descriptions-item>
                  <n-descriptions-item label="有效期至">
                    2024年02月10 有效期至日 2024-02-10 This certificate remains valid until
                  </n-descriptions-item>
                  <n-descriptions-item label="发证机关">
                    山东省药品监督管理局 DMINISTRATION Issued By SHANDONG FOOD.DRUG
                  </n-descriptions-item>
                  <n-descriptions-item label="发证日期"> 2019-12-11 </n-descriptions-item>
                  <n-descriptions-item label="国家药品监督管理局">
                    国家药品监督管理局制 NATIONAL MEDICAL PRODUCTS ADMINISTRATION
                  </n-descriptions-item>
                </n-descriptions>
              </div>
            </n-collapse-item>
          </n-collapse-item>
          <n-collapse-item
            title="3.五年内生产、销售、抽验情况总结，对产品不合格情况应当作出说明"
            name="3"
          >
            <template #arrow>
              <n-icon color="#092a80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                >
                  <path
                    opacity=".3"
                    d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8zm0 11l-4-4h8l-4 4z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-5l4-4H8z"
                    fill="currentColor"
                  />
                </svg>
              </n-icon>
            </template>
            <template #header>
              <div class="font-bold"
                >3.五年内生产、销售、抽验情况总结，对产品不合格情况应当作出说明</div
              >
              <n-tag type="success" class="ml-2" size="small">审核通过</n-tag>
            </template>
            <n-data-table :columns="columns" :data="data2" />
          </n-collapse-item>
          <n-collapse-item title="4.五年内药品临床使用情况及不良反应情况总结" name="4">
            <template #arrow>
              <n-icon color="#092a80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                >
                  <path
                    opacity=".3"
                    d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8zm0 11l-4-4h8l-4 4z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-5l4-4H8z"
                    fill="currentColor"
                  />
                </svg>
              </n-icon>
            </template>
            <template #header>
              <div class="font-bold">4.五年内药品临床使用情况及不良反应情况总结</div>
              <n-tag type="success" class="ml-2" size="small">审核通过</n-tag>
            </template>
            <n-data-table :columns="columns" :data="data3" />
          </n-collapse-item>
          <n-collapse-item
            title="5.1药品批准证明文件或者再注册批准文件中要求继续完成工作的，应当提供工作完成后的总结报告，并附相应资料"
            name="5.1"
          >
            <template #arrow>
              <n-icon color="#092a80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                >
                  <path
                    opacity=".3"
                    d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8zm0 11l-4-4h8l-4 4z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-5l4-4H8z"
                    fill="currentColor"
                  />
                </svg>
              </n-icon>
            </template>
            <template #header>
              <div class="font-bold"
                >5.1药品批准证明文件或者再注册批准文件中要求继续完成工作的，应当提供工作完成后的总结报告，并附相应资料</div
              >
              <n-tag type="success" class="ml-2" size="small">审核通过</n-tag>
            </template>
            <n-data-table :columns="columns" :data="data4" />
          </n-collapse-item>
          <n-collapse-item
            title="5.2首次申请再注册药品需要进行Ⅳ期临床试验的，应当提供Ⅳ期临床试验总结报告"
            name="5.2"
          >
            <template #arrow>
              <n-icon color="#092a80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                >
                  <path
                    opacity=".3"
                    d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8zm0 11l-4-4h8l-4 4z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-5l4-4H8z"
                    fill="currentColor"
                  />
                </svg>
              </n-icon>
            </template>
            <template #header>
              <div class="font-bold"
                >5.2首次申请再注册药品需要进行Ⅳ期临床试验的，应当提供Ⅳ期临床试验总结报告</div
              >

              <n-tag type="success" class="ml-2" size="small">审核通过</n-tag>
            </template>
            <n-data-table :columns="columns" :data="data5" />
          </n-collapse-item>
          <n-collapse-item
            title="5.3首次申请再注册药品有新药监测期的，应当提供监测情况报告"
            name="5.3"
          >
            <template #arrow>
              <n-icon color="#092a80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                >
                  <path
                    opacity=".3"
                    d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8zm0 11l-4-4h8l-4 4z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-5l4-4H8z"
                    fill="currentColor"
                  />
                </svg>
              </n-icon>
            </template>
            <template #header>
              <div class="font-bold">5.3首次申请再注册药品有新药监测期的，应当提供监测情况报告</div>
              <n-tag type="success" class="ml-2" size="small">审核通过</n-tag>
            </template>
            <n-data-table :columns="columns" :data="data6" />
          </n-collapse-item>
          <n-collapse-item
            title="6.提供药品处方、生产工艺、药品标准。凡药品处方、生产工艺、药品标准与上次注册内容有改变的，应当注明具体改变内容，并提供批准证明文件"
            name="6"
          >
            <template #arrow>
              <n-icon color="#092a80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                >
                  <path
                    opacity=".3"
                    d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8zm0 11l-4-4h8l-4 4z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-5l4-4H8z"
                    fill="currentColor"
                  />
                </svg>
              </n-icon>
            </template>
            <template #header>
              <div class="font-bold"
                >6.提供药品处方、生产工艺、药品标准。凡药品处方、生产工艺、药品标准与上次注册内容有改变的，应当注明具体改变内容，并提供批准证明文件</div
              >
              <n-tag type="success" class="ml-2" size="small">审核通过</n-tag>
            </template>
            <n-data-table :columns="columns" :data="data7" />
          </n-collapse-item>
          <n-collapse-item
            title="7.生产药品制剂所用原料药的来源。改变原料药来源的，应当提供批准证明文件"
            name="7"
          >
            <template #arrow>
              <n-icon color="#092a80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                >
                  <path
                    opacity=".3"
                    d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8zm0 11l-4-4h8l-4 4z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-5l4-4H8z"
                    fill="currentColor"
                  />
                </svg>
              </n-icon>
            </template>
            <template #header>
              <div class="font-bold"
                >7.生产药品制剂所用原料药的来源。改变原料药来源的，应当提供批准证明文件</div
              >
              <n-tag type="success" class="ml-2" size="small">审核通过</n-tag>
            </template>

            <n-data-table :columns="columns" :data="data8" />
          </n-collapse-item>
          <n-collapse-item title="8.药品最小销售单元的现行包装、标签和说明书实样" name="8">
            <template #arrow>
              <n-icon color="#092a80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                >
                  <path
                    opacity=".3"
                    d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8zm0 11l-4-4h8l-4 4z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-5l4-4H8z"
                    fill="currentColor"
                  />
                </svg>
              </n-icon>
            </template>
            <template #header>
              <div class="font-bold">8.药品最小销售单元的现行包装、标签和说明书实样</div>
              <n-tag type="error" class="ml-4" size="small"> 审核不通过 </n-tag>
              <n-badge :value="1" :offset="offset">
                <n-tag type="error" class="ml-2" size="small">不符项</n-tag>
              </n-badge>
            </template>
            <template #header-extra>
              <n-button
                secondary
                @click="handleButtonClick('说明书', 'pdf', $event)"
                size="small"
                type="info"
                >附件预览</n-button
              >
            </template>
            <n-data-table :columns="columns" :data="data9" />
            <n-collapse-item title="主要信息提取">
              <div class="p-4 bg-slate-50">
                <n-descriptions :column="2" label-class="font-semibold">
                  <n-descriptions-item label="申请分类"> 再注册申请 </n-descriptions-item>
                  <n-descriptions-item label="注册分类"> 化学药品 </n-descriptions-item>
                  <n-descriptions-item label="资料项目编号"> 6 </n-descriptions-item>
                  <n-descriptions-item label="标题">
                    注射用克林霉素磷酸酯(0.6g)资料6药品最小销售单元的现行标签和说明书实样
                  </n-descriptions-item>
                  <n-descriptions-item label="药品生产企业(加盖公章)">
                    山东XXX药业集团股份有限公司
                  </n-descriptions-item>
                  <n-descriptions-item label="地址"> 山东省 </n-descriptions-item>
                  <n-descriptions-item label="联系人姓名"> ABC </n-descriptions-item>
                </n-descriptions>
              </div>
            </n-collapse-item>
          </n-collapse-item>
          <n-collapse-item title="9.《法人授权委托书》" name="9">
            <template #arrow>
              <n-icon color="#092a80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                >
                  <path
                    opacity=".3"
                    d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8zm0 11l-4-4h8l-4 4z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-5l4-4H8z"
                    fill="currentColor"
                  />
                </svg>
              </n-icon>
            </template>
            <template #header>
              <div class="font-bold">9.《法人授权委托书》</div>
              <n-tag type="success" class="ml-2" size="small">审核通过</n-tag>
            </template>
            <n-data-table :columns="columns" :data="data10" />
          </n-collapse-item>
          <n-collapse-item title="10.申请材料真实性承诺书" name="10">
            <template #arrow>
              <n-icon color="#092a80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                >
                  <path
                    opacity=".3"
                    d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8zm0 11l-4-4h8l-4 4z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-5l4-4H8z"
                    fill="currentColor"
                  />
                </svg>
              </n-icon>
            </template>
            <template #header>
              <div class="font-bold">10..申请材料真实性承诺书</div>
              <n-tag type="error" class="ml-4" size="small"> 审核不通过 </n-tag>
              <n-badge :value="2" :offset="offset">
                <n-tag type="error" class="ml-2" size="small">不符项</n-tag>
              </n-badge>
            </template>
            <template #header-extra>
              <n-button
                secondary
                @click="handleButtonClick('材料真实性保证书', 'pdf', $event)"
                size="small"
                type="info"
                >附件预览</n-button
              >
            </template>
            <n-data-table :columns="columns" :data="data11" />
            <n-collapse-item title="主要信息提取">
              <div class="p-4 bg-slate-50">
                <n-descriptions :column="1" label-class="font-semibold"
                  >>
                  <n-descriptions-item label="山东省药品监督管理局">
                    本单位保证，本次申请遵守国家法律法规规章和有关规定，向你局提交的所有资料均真实、合法、有效。申请资料的电子版与纸质版完全一致，并具有同等法律效力。如有不实之处，本单位愿负相应的法律责任，并承担由此产生的一切后果。
                  </n-descriptions-item>
                  <n-descriptions-item label="法定代表人（签字）"> 未提供 </n-descriptions-item>
                  <n-descriptions-item label="申 报 单 位（盖章）">
                    山东ABC有限公司
                  </n-descriptions-item>
                </n-descriptions>
              </div>
            </n-collapse-item>
          </n-collapse-item>
        </n-collapse>
      </n-card>
    </n-layout>
    <n-modal v-model:show="showModal" style="width: 90%" preset="card" fullscreen>
      <n-card>
        <PreviewFile :src="pdfSrc" style="height: 80vh" :fileType="fileTypeParent" />
      </n-card>
    </n-modal>
  </n-layout>
</template>

<script setup lang="ts">
  import { ref, h } from 'vue';
  import { PreviewFile } from '@/components/PreviewFile';
  import { NButton } from 'naive-ui';
  import type { DataTableColumns } from 'naive-ui';
  let fileTypeParent = 'pdf';
  let pdfSrc = '/说明书.pdf';
  const showModal = ref(false);
  interface Song {
    standard: string;
    result: string;
    description: string;
  }
  const offset = [6, -2] as const;
  function createColumns({}: { play: (row: Song) => void }): DataTableColumns<Song> {
    return [
      {
        title: '材料核查标准',
        key: 'standard',
      },
      {
        title: '核查结果',
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
                color: row.result === '审核不通过' ? 'red' : 'green',
              },
            },
            row.description
          );
        },
      },
    ];
  }
  function outputFileRs() {
    const filePath = '/药品再注册申请资料补正通知书.docx';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = '药品再注册申请资料补正通知书.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const data: Song[] = [
    {
      standard: '申请人所提交的申请材料是否符合依法需提交的全部材料',
      result: '审核不通过',
      description: '合法有效性校验不通过，药品再注册申请表未加盖公章',
    },
    {
      standard: '申请人主体是否合法有效',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请人所申请许可内容是否符合相应申请条件',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请内容是否符合法定权限',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
  ];
  const data1: Song[] = [
    {
      standard: '申请人所申请许可内容是否符合相应申请条件',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请人所提交的申请材料是否符合依法需提交的全部材料',
      result: '审核不通过',
      description: '合法有效性校验不通过,药品GMP证书过期',
    },
    {
      standard: '申请内容是否符合法定权限',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请人主体是否合法有效',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
  ];
  const data2: Song[] = [
    {
      standard: '申请内容是否符合法定权限',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请人主体是否合法有效',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请人所申请许可内容是否符合相应申请条件',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请人所提交的申请材料是否符合依法需提交的全部材料',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
  ];
  const data3: Song[] = [
    {
      standard: '申请人所申请许可内容是否符合相应申请条件',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请内容是否符合法定权限',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请人所提交的申请材料是否符合依法需提交的全部材料',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请人主体是否合法有效',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
  ];
  const data4: Song[] = [
    {
      standard: '申请内容是否符合法定权限',
      result: '审核通过',
      description: '未提供材料附件',
    },
    {
      standard: '申请人所提交的申请材料是否符合依法需提交的全部材料',
      result: '审核通过',
      description: '未提供材料附件',
    },
    {
      standard: '申请人主体是否合法有效',
      result: '审核通过',
      description: '未提供材料附件',
    },
    {
      standard: '申请人所申请许可内容是否符合相应申请条件',
      result: '审核通过',
      description: '未提供材料附件',
    },
  ];
  const data5: Song[] = [
    {
      standard: '申请人所申请许可内容是否符合相应申请条件',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请人所提交的申请材料是否符合依法需提交的全部材料',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请人主体是否合法有效',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请内容是否符合法定权限',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
  ];
  const data6: Song[] = [
    {
      standard: '申请人所申请许可内容是否符合相应申请条件',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请人所提交的申请材料是否符合依法需提交的全部材料',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请人主体是否合法有效',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请内容是否符合法定权限',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
  ];
  const data7: Song[] = [
    {
      standard: '申请人所申请许可内容是否符合相应申请条件',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请人所提交的申请材料是否符合依法需提交的全部材料',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请内容是否符合法定权限',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请人主体是否合法有效',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
  ];
  const data8: Song[] = [
    {
      standard: '申请人所申请许可内容是否符合相应申请条件',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请人主体是否合法有效',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请人所提交的申请材料是否符合依法需提交的全部材料',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请内容是否符合法定权限',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
  ];
  const data9: Song[] = [
    {
      standard: '申请人所申请许可内容是否符合相应申请条件',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请人所提交的申请材料是否符合依法需提交的全部材料',
      result: '审核不通过',
      description: '一致性审核不通过，说明书中规格与申报规格不一致',
    },
    {
      standard: '申请人主体是否合法有效',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
    {
      standard: '申请内容是否符合法定权限',
      result: '审核通过',
      description: '材料完备，格式符合要求',
    },
  ];
  const data10: Song[] = [
    {
      standard: '是否提供材料',
      result: '审核通过',
      description: '未提供材料附件',
    },
  ];
  const data11: Song[] = [
    {
      standard: '保证书申报信息一致性',
      result: '审核不通过',
      description: '合法有效性校验不通过，保证书未加盖公章',
    },
    {
      standard: '申请人主体信息一致性',
      result: '审核不通过',
      description: '申请人主体信息一致性审核不通过，保证书中企业名称与申报企业不一致',
    },
  ];
  const columns = createColumns({ play });
  function play(row) {
    console.log('Playing:', row);
  }
  function handleButtonClick(param1, filetype, event) {
    event.stopPropagation();
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
