

const path = require( 'path' );
const enLocale = require( './en-US' );
const cnLocale = require( './zh-CN' );

const homeTmpl = './template/Home';
const contentTmpl = './template/Content/index';

const isDev = process.env.NODE_ENV === 'development';

let root = isDev ? '/' : 'zzc-design-mobile/';

function pickerGenerator( module ) {
  const tester = new RegExp( `^docs/${module}` );
  /* eslint-disable consistent-return */
  return ( markdownData ) => {
    const { filename } = markdownData.meta;
    if ( tester.test( filename ) ) {
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
  lazyLoad(nodePath, nodeValue) {
    if (typeof nodeValue === 'string') {
      return true;
    }
    return nodePath.endsWith('/demo');
  },
  pick: {
    components( markdownData ) {
      const { filename } = markdownData.meta;
      if ( !/^components/.test( filename ) ||
        /\/demo$/.test( path.dirname( filename ) ) ) return;
      /* eslint-disable consistent-return */
      return {
        meta: markdownData.meta,
      };
      /* eslint-enable consistent-return */
    },
    /* eslint-disable consistent-return */
    changelog( markdownData ) {
      if ( /CHANGELOG/.test( markdownData.meta.filename ) ) {
        return {
          meta: markdownData.meta,
        };
      }
    },
    /* eslint-enable consistent-return */
    'docs/react': pickerGenerator( 'react' ),
  },
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2&keepElem',
    'bisheng-plugin-antd?noPreview',
    'bisheng-plugin-react?lang=__react',
  ],
  // lazyLoad: false,
  home: root,
  routes: {
    path: root,
    component: './template/Layout/index',
    indexRoute: { component: homeTmpl },
    childRoutes: [{
      path: 'zzc-design-mobile/index-cn',
      component: homeTmpl,
    }, {
      path: 'zzc-design-mobile/docs/practice/:children',
      component: contentTmpl,
    }, {
      path: 'zzc-design-mobile/docs/pattern/:children',
      component: contentTmpl,
    }, {
      path: 'zzc-design-mobile/docs/react/:children',
      component: contentTmpl,
    }, {
      path: 'zzc-design-mobile/changelog',
      component: contentTmpl,
    }, {
      path: 'zzc-design-mobile/changelog-cn',
      component: contentTmpl,
    }, {
      path: 'zzc-design-mobile/components/:children',
      component: contentTmpl,
    }]
  }
};
