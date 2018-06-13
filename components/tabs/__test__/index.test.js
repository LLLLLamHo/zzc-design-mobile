import React from 'react';
import {render} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import Tabs from '../index.tsx';
test( 'Modal', () => {
    const wrapper = render(
        <Tabs
            maxTabLength={3}
            index={0}
            tabs={[
                { title: 'tab 1' },
                { title: 'tab 2' },
                { title: 'tab 3' },
                { title: 'tab 4' },
                { title: 'tab 5' }
            ]}
            onChange={() => {}}
        >
            <div className='item-content'>
                <p>this is 1 content</p>
            </div>
            <div className='item-content'>
                <p>this is 2 content</p>
            </div>
            <div className='item-content'>
                <p>this is 3 content</p>
            </div>
            <div className='item-content'>
                <p>this is 4 content</p>
            </div>
            <div className='item-content'>
                <p>this is 5 content</p>
            </div>
        </Tabs>
    );
    expect( renderToJson( wrapper ) ).toMatchSnapshot();
} );

