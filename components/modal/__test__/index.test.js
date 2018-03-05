import React from 'react';
import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import { isFunction } from '../../_util/typeof';

import Modal from '../index.jsx';


test( 'Modal', () => {
  const wrapper = render( <div>
    <Modal
      title="标题"
      closable={true}
      visible={true}
      closeCallback={() => { console.log( 123 ); }}
    >
      <div className="modal-text">这是一个文案...</div>
    </Modal>
  </div> );
  expect( renderToJson( wrapper ) ).toMatchSnapshot();
} );

