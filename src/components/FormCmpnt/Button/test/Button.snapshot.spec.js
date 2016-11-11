import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

it('Button snapshot', () => {
    const btn = renderer.create(
        <Button type="submit" text="submit" className="btn" />
    ).toJSON();

    expect(btn).toMatchSnapshot();
});
