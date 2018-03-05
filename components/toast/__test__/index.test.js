import React from 'react';
import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import { isFunction } from '../../_util/typeof';

import Toast from '../index.jsx';

test( 'Toast', () => { 
  const infoFun = isFunction( Toast.info );
  const errorFun = isFunction( Toast.error );
  const successFun = isFunction( Toast.success );
  const waringFun = isFunction( Toast.waring );
  const loadingFun = isFunction( Toast.loading );
  expect(infoFun).toBeTruthy();
  expect(errorFun).toBeTruthy();
  expect(successFun).toBeTruthy();
  expect(waringFun).toBeTruthy();
  expect(loadingFun).toBeTruthy();
} );