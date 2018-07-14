import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Animate from '../index.tsx';

test( 'Button', () => {
    const wrapper = render( <div>
        <Animate
            visible
            animationName={{
                enter: 'zzc-zoom-enter',
                enterActive: 'zzc-zoom-enter-active',
                leave: 'zzc-zoom-leave',
                leaveActive: 'zzc-zoom-leave-active'
            }}
            onEnd={( type ) => {
                type === 'leave' && closeCallback();
            }}
        >
            <div>123123</div>
        </Animate>
    </div> );
    expect( renderToJson( wrapper ) ).toMatchSnapshot();
} );