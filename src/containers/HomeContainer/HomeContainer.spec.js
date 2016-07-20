import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux';

import HomeContainer from './HomeContainer'

import { storeFake } from 'utils/storeFake';


describe('<HomeContainer />', function() {

let wrapper;
let store;

beforeEach(() => {
    store = storeFake();
    wrapper = mount(<Provider store={ store }>
                      <HomeContainer />
                    </Provider>);
})

it('Says Hello World', () => {
    expect(wrapper.text()).to.eq('Hello World')
});


});
