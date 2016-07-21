import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'

import PageNotFound from './PageNotFound'

describe('<PageNotFound/>', function() {

let wrapper;

beforeEach(() => {
    wrapper = mount(<PageNotFound contentCSS="mycontent" headingCSS="myheader" content="Message" heading="My Title" />);
})


it('Uses headingCSS prop', () => {
    expect(wrapper.find('.myheader').length).to.eq(1)
});

it('Uses heading prop', () => {
    expect(wrapper.find('.myheader').text()).to.eq('My Title')
});

it('Uses contentCSS prop', () => {
    expect(wrapper.find('.mycontent').length).to.eq(1)
});

it('Uses content prop', () => {
    expect(wrapper.find('.mycontent').text()).to.eq('Message')
});


});
