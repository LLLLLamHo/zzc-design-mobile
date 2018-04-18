import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Button from '../index.tsx';

test( 'Button', () => {
  const wrapper = render( <div>
    <Button>defualt</Button>
    <Button type="main">main</Button>
    <Button type="main-lh">main-lh</Button>
    <Button type="main-dk">main-dk</Button>
    <Button type="sub">sub</Button>
    <Button type="sub-lh">sub-lh</Button>
    <Button type="sub-dk">sub-dk</Button>
    <Button disabled>disabled</Button>
    <Button type="main">default main</Button>
    <Button size='lg' type="main">lg main</Button>
    <Button size='sm' type="main">sm main</Button>
    <Button size='xs' type="main">xs main</Button>
    <Button inline size='sm'>inline1</Button>
    <Button inline size='sm' type="main">inline2</Button>
    <Button inline size='sm' type="sub">inline3</Button>
    <Button ghost inline size='xs' type="main">inline2</Button>
    <Button ghost inline size='xs' type="sub">inline3</Button>
    <Button full type="main">full main</Button>
    <Button activeStyle={{ background: 'blue' }} style={{ background: 'green', color: '#fff' }}>自定义样式</Button>
    <Button activeClassName='custom'>自定义active</Button>
    <Button activeStyle={false}>禁止active</Button>
  </div> );
  expect( renderToJson( wrapper ) ).toMatchSnapshot();
} );