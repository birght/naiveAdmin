<template>
  <n-layout>
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
    <n-layout has-sider>
      <n-row :gutter="12">
        <n-col :span="10">
          <n-card class="mt-2 shadow-lg" :content-style="{ padding: '0px' }">
            <n-row>
              <n-col :span="18" class="pl-4">
                <div class="text-lg font-bold">辽宁某堂制药有限公司 </div>
                <div class="mt-3 text-sm text-neutral-400">91371300MA3R064567</div>
                <div class="text-neutral-400">
                  <span class="mt-3 text-sm text-neutral-400">法定代表人:</span>
                  <span class="mt-3 ml-2 text-sm text-neutral-400">张代表</span>
                  <span class="mt-3 ml-4 text-sm text-neutral-400">地址:</span>
                  <span class="mt-3 ml-2 text-sm text-neutral-400">沈阳市高新区工业三路</span>
                </div>
              </n-col>
              <n-col :span="6" class="pt-6 pr-3 ml-auto text-right">
                <n-button type="info" @click="startReveal"> 生成检查方案 </n-button>
              </n-col>
            </n-row>
            <n-divider style="margin-bottom: 10px" />
            <n-tabs type="line" animated class="pl-4">
              <n-tab-pane name="tableve_11" tab="检测事项" class="py-4">
                <n-tabs type="line" tab-placement="left" animated placement="left">
                  <n-tab-pane name="tableve_21" tab="投诉举报">
                    <div class="m-2 info_cc" v-if="currentPage === 1">
                      <!-- Complaint Record Header -->
                      <div class="flex justify-between mb-4 font-semibold shi_label1">
                        <div>投诉举报记录 一</div>
                        <div>
                          <n-button type="info" ghost @click="showModal = true">
                            材料
                            <template #icon>
                              <n-icon>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path
                                    d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
                                  />
                                </svg>
                              </n-icon>
                            </template>
                          </n-button>
                        </div>
                      </div>

                      <!-- Complaint Record Form -->
                      <div class="h-auto p-3 bg-slate-50">
                        <div class="flex justify-between m-4">
                          <div class="block mb-2 font-medium">材料名称</div>
                          <div>
                            <a target="_blank" class="text-blue-500 hover:underline"> 查看材料 </a>
                          </div>
                        </div>
                        <!-- 是否使用 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">是否使用</label>
                          <n-radio-group v-model:value="checkedValue">
                            <n-radio value="使用">使用</n-radio>
                            <n-radio value="举不使用报">不使用</n-radio>
                          </n-radio-group>
                        </div>
                        <!-- 类型 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">类型</label>
                          <n-radio-group v-model:value="complaintType">
                            <n-radio value="投诉">投诉</n-radio>
                            <n-radio value="举报">举报</n-radio>
                          </n-radio-group>
                        </div>

                        <!-- 内容 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">内容</label>
                          <n-input v-model:value="content" placeholder="请输入内容" />
                        </div>

                        <!-- 登记单位 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">登记单位</label>
                          <n-input v-model:value="registrationUnit" placeholder="请输入登记单位" />
                        </div>

                        <!-- 投诉人 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">投诉人</label>
                          <n-input v-model:value="complainantName" placeholder="请输入投诉人姓名" />
                        </div>

                        <!-- 被投诉人 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">被投诉人</label>
                          <n-input v-model:value="defendantName" placeholder="请输入被投诉人名称" />
                        </div>

                        <!-- 处理状态 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">处理状态</label>
                          <n-steps v-model:value:current="currentStep" status="process">
                            <n-step title="已受理" />
                            <n-step title="处理中" />
                            <n-step title="已办结" />
                          </n-steps>
                        </div>
                      </div>
                    </div>
                    <div class="m-2" v-if="currentPage === 2">
                      <!-- Complaint Record Header -->
                      <div class="mb-4 font-semibold shi_label">投诉举报记录 二</div>

                      <!-- Complaint Record Form -->
                      <div class="h-auto p-3 bg-slate-50">
                        <!-- 是否使用 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">是否使用</label>
                          <n-radio-group v-model:value="checkedValue">
                            <n-radio value="使用">使用</n-radio>
                            <n-radio value="举不使用报">不使用</n-radio>
                          </n-radio-group>
                        </div>
                        <!-- 类型 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">类型</label>
                          <n-radio-group v-model:value="complaintType2">
                            <n-radio value="投诉">投诉</n-radio>
                            <n-radio value="举报">举报</n-radio>
                          </n-radio-group>
                        </div>
                        <!-- 内容 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">内容</label>
                          <n-input v-model:value="content2" placeholder="请输入内容" />
                        </div>
                        <!-- 登记单位 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">登记单位</label>
                          <n-input v-model:value="registrationUnit2" placeholder="请输入登记单位" />
                        </div>

                        <!-- 投诉人 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">投诉人</label>
                          <n-input
                            v-model:value="complainantName2"
                            placeholder="请输入投诉人姓名"
                          />
                        </div>

                        <!-- 被投诉人 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">被投诉人</label>
                          <n-input
                            v-model:value="defendantName2"
                            placeholder="请输入被投诉人名称"
                          />
                        </div>

                        <!-- 处理状态 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">处理状态</label>
                          <n-steps v-model:value:current="currentStep" status="process">
                            <n-step title="已受理" />
                            <n-step title="处理中" />
                            <n-step title="已办结" />
                          </n-steps>
                        </div>
                      </div>
                    </div>
                    <!-- Pagination Component -->
                    <div class="px-3 mt-4">
                      <div class="pagination-wrapper">
                        <n-button @click="handlePrev" :disabled="currentPage === 1" size="small"
                          >上一页</n-button
                        >
                        <span class="current-page">{{ currentPage }}</span>
                        <n-button
                          @click="handleNext"
                          :disabled="currentPage === pageCount"
                          size="small"
                          >下一页</n-button
                        >
                      </div>
                    </div>
                  </n-tab-pane>
                  <n-tab-pane name="tableve_22" tab="检验监测">
                    <div class="m-2" v-if="currentPage === 1">
                      <!-- Report Header -->
                      <div class="mb-4 font-semibold shi_label">药品检验报告 报告一</div>

                      <!-- Report Form -->
                      <div class="h-auto p-3 bg-slate-50">
                        <!-- 是否使用 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">是否使用</label>
                          <n-radio-group v-model:value="checkedValue">
                            <n-radio value="使用">使用</n-radio>
                            <n-radio value="举不使用报">不使用</n-radio>
                          </n-radio-group>
                        </div>
                        <!-- 报告编号 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">报告编号</label>
                          <n-input v-model:value="reportNumber" placeholder="QW201505789" />
                        </div>

                        <!-- 检品名称 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">检品名称</label>
                          <n-input v-model:value="sampleName" placeholder="眼用全氟丙烷气体" />
                        </div>

                        <!-- 检品批号 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">检品批号</label>
                          <n-input v-model:value="batchNumber" placeholder="130601" />
                        </div>

                        <!-- 检验内容 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">检验内容</label>
                          <n-input
                            v-model:value="inspectionContent"
                            placeholder="含量、皮内反应、细胞毒性"
                          />
                        </div>

                        <!-- 检验依据 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">检验依据</label>
                          <n-input
                            v-model:value="inspectionBasis"
                            placeholder="YZB/国 4936-2014 《眼用全氟丙烷气体》、GB/T16886.10-2005"
                          />
                        </div>

                        <!-- 检验机构 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">检验机构</label>
                          <n-input
                            v-model:value="inspectionAgency"
                            placeholder="中国食品药品检定研究院"
                          />
                        </div>

                        <!-- 检验结果 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">检验结果（有问题类）</label>
                          <n-input
                            v-model:value="inspectionResult"
                            placeholder="本品按YZB/国4936-2014《眼用全氟丙烷气体》、GB/T16886.10-2005 检验，有皮内刺激反应，不符合规定。"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- Pagination Component -->
                    <div class="px-3 mt-4">
                      <div class="pagination-wrapper">
                        <n-button @click="handlePrev" :disabled="currentPage === 1" size="small"
                          >上一页</n-button
                        >
                        <span class="current-page">{{ currentPage }}</span>
                        <n-button
                          @click="handleNext"
                          :disabled="currentPage === pageCount"
                          size="small"
                          >下一页</n-button
                        >
                      </div>
                    </div>
                  </n-tab-pane>
                  <n-tab-pane name="tableve_23" tab="不良反应">
                    <div class="m-2">
                      <!-- Adverse Reaction Header -->
                      <div class="mb-4 font-semibold shi_label">不良反应情况 记录一</div>

                      <!-- Adverse Reaction Form -->
                      <div class="h-auto p-3 bg-slate-50">
                        <!-- 是否使用 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">是否使用</label>
                          <n-radio-group v-model:value="checkedValue">
                            <n-radio value="使用">使用</n-radio>
                            <n-radio value="举不使用报">不使用</n-radio>
                          </n-radio-group>
                        </div>
                        <!-- 不良反应名称及描述 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">不良反应名称及描述</label>
                          <n-input
                            v-model:value="adverseReactionDescription"
                            placeholder="患者因高血压、高胆固醇症服药治疗，从 2013.03.01 开始口服阿托伐他丁治疗高胆固醇症。2013.03.25 左右患者开始出现眼巩膜变黄、尿黄症状。03.29 因上述症状入院治疗，入院查体:03.29 结果:轻度黄疸，无肌痛症状，胆红素、转氨酶偏高，肾功能正常，尿胆红素(++);03.30 结果:患者各项肝炎检查阴性，腹部彩超正常;03.31 检查心肌酶:AST131.0u/L、LDH 278u/L、CK 314u/L、CK-MB67.0u/L。03.30 予以停用阿托伐他丁，护肝治疗。04.09 复查除直接胆红素和谷丙转氨酶稍偏高，心肌酶各项指标均恢复正常，黄疸症状缓解。"
                          />
                        </div>

                        <!-- 不良反应事件结果 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">不良反应事件结果</label>
                          <n-input v-model:value="adverseReactionResult" placeholder="未好转" />
                        </div>

                        <!-- 不良反应/事件名称 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">不良反应/事件名称</label>
                          <n-input v-model:value="adverseReactionName" placeholder="黄疸" />
                        </div>

                        <!-- 发生时间 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">发生时间</label>
                          <n-input v-model:value="occurrenceDate" placeholder="2013年3月25日" />
                        </div>

                        <!-- 药品名称 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">药品名称</label>
                          <n-input v-model:value="drugName" placeholder="阿托伐他汀钙片" />
                        </div>

                        <!-- 报告者信息 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">报告者信息</label>
                          <n-input v-model:value="reporterInfo" placeholder="某医院" />
                        </div>
                      </div>
                    </div>
                  </n-tab-pane>
                  <n-tab-pane name="tableve_24" tab="申报资料">
                    <div class="m-2">
                      <!-- Submission Material Header -->
                      <div class="mb-4 font-semibold shi_label">企业申报材料情况 材料一</div>

                      <!-- Submission Material Form -->
                      <div class="h-auto p-3 bg-slate-50">
                        <!-- 是否使用 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">是否使用</label>
                          <n-radio-group v-model:value="checkedValue">
                            <n-radio value="使用">使用</n-radio>
                            <n-radio value="举不使用报">不使用</n-radio>
                          </n-radio-group>
                        </div>
                        <!-- 材料名称 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">材料名称</label>
                          <n-input v-model:value="materialName" placeholder="组织机构及人员信息" />
                        </div>

                        <!-- 申报日期 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">申报日期</label>
                          <n-input v-model:value="submissionDate" placeholder="2024-7-1" />
                        </div>

                        <!-- 分析结果 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">分析结果</label>
                          <n-input
                            v-model:value="analysisResult"
                            placeholder="组织机构及人员信息材料疑似存在故意隐瞒情形"
                          />
                        </div>
                      </div>
                    </div>
                  </n-tab-pane>
                  <n-tab-pane name="tableve_25" tab="违法违规">
                    <div class="m-2">
                      <!-- Violation Header -->
                      <div class="mb-4 font-semibold shi_label">违法违规情况 记录一</div>

                      <!-- Violation Form -->
                      <div class="h-auto p-3 bg-slate-50">
                        <!-- 是否使用 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">是否使用</label>
                          <n-radio-group v-model:value="checkedValue">
                            <n-radio value="使用">使用</n-radio>
                            <n-radio value="举不使用报">不使用</n-radio>
                          </n-radio-group>
                        </div>
                        <!-- 行政相对人名称 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">行政相对人名称</label>
                          <n-input
                            v-model:value="relativePersonName1"
                            placeholder="辽宁某堂制药有限公司"
                          />
                        </div>

                        <!-- 案件名称 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">案件名称</label>
                          <n-input
                            v-model:value="caseName1"
                            placeholder="严重违反《药品生产质量管理规范》"
                          />
                        </div>

                        <!-- 违法事实 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">违法事实</label>
                          <n-input
                            v-model:value="illegalFact1"
                            placeholder="当事人2020年3月至2021年7月期间生产维儿康洗液和维妇康洗液过程中，生产过程控制、质量控制的记录和数据不真实"
                          />
                        </div>

                        <!-- 处罚依据 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">处罚依据</label>
                          <n-input
                            v-model:value="punishmentBasis1"
                            placeholder="依据《药品管理法》第一百二十六条、《药品生产监督管理办法》第六十九条第四项规定"
                          />
                        </div>

                        <!-- 处罚内容 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">处罚内容</label>
                          <n-input
                            v-model:value="punishmentContent1"
                            placeholder="对此公司处50万元罚款；责令此公司停产1个月；"
                          />
                        </div>

                        <!-- 处罚日期 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">处罚日期</label>
                          <n-input v-model:value="punishmentDate1" placeholder="2024-7-1" />
                        </div>
                      </div>

                      <!-- Violation Header -->
                      <div class="mb-4 font-semibold shi_label" v-if="currentPage === 2"
                        >违法违规情况 记录二</div
                      >

                      <!-- Violation Form -->
                      <div class="h-auto p-3 bg-slate-50" v-if="currentPage === 2">
                        <!-- 是否使用 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">是否使用</label>
                          <n-radio-group v-model:value="checkedValue">
                            <n-radio value="使用">使用</n-radio>
                            <n-radio value="举不使用报">不使用</n-radio>
                          </n-radio-group>
                        </div>
                        <!-- 行政相对人名称 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">行政相对人名称</label>
                          <n-input
                            v-model:value="relativePersonName2"
                            placeholder="辽宁某堂制药有限公司"
                          />
                        </div>

                        <!-- 案件名称 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">案件名称</label>
                          <n-input
                            v-model:value="caseName2"
                            placeholder="生产销售不符合国家标准的化妆品"
                          />
                        </div>

                        <!-- 违法事实 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">违法事实</label>
                          <n-input
                            v-model:value="illegalFact2"
                            placeholder="2021 年 9 月 10 日，本局在上海市杨浦区共青路 486 号对当事人生产的九维鱼肝油（批号：201001；规格：复方；包装规 格：500 克/瓶）进行抽样，经上海市食品药品检验研究院检验，该批药品【性状】项和【含量测定】项下维生素A含量均不符 合规定（检验依据：国家药品监督管理局国家药品标准（试行）（地标升国标）第十三册 WS-10001-（HD-1201）-2002）。"
                          />
                        </div>

                        <!-- 处罚依据 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">处罚依据</label>
                          <n-input
                            v-model:value="punishmentBasis2"
                            placeholder="《中华人民共和国药品管理法》"
                          />
                        </div>

                        <!-- 处罚内容 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">处罚内容</label>
                          <n-input
                            v-model:value="punishmentContent2"
                            placeholder="1、罚款(1500000元) 2、没收违法所得(76645.14元)"
                          />
                        </div>

                        <!-- 处罚日期 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">处罚日期</label>
                          <n-input v-model:value="punishmentDate2" placeholder="2022-7-1" />
                        </div>
                      </div>
                    </div>
                  </n-tab-pane>
                  <n-tab-pane name="tableve_26" tab="信用记录">
                    <div class="m-2" v-if="currentPage === 1">
                      <!-- Credit Record Header -->
                      <div class="mb-4 font-semibold shi_label">信用记录</div>

                      <!-- Credit Record Form -->
                      <div class="h-auto p-3 bg-slate-50">
                        <!-- 是否使用 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">是否使用</label>
                          <n-radio-group v-model:value="checkedValue">
                            <n-radio value="使用">使用</n-radio>
                            <n-radio value="举不使用报">不使用</n-radio>
                          </n-radio-group>
                        </div>
                        <!-- 行政处罚信息 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">行政处罚信息</label>
                          <n-input
                            v-model:value="administrativePenaltyInfo"
                            placeholder="行政处罚信息"
                          />
                        </div>

                        <!-- 列入经营异常名录信息 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">列入经营异常名录信息</label>
                          <n-input
                            v-model:value="abnormalBusinessListInfo"
                            placeholder="列入经营异常名录信息"
                          />
                        </div>

                        <!-- 列入严重违法失信名单（黑名单）信息 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium"
                            >列入严重违法失信名单（黑名单）信息</label
                          >
                          <n-input
                            v-model:value="blacklistInfo"
                            placeholder="列入严重违法失信名单（黑名单）信息"
                          />
                        </div>
                      </div>
                    </div>
                  </n-tab-pane>
                  <n-tab-pane name="tableve_27" tab="人员变更">
                    <div class="m-2">
                      <!-- Personnel Change Header -->
                      <div class="mb-4 font-semibold shi_label"
                        >人员变更情况 关键人员变动记录一</div
                      >
                      <!-- Personnel Change Form -->
                      <div class="h-auto p-3 bg-slate-50">
                        <!-- 是否使用 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">是否使用</label>
                          <n-radio-group v-model:value="checkedValue">
                            <n-radio value="使用">使用</n-radio>
                            <n-radio value="举不使用报">不使用</n-radio>
                          </n-radio-group>
                        </div>
                        <!-- 事项名称 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">事项名称</label>
                          <n-input v-model:value="itemName1" placeholder="药品生产许可证变更" />
                        </div>

                        <!-- 变更人员 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">变更人员</label>
                          <n-input v-model:value="changedPerson1" placeholder="变更质量负责人" />
                        </div>

                        <!-- 变更原因 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">变更原因</label>
                          <n-input v-model:value="changeReason1" placeholder="人员变化" />
                        </div>

                        <!-- 变更日期 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">变更日期</label>
                          <n-input v-model:value="changeDate1" placeholder="2022-7-1" />
                        </div>
                      </div>
                    </div>
                    <div class="m-2">
                      <div class="mb-4 font-semibold shi_label"
                        >人员变更情况 关键人员变动记录二</div
                      >

                      <div class="h-auto p-3 bg-slate-50">
                        <!-- 是否使用 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">是否使用</label>
                          <n-radio
                            :checked="checkedValue2 === '不使用'"
                            value="1"
                            name="personnel-change-demo-2"
                          >
                            不使用
                          </n-radio>
                          <n-radio
                            :checked="checkedValue2 === '使用'"
                            value="2"
                            name="personnel-change-demo-2"
                          >
                            使用
                          </n-radio>
                        </div>
                        <!-- 事项名称 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">事项名称</label>
                          <n-input v-model:value="itemName2" placeholder="药品生产许可证变更" />
                        </div>

                        <!-- 变更人员 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">变更人员</label>
                          <n-input v-model:value="changedPerson2" placeholder="生产负责人变更" />
                        </div>

                        <!-- 变更原因 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">变更原因</label>
                          <n-input v-model:value="changeReason2" placeholder="人员变化" />
                        </div>

                        <!-- 变更日期 -->
                        <div class="mb-4">
                          <label class="block mb-2 font-medium">变更日期</label>
                          <n-input v-model:value="changeDate2" placeholder="2022-7-1" />
                        </div>
                      </div>
                    </div>
                  </n-tab-pane>
                </n-tabs>
              </n-tab-pane>
              <n-tab-pane name="tableve_12" tab="其他"> 暂无 </n-tab-pane>
            </n-tabs>
          </n-card>
        </n-col>
        <n-col :span="14">
          <div class="word_cc">
            <div class="flex items-center justify-between p-2 word_head">
              <div class="pl-4 text-blue-600"> 最终报告 </div>
              <div class="flex items-center gap-4 align-middle justify-items-center">
                <div class="">
                  <n-button type="warning" strong secondary size="small"> 编辑中 </n-button>
                </div>
                <div class="text-xs text-gray-400">每2分钟自动保存</div>
                <div class="flex items-center ml-3 cursor-pointer">
                  <n-icon size="20" color="#2080f0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          d="M3 5.75A2.75 2.75 0 0 1 5.75 3h9.964a3.25 3.25 0 0 1 2.299.952l2.035 2.035c.61.61.952 1.437.952 2.299v9.964A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75zM5.75 4.5c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25H6v-5.25A2.25 2.25 0 0 1 8.25 12h7.5A2.25 2.25 0 0 1 18 14.25v5.25h.25c.69 0 1.25-.56 1.25-1.25V8.286c0-.465-.184-.91-.513-1.238l-2.035-2.035a1.75 1.75 0 0 0-.952-.49V7.25a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.25 2.25 0 0 1 7 7.25V4.5H5.75zm10.75 15v-5.25a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v5.25h9zm-8-15v2.75c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75V4.5h-6z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </n-icon>
                  <span class="ml-1 text-base text-blue-400" @click="savefunc">保存</span>
                </div>
                <div class="flex items-center ml-3 cursor-pointer">
                  <n-icon size="20" color="#2080f0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"
                        fill="currentColor"
                      />
                    </svg>
                  </n-icon>
                  <span class="ml-1 text-base text-blue-400" @click="exportToWord">导出</span>
                </div>
                <div class="flex items-center ml-3 cursor-pointer">
                  <n-icon size="20" color="#2080f0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 20 20"
                    >
                      <g fill="none">
                        <path
                          d="M5 4.5A1.5 1.5 0 0 1 6.5 3h7A1.5 1.5 0 0 1 15 4.5V5h.5A2.5 2.5 0 0 1 18 7.5v5a1.5 1.5 0 0 1-1.5 1.5H15v1.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 5 15.5V14H3.5A1.5 1.5 0 0 1 2 12.5v-5A2.5 2.5 0 0 1 4.5 5H5v-.5zM6 5h8v-.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V5zm-1 8v-1.5A1.5 1.5 0 0 1 6.5 10h7a1.5 1.5 0 0 1 1.5 1.5V13h1.5a.5.5 0 0 0 .5-.5v-5A1.5 1.5 0 0 0 15.5 6h-11A1.5 1.5 0 0 0 3 7.5v5a.5.5 0 0 0 .5.5H5zm1.5-2a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-7z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </n-icon>
                  <span class="ml-1 text-base text-blue-400">打印</span>
                </div>
              </div>
            </div>
            <div class="word_doc" ref="shi">
              <div class="text-center word_doc_title">
                <div class="text-3xl font-bold text-center">辽宁某堂制药有限公司 </div>
                <div class="text-lg font-bold text-center">91371300MA3R064567</div>
                <div class="text-lg font-bold text-center">(最终报告)</div>
              </div>
              <div class="mt-3 text-sm text-right text-gray-400 word_tip"> 日期: 2024-07-01 </div>
              <div class="mt-1 border-t border-gray-300"></div>
              <div class="word_section" v-if="sectionVisibility[0]">
                <h1 class="mb-4 text-xl font-bold">基础信息</h1>
                <div class="flex">
                  <div class="flex-none w-20 text-left">公司名:</div>
                  <div>辽宁某堂制药有限公司</div>
                </div>
                <div class="flex">
                  <div class="flex-none w-20 text-left">简介:</div>
                  <div>
                    辽宁某堂制药有限公司位于沈阳市高新区工业三路，生产范围为眼用全氟丙烷气体、人工蛋白等。根据《药品生产监督管理办法》的规定，结合《2024年沈阳市药品上市后生产监管工作计划》法规要求，决定对其实施上市后药GMP符合性检查及有因检查。
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-none w-20 text-left">检查编号:</div>
                  <div>91371300MA3R064567 </div>
                </div>
              </div>
              <div class="word_section" v-if="sectionVisibility[1]">
                <h1 class="mb-4 text-xl font-bold">检查背景</h1>
                <div class="flex">
                  <div class="flex-none w-20 text-left">检查原因:</div>
                  <div>
                    <p>1、投诉举报</p>
                    <p
                      >山东省药品监督管理局 收到 投诉人 无名氏 对 被投诉人 山东京御堂制药有限公司
                      关于 药品“含量测定”项不符合规定 的投诉举报线索。</p
                    >
                    <p>2、检验监测</p>
                    <p>通过药品检验报告QW201505789、SW200900439了解到存在不符合规范情况</p>
                    <p>3、不良反应</p>
                    <p>存在药品不良反应记录，具体信息如下：</p>
                    <p
                      >不良反应名称及描述：患者因高血压、高胆固醇症服药治疗，从 2013.03.01
                      开始口服阿托伐他丁治疗高胆固醇症。2013.03.25
                      左右患者开始出现眼巩膜变黄、尿黄症状。03.29 因上述症状入院治疗，入院查体:03.29
                      结果:轻度黄疸，无肌痛症状，胆红素、转氨酶偏高，肾功能正常，尿胆红素(++);03.30
                      结果:患者各项肝炎检查阴性，腹部彩超正常;03.31 检查心肌酶:AST131.0u/L、LDH
                      278u/L、CK 314u/L、CK-MB67.0u/L。03.30 予以停用阿托伐他丁，护肝治疗。04.09
                      复查除直接胆红素和谷丙转氨酶稍偏高，心肌酶各项指标均恢复正常，黄疸症状缓解。</p
                    >
                    <p>不良反应事件结果：未好转</p>
                    <p>不良反应/事件名称：黄疸</p>
                    <p>发生时间：2013年3月25日</p>
                    <p>药品名称：阿托伐他汀钙片</p>
                    <p>报告者信息：某医院</p>
                    <p>4、申报资料</p>
                    <p>申报资料疑似存在问题：</p>
                    <p
                      >组织机构及人员信息材料疑似存在故意隐瞒情形、企业资质证明材料疑似存在上报信息与实际情况不符情形</p
                    >
                    <p>5、违法违规</p>
                    <p
                      >企业存在违法违规记录，案件名称：严重违反《药品生产质量管理规范》、生产销售不符合国家标准的化妆品</p
                    >
                    <p>6、信用记录</p>
                    <p
                      >此企业在国家企业信用信息公示系统中，存在行政处罚信息、列入经营异常名录信息、列入严重违法失信名单（黑名单）信息</p
                    >
                    <p>7、人员变更</p>
                    <p>此企业关键人员（质量负责人、生产负责人）变更频繁</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-none w-20 text-left">检查对象:</div>
                  <div>
                    <p>企业名称：辽宁某堂制药有限公司</p>
                    <p>企业地址：沈阳市高新区工业三路</p>
                  </div>
                </div>
              </div>
              <div class="word_section" v-if="sectionVisibility[2]">
                <h1 class="mb-4 text-xl font-bold">检查目标</h1>
                <div class="flex">
                  <div class="flex-none w-20 text-left">主要目标:</div>
                  <div>
                    <p>明确本次检查的主要目标，如核实药品生产过程、质量控制措施、合规性等。</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-none w-20 text-left">次要目标:</div>
                  <div>
                    <p>列出次要目标，如评估药品不良反应监测系统、检查药品储存条件等。</p>
                  </div>
                </div>
              </div>
              <div class="word_section" v-if="sectionVisibility[3]">
                <h1 class="mb-4 text-xl font-bold">检查时间</h1>
                <div class="flex">
                  <div class="flex-none w-20 text-left">检查日期:</div>
                  <div>2024年7月1日 09：00~12：00</div>
                </div>
                <div class="flex">
                  <div class="flex-none w-20 text-left">检查时长:</div>
                  <div>3小时</div>
                </div>
              </div>
              <div class="word_section" v-if="sectionVisibility[4]">
                <h1 class="mb-4 text-xl font-bold">检查人员</h1>
                <div class="flex">
                  <div class="flex-none w-20 text-left">检查组成员:</div>
                  <div>
                    <p>组长：李某某</p>
                    <p>组员：张某、王某、代某</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-none w-20 text-left">专家参与:</div>
                  <div>
                    <p>（如有必要，列出专家名单及其专业领域）</p>
                  </div>
                </div>
              </div>
              <div class="word_section" v-if="sectionVisibility[5]">
                <h1 class="mb-4 text-xl font-bold">检查方式</h1>
                <div class="flex">
                  <div class="flex-none w-20 text-left">现场检查:</div>
                  <div>
                    <p>详细描述现场检查的具体步骤和内容。</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-none w-20 text-left">文件审查:</div>
                  <div>
                    <p>列出需要审查的文件和资料清单。</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-none w-20 text-left">抽样检验:</div>
                  <div>
                    <p>如需抽样检验，明确抽样方法和检验项目。</p>
                  </div>
                </div>
              </div>
              <div class="word_section" v-if="sectionVisibility[6]">
                <h1 class="mb-4 text-xl font-bold">检查内容</h1>
                <div class="flex">
                  <div class="flex-none w-20 text-left">生产过程:</div>
                  <div>
                    <p>详细描述生产过程中的关键环节，如原料采购、生产操作、质量控制等。</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-none w-20 text-left">质量控制:</div>
                  <div>
                    <p>列出质量控制措施，如检验方法、检验频率等。</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-none w-20 text-left">合规性:</div>
                  <div>
                    <p>评估企业是否遵守相关法律法规和药品质量管理规范。</p>
                  </div>
                </div>
              </div>
              <div class="word_section" v-if="sectionVisibility[7]">
                <h1 class="mb-4 text-xl font-bold">检查纪律和注意事项</h1>
                <div class="flex">
                  <div class="flex-none w-20 text-left">纪律要求:</div>
                  <div>
                    <p>明确检查组成员的行为规范和纪律要求。</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-none w-20 text-left">注意事项:</div>
                  <div>
                    <p>列出在检查过程中需要注意的事项，如保密要求、记录要求等。</p>
                  </div>
                </div>
              </div>
              <div class="word_section" v-if="sectionVisibility[8]">
                <h1 class="mb-4 text-xl font-bold">其他要求</h1>
                <div class="flex">
                  <div class="flex-none w-20 text-left">(一)</div>
                  <div>
                    <p
                      >检查组应根据检查方案，运用质量风险管理的理念综合分析现场检查情况，评估企业生产和质量管理的风险，最终给出明确的检查结论。</p
                    >
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-none w-20 text-left">(二)</div>
                  <div>
                    <p
                      >被检查单位应在现场检查结束后20个工作日内完成缺陷项目的整改工作，将整改报告报检查机构;无法按期完成整改的，应制定切实可行的整改计划，并列入整改报告。整改报告应针对缺陷成因及风险评估情况，逐项描述风险控制措施及实施结果，至少包含缺陷描述、缺陷调查分析、风险评估、风险控制、整改审核、整改效果评价及相关佐证图文材料等。</p
                    >
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-none w-20 text-left">(三)</div>
                  <div>
                    <p>检查过程应注意遵守保密、廉政等相关要求。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </n-col>
      </n-row>
    </n-layout>
  </n-layout>
  <n-back-top :listen-to="target" :bottom="120" :visibility-height="10" />
  <n-modal v-model:show="showModal" title="上传附件" preset="dialog" style="width: 30%">
    <n-upload
      action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
      :headers="{
        'naive-info': 'hello!',
      }"
      :data="{
        'naive-data': 'cool! naive!',
      }"
    >
      <n-button>上传文件</n-button>
    </n-upload>
  </n-modal>
</template>
<script setup>
  import { ref, onMounted, nextTick } from 'vue';
  import { Document, Packer, Paragraph, TextRun } from 'docx';
  import { useMessage } from 'naive-ui';
  const message = useMessage();
  const showModal = ref(false);
  const currentPage = ref(1);
  const pageCount = 2;
  const checkedValue = ref('使用');
  const complaintType = ref('投诉');
  const content = ref('药品“含量测定”项不符合规定');
  const registrationUnit = ref('山东省药品监督管理局');
  const complainantName = ref('无名氏');
  const defendantName = ref('山东京所属堂制药有限公司');
  const checkedValue2 = ref('不使用');
  const complaintType2 = ref('不投诉');
  const content2 = ref('药品“含量测定”项不符合规定，其他测试项内容也不行');
  const registrationUnit2 = ref('华东制药厂');
  const complainantName2 = ref('宋教仁');
  const defendantName2 = ref('山东省潍坊市菲亚特颜公司');
  const currentStep = ref(2);

  // tab2

  const reportNumber = ref('QW201505789');
  const sampleName = ref('眼用全氟丙烷气体');
  const batchNumber = ref('130601');
  const inspectionContent = ref('含量、皮内反应、细胞毒性');
  const inspectionBasis = ref('YZB/国 4936-2014 《眼用全氟丙烷气体》、GB/T16886.10-2005');
  const inspectionAgency = ref('中国食品药品检定研究院');
  const inspectionResult = ref(
    '本品按YZB/国4936-2014《眼用全氟丙烷气体》、GB/T16886.10-2005 检验，有皮内刺激反应，不符合规定。'
  );

  // 不良反应

  const adverseReactionDescription = ref(
    '患者因高血压、高胆固醇症服药治疗，从 2013.03.01 开始口服阿托伐他丁治疗高胆固醇症。2013.03.25 左右患者开始出现眼巩膜变黄、尿黄症状。03.29 因上述症状入院治疗，入院查体:03.29 结果:轻度黄疸，无肌痛症状，胆红素、转氨酶偏高，肾功能正常，尿胆红素(++);03.30 结果:患者各项肝炎检查阴性，腹部彩超正常;03.31 检查心肌酶:AST131.0u/L、LDH 278u/L、CK 314u/L、CK-MB67.0u/L。03.30 予以停用阿托伐他丁，护肝治疗。04.09 复查除直接胆红素和谷丙转氨酶稍偏高，心肌酶各项指标均恢复正常，黄疸症状缓解。'
  );
  const adverseReactionResult = ref('未好转');
  const adverseReactionName = ref('黄疸');
  const occurrenceDate = ref('2013年3月25日');
  const drugName = ref('阿托伐他汀钙片');
  const reporterInfo = ref('某医院');

  // 申报材料
  const materialName = ref('组织机构及人员信息');
  const submissionDate = ref('2024-7-1');
  const analysisResult = ref('组织机构及人员信息材料疑似存在故意隐瞒情形');

  // 违法违规

  const checkedValue1 = ref('使用');
  const relativePersonName1 = ref('辽宁某堂制药有限公司');
  const caseName1 = ref('严重违反《药品生产质量管理规范》');
  const illegalFact1 = ref(
    '当事人2020年3月至2021年7月期间生产维儿康洗液和维妇康洗液过程中，生产过程控制、质量控制的记录和数据不真实'
  );
  const punishmentBasis1 = ref(
    '依据《药品管理法》第一百二十六条、《药品生产监督管理办法》第六十九条第四项规定'
  );
  const punishmentContent1 = ref('对此公司处50万元罚款；责令此公司停产1个月；');
  const punishmentDate1 = ref('2024-7-1');

  const relativePersonName2 = ref('辽宁某堂制药有限公司');
  const caseName2 = ref('生产销售不符合国家标准的化妆品');
  const illegalFact2 = ref(
    '2021 年 9 月 10 日，本局在上海市杨浦区共青路 486 号对当事人生产的九维鱼肝油（批号：201001；规格：复方；包装规 格：500 克/瓶）进行抽样，经上海市食品药品检验研究院检验，该批药品【性状】项和【含量测定】项下维生素A含量均不符 合规定（检验依据：国家药品监督管理局国家药品标准（试行）（地标升国标）第十三册 WS-10001-（HD-1201）-2002）。'
  );
  const punishmentBasis2 = ref('《中华人民共和国药品管理法》');
  const punishmentContent2 = ref('1、罚款(1500000元) 2、没收违法所得(76645.14元)');
  const punishmentDate2 = ref('2022-7-1');

  // 信用记录

  const administrativePenaltyInfo = ref('行政处罚信息');
  const abnormalBusinessListInfo = ref('列入经营异常名录信息');
  const blacklistInfo = ref('列入严重违法失信名单（黑名单）信息');

  // 人员变更

  const itemName1 = ref('药品生产许可证变更');
  const changedPerson1 = ref('变更质量负责人');
  const changeReason1 = ref('人员变化');
  const changeDate1 = ref('2022-7-1');

  const itemName2 = ref('药品生产许可证变更');
  const changedPerson2 = ref('生产负责人变更');
  const changeReason2 = ref('人员变化');
  const changeDate2 = ref('2022-7-1');

  const sectionVisibility = ref([true, false, false, false, false, false, false, false, false]);
  let shi = null;

  // 定义获取 DOM 元素的函数
  const setupShi = () => {
    shi = document.querySelector('.word_doc');
    console.log(shi, 'mounted');
  };

  // 滚动到底部函数
  const scrollToBottom = () => {
    if (shi) {
      shi.scrollTop = shi.scrollHeight;
      console.log(shi.scrollTop, '动没动1');
    }
  };

  // 递归显示 sections 的函数
  const revealNextSection = (index = 0) => {
    console.log(shi?.scrollTop, '动没动');
    if (index >= sectionVisibility.value.length) return; // 终止条件

    sectionVisibility.value[index] = true; // 显示当前 section

    nextTick(() => {
      const randomDelay = Math.floor(Math.random() * 901) + 200; // 生成 100 到 1000 之间的随机数
      setTimeout(() => {
        scrollToBottom(); // 滚动到最新内容
        revealNextSection(index + 1);
      }, randomDelay);
    });
  };
  const target = () => shi;
  const exportToWord = async () => {
    const content = shi.innerText; // 使用 innerText 获取文本内容
    console.log(content, 'sssrrrr');
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [new TextRun(content)],
            }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'document.docx';
    link.click();
    URL.revokeObjectURL(url);
  };

  // 点击按钮后触发的函数
  const startReveal = () => {
    setupShi(); // 获取 word_doc 的 DOM 元素
    revealNextSection(); // 开始显示 sections
  };
  const savefunc = () => {
    console.log('save');
    message.success("'保存成功'");
  };
  function handlePrev() {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  }

  function handleNext() {
    if (currentPage.value < pageCount) {
      currentPage.value++;
    }
  }
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
