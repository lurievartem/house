import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Button from '../Button';

it('Button should render without crashing', () => {
    TestUtils.renderIntoDocument(<Button />);
});

it('Button should call the function', () => {
    const fn = jest.fn();

    const btn = TestUtils.renderIntoDocument(
        <div>
            <Button onClick={fn} />
        </div>
    );

    const btnNode = ReactDom.findDOMNode(btn).children[0];
    TestUtils.Simulate.click(btnNode);
    expect(fn).toBeCalled();
});
