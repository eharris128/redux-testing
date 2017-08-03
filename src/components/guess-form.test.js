import React from 'react';
import {shallow, mount} from 'enzyme';
import {makeGuess} from '../actions'
import {GuessForm} from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should fire the onGuess callback when the form is submitted', () => {
        const value = 10;
        let test;
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch}/>);
        wrapper.find('input[type="text"]').node.value = value;
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(makeGuess(value.toString()));
    });
});
