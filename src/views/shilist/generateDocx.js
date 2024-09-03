const fs = require('fs');
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');

// 读取模板文件
const content = fs.readFileSync('tem.docx', 'binary');

// 加载模板到PizZip
const zip = new PizZip(content);

// 创建Docxtemplater实例
const doc = new Docxtemplater(zip, {
  paragraphLoop: true,
  linebreaks: true,
});

// 定义数据
const data = {
  time: '2024-07-01',
  section0: '基础信息',
  baselable1: '公司名',
  baset1: '辽宁某堂制药有限公司',
  baselable2: '简介',
  baset2:
    '辽宁某堂制药有限公司位于沈阳市高新区工业三路，生产范围为眼用全氟丙烷气体、人工蛋白等。根据《药品生产监督管理办法》的规定，结合《2024年沈阳市药品上市后生产监管工作计划》法规要求，决定对其实施上市后药GMP符合性检查及有因检查。',
  baselable3: '检查编号',
  baset3: '91371300MA3R064567',
  section1: '检查背景',
  checklabel1: '检查原因',
  checkbg1: `1、投诉举报
山东省药品监督管理局 收到 投诉人 无名氏 对 被投诉人 山东京御堂制药有限公司 关于 药品“含量测定”项不符合规定 的投诉举报线索。
2、检验监测
通过药品检验报告QW201505789、SW200900439了解到存在不符合规范情况
3、不良反应
存在药品不良反应记录，具体信息如下：
不良反应名称及描述：患者因高血压、高胆固醇症服药治疗，从 2013.03.01 开始口服阿托伐他丁治疗高胆固醇症。2013.03.25 左右患者开始出现眼巩膜变黄、尿黄症状。03.29 因上述症状入院治疗，入院查体:03.29 结果:轻度黄疸，无肌痛症状，胆红素、转氨酶偏高，肾功能正常，尿胆红素(++);03.30 结果:患者各项肝炎检查阴性，腹部彩超正常;03.31 检查心肌酶:AST131.0u/L、LDH 278u/L、CK 314u/L、CK-MB67.0u/L。03.30 予以停用阿托伐他丁，护肝治疗。04.09 复查除直接胆红素和谷丙转氨酶稍偏高，心肌酶各项指标均恢复正常，黄疸症状缓解。
不良反应事件结果：未好转
不良反应/事件名称：黄疸
发生时间：2013年3月25日
药品名称：阿托伐他汀钙片
报告者信息：某医院
4、申报资料
申报资料疑似存在问题：
组织机构及人员信息材料疑似存在故意隐瞒情形、企业资质证明材料疑似存在上报信息与实际情况不符情形
5、违法违规
企业存在违法违规记录，案件名称：严重违反《药品生产质量管理规范》、生产销售不符合国家标准的化妆品
6、信用记录
此企业在国家企业信用信息公示系统中，存在行政处罚信息、列入经营异常名录信息、列入严重违法失信名单（黑名单）信息
7、人员变更
此企业关键人员（质量负责人、生产负责人）变更频繁`,
  checklabel2: '检查对象',
  chekbg2: `企业名称：辽宁某堂制药有限公司,企业地址：沈阳市高新区工业三路`,
  section2: '检查目标',
  mainObjective: '明确本次检查的主要目标，如核实药品生产过程、质量控制措施、合规性等。',
  secondaryObjective: '列出次要目标，如评估药品不良反应监测系统、检查药品储存条件等。',
  section3: '检查时间',
  checkDate: '2024年7月1日 09：00~12：00',
  checkDuration: '3小时',
  section4: '检查人员',
  teamLeader: '李某某',
  teamMembers: '张某、王某、代某',
  experts: '（如有必要，列出专家名单及其专业领域）',
  section5: '检查方式',
  onSiteCheck: '详细描述现场检查的具体步骤和内容。',
  documentReview: '列出需要审查的文件和资料清单。',
  samplingInspection: '如需抽样检验，明确抽样方法和检验项目。',
  section6: '检查内容',
  productionProcess: '详细描述生产过程中的关键环节，如原料采购、生产操作、质量控制等。',
  qualityControl: '列出质量控制措施，如检验方法、检验频率等。',
  compliance: '评估企业是否遵守相关法律法规和药品质量管理规范。',
  section7: '检查纪律和注意事项',
  disciplineRequirements: '明确检查组成员的行为规范和纪律要求。',
  precautions: '列出在检查过程中需要注意的事项，如保密要求、记录要求等。',
  section8: '其他要求',
  otherRequirements1:
    '检查组应根据检查方案，运用质量风险管理的理念综合分析现场检查情况，评估企业生产和质量管理的风险，最终给出明确的检查结论。',
  otherRequirements2:
    '被检查单位应在现场检查结束后20个工作日内完成缺陷项目的整改工作，将整改报告报检查机构;无法按期完成整改的，应制定切实可行的整改计划，并列入整改报告。整改报告应针对缺陷成因及风险评估情况，逐项描述风险控制措施及实施结果，至少包含缺陷描述、缺陷调查分析、风险评估、风险控制、整改审核、整改效果评价及相关佐证图文材料等。',
  otherRequirements3: '检查过程应注意遵守保密、廉政等相关要求。',
};

// 设置模板数据
doc.setData(data);

try {
  // 渲染文档
  doc.render();
} catch (error) {
  console.error(error);
  throw error;
}

// 生成文档
const buf = doc.getZip().generate({ type: 'nodebuffer' });

// 保存文档
fs.writeFileSync('output.docx', buf);
