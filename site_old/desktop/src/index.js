const path = require('path');
const enLocale = require('./en-US');
const cnLocale = require('./zh-CN');

const homeTmpl = './template/Home/index';
const contentTmpl = './template/Content/index';

function pickerGenerator(module) {
  const tester = new RegExp(`^docs/${module}`);
  /* eslint-disable consistent-return */
  return (markdownData) => {
    const { filename } = markdownData.meta;
    if (tester.test(filename)) {
      return {
        meta: markdownData.meta,
      };
    }
  };
  /* eslint-enable consistent-return */
}

module.exports = {
  enLocale,
  cnLocale,
  // lazyLoad(nodePath, nodeValue) {
  //   if (typeof nodeValue === 'string') {
  //     return true;
  //   }
  //   return nodePath.endsWith('/demo');
  // },
  pick: {
    components(markdownData) {
      const { filename } = markdownData.meta;
      if (!/^components/.test(filename) ||
          /\/demo$/.test(path.dirname(filename))) return;
      /* eslint-disable consistent-return */
      return {
        meta: markdownData.meta,
      };
      /* eslint-enable consistent-return */
    },
    /* eslint-disable consistent-return */
    changelog(markdownData) {
      if (/CHANGELOG/.test(markdownData.meta.filename)) {
        return {
          meta: markdownData.meta,
        };
      }
    },
    /* eslint-enable consistent-return */
    'docs/react': pickerGenerator('react'),
  },
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2&keepElem',
    'bisheng-plugin-antd?noPreview',
    'bisheng-plugin-react?lang=__react',
  ],
  lazyLoad: false,
  home: 'zzc-design-mobile/',
  routes: [{
    path: 'zzc-design-mobile/',
    component: homeTmpl
  }]
};
