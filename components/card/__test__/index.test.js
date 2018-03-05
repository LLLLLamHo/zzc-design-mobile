import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Card from '../index.jsx';

test( 'Card', () => {
  const wrapper = render( <div>
    <Card>
      <Card.Header title="卡片标题" extra="this is extra" />
      <Card.Body>
        <div className="card-box1">
          <p>文本内容</p>
        </div>
      </Card.Body>
      <Card.Body>
        <div className="card-box1">
          <p>文本内容</p>
        </div>
      </Card.Body>
      <Card.Footer>
        <a>按钮</a>
      </Card.Footer>
    </Card>
    <Card full>
      <Card.Header title="卡片标题" extra="this is extra" />
      <Card.Body borderDirection='left'>
        <div className="card-box2">
          <p>文本内容</p>
        </div>
      </Card.Body>
      <Card.Body>
        <div className="card-box2">
          <p>文本内容</p>
        </div>
      </Card.Body>
    </Card>
  </div> );
  expect( renderToJson( wrapper ) ).toMatchSnapshot();
} );