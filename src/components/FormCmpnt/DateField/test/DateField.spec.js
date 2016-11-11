import React from 'react';
import TestUtils from 'react-addons-test-utils';
import DateField from '../DateField';

it('DateField should render without crashing', () => {
    TestUtils.renderIntoDocument(<DateField />);
});
