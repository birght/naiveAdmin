/* eslint-disable */
// 基本模块
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';

// 图片模块
import ImageModule from 'docxtemplater-image-module-free';

// 解析语法模块
import expressions from 'angular-expressions';
import assign from 'lodash/assign';

import { renderAsync } from 'docx-preview';

// 类型定义
type WordData = Record<string, any>;
type ImgSize = Record<string, [number, number]>;
type LoadFileCallback = (error: Error | null, content?: string | ArrayBuffer) => void;

expressions.filters.lower = function (input: string): string {
  if (!input) return input;
  return input.toLowerCase();
};

function angularParser(tag: string) {
  tag = tag.replace(/^\.$/, 'this').replace(/('|')/g, "'").replace(/("|")/g, '"');
  const expr = expressions.compile(tag);
  return {
    get: function (scope: any, context: any) {
      let obj = {};
      const scopeList = context.scopeList;
      const num = context.num;
      for (let i = 0, len = num + 1; i < len; i++) {
        obj = assign(obj, scopeList[i]);
      }
      return expr(scope, obj);
    },
  };
}

// 加载文件
function loadFile(url: string, callback: LoadFileCallback) {
  PizZipUtils.getBinaryContent(url, callback);
}

// 配置空值替换函数 作为配置参数可配置在setOptions中
function nullGetter(part: any) {
  if (!part.module) {
    return '-null-';
  }
  if (part.module === 'rawxml') {
    return '';
  }
  return '--';
}

/**
 * 导出word,不支持图片
 * @param {string} tempDocxPath 模板文件路径
 * @param {WordData} wordData 导出数据
 * @param {string} fileName 导出文件名
 */
export const exportWord = (tempDocxPath: string, wordData: WordData, fileName: string) => {
  loadFile(tempDocxPath, (error, content) => {
    if (error) {
      throw error;
    }
    const zip = new PizZip(content!);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    doc.render(wordData);

    const out = doc.getZip().generate({
      type: 'blob',
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });
    saveAs(out, `${fileName}.docx`);
  });
};

/**
 * 导出word,支持图片
 * @param {string} tempDocxPath 模板文件路径
 * @param {WordData} wordData 导出数据
 * @param {string} fileName 导出文件名
 * @param {ImgSize} imgSize 自定义图片尺寸
 */
export const exportWordImage = (
  tempDocxPath: string,
  wordData: WordData,
  fileName: string,
  imgSize: ImgSize
) => {
  loadFile(tempDocxPath, (error, content) => {
    if (error) {
      throw error;
    }

    const imageOpts = {
      getImage: function (tagValue: string) {
        return new Promise<ArrayBuffer | string>((resolve, reject) => {
          PizZipUtils.getBinaryContent(tagValue, (error, content) => {
            if (error) {
              return reject(error);
            }
            return resolve(content!);
          });
        });
      },
      getSize: function (_img: ArrayBuffer, _tagValue: string, tagName: string) {
        const size = imgSize[tagName] ? imgSize[tagName] : [150, 150];
        return size;
      },
    };

    const imageModule = new ImageModule(imageOpts);
    const zip = new PizZip(content!);

    const doc = new Docxtemplater()
      .loadZip(zip)
      .setOptions({
        paragraphLoop: true,
        linebreaks: true,
        nullGetter: nullGetter,
        parser: angularParser,
      })
      .attachModule(imageModule)
      .compile();

    doc.renderAsync(wordData).then(() => {
      const out = doc.getZip().generate({
        type: 'blob',
        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      });
      saveAs(out, `${fileName}.docx`);
    });
  });
};

/**
 * 预览word,支持图片
 * @param {string} tempDocxPath 模板文件路径
 * @param {WordData} wordData 导出数据
 * @param {ImgSize} imgSize 自定义图片尺寸
 * @param {HTMLElement} file 文件元素
 */
export const getWordImage = (
  tempDocxPath: string,
  wordData: WordData,
  imgSize: ImgSize,
  file: HTMLElement
) => {
  loadFile(tempDocxPath, (error, content) => {
    if (error) {
      throw error;
    }

    const imageOpts = {
      getImage: function (tagValue: string) {
        return new Promise<ArrayBuffer>((resolve, reject) => {
          PizZipUtils.getBinaryContent(tagValue, (error, content) => {
            if (error) {
              return reject(error);
            }
            const arrayBuffer = new Uint8Array(content!.length);
            for (let i = 0; i < content!.length; i++) {
              arrayBuffer[i] = content!.charCodeAt(i);
            }
            return resolve(arrayBuffer);
          });
        });
      },
      getSize: function (_img: ArrayBuffer, _tagValue: string, tagName: string) {
        const size = imgSize[tagName] ? imgSize[tagName] : [150, 150];
        return size;
      },
    };

    const imageModule = new ImageModule(imageOpts);
    const zip = new PizZip(content!);

    const doc = new Docxtemplater()
      .loadZip(zip)
      .setOptions({
        paragraphLoop: true,
        linebreaks: true,
        nullGetter: nullGetter,
        parser: angularParser,
      })
      .attachModule(imageModule)
      .compile();

    doc.renderAsync(wordData).then(() => {
      const out = doc.getZip().generate({
        type: 'blob',
        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      });
      renderAsync(out, file);
    });
  });
};
