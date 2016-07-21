import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'

import LoadingPleaseWait from './LoadingPleaseWait'

describe('<LoadingPleaseWait/>', function() {

let wrapper;

beforeEach(() => {
    wrapper = mount(<LoadingPleaseWait message={ "Downloading..." } />);
})


it('Uses message prop', () => {
    console.log(wrapper.text());
    expect(wrapper.text()).to.eq("Downloading...")
});


});
