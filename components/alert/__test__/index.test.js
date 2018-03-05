import React from 'react';
import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import { isFunction } from '../../_util/typeof';

import Alert from '../index.jsx';

test( 'Alert', () => { 
  const isFun = isFunction( Alert );
  expect(isFun).toBeTruthy();
} );