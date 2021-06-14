import React from 'react';
import Counter from '../Counter';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
    const component = render(<Counter/>);
    getByTestId = component.getByTestId;
});

afterEach(() => {
    cleanup();
})

test('header rendered correct text - destructured', () => {
    const headerElement = getByTestId('header');
    expect(headerElement.textContent).toEqual('My Counter');
});

test('counter initially is text of zero', () => {
    const counterElement = getByTestId('counter');
    expect(counterElement.textContent).toBe("0");
});

test('input initally is value of 1', () => {
    const inputElement = getByTestId('input');
    expect(inputElement.value).toBe('1');
});

test('add button renders with plus sign', () => {
    const addBtn = getByTestId('add-btn');
    expect(addBtn.textContent).toBe('+');
});

test('subtract button renders with minus sign', () => {
    const subBtn = getByTestId('sub-btn');
    expect(subBtn.textContent).toBe('-');
});

test('able to change input value correctly', () => {
    const inputElement = getByTestId('input');
    expect(inputElement.value).toBe('1');

    fireEvent.change(inputElement, {
        target: {
            value: '4'
        }
    });
    expect(inputElement.value).toBe('4');
});

test('click on plus button adds 1 to counter', () => {
    const addBtnElement = getByTestId('add-btn');

    fireEvent.click(addBtnElement);
    expect()
});

test('able to increment counter by 1 on add btn click', () => {
    const addBtnElement = getByTestId('add-btn');
    expect(addBtnElement.textContent).toBe('+');

    fireEvent.click(addBtnElement);
    expect(getByTestId('counter').textContent).toBe('1');
});

test('able to decrement counter by 1 on sub btn click', () => {
    const subBtnElement = getByTestId('sub-btn');
    expect(subBtnElement.textContent).toBe('-');

    fireEvent.click(subBtnElement);
    expect(getByTestId('counter').textContent).toBe('-1');
});

test('able to add input value to counter', () => {
    const addBtnElement = getByTestId('add-btn');
    const inputElement = getByTestId('input');

    fireEvent.change(inputElement, {
        target: {
            value: '5'
        }
    });
    
    fireEvent.click(addBtnElement);
    expect(getByTestId('counter').textContent).toBe('5');
});

test('able to sub input value from counter', () => {
    const subBtnElement = getByTestId('sub-btn');
    const inputElement = getByTestId('input');

    fireEvent.change(inputElement, {
        target: {
            value: '3'
        }
    });
    
    fireEvent.click(subBtnElement);
    expect(getByTestId('counter').textContent).toBe('-3');
});

test('adding 2x and then subtracting leads to correct counter value', () => {
    const addBtnElement = getByTestId('add-btn');
    const subBtnElement = getByTestId('sub-btn');

    fireEvent.click(addBtnElement);
    fireEvent.click(addBtnElement);

    fireEvent.click(subBtnElement);
    expect(getByTestId('counter').textContent).toBe('1');
});

test('adding, changing input, and then subtracting leads to correct counter value', () => {
    const addBtnElement = getByTestId('add-btn');
    const subBtnElement = getByTestId('sub-btn');
    const inputElement = getByTestId('input');
    
    fireEvent.click(addBtnElement);
    fireEvent.click(addBtnElement);
    fireEvent.click(addBtnElement);
    fireEvent.click(addBtnElement);


    fireEvent.change(inputElement, {
        target: {
            value: '10'
        }
    });

    fireEvent.click(subBtnElement);
    expect(getByTestId('counter').textContent).toBe('-6');
});

test('counter contains correct class name', () => {
    const counterElement = getByTestId('counter');
    const inputElement = getByTestId('input');
    const addBtnElement = getByTestId('add-btn');
    const subBtnElement = getByTestId('sub-btn');
    
    expect(counterElement.className).toBe('');

    fireEvent.change(inputElement, {
        target: {
            value: '50'
        }
    });
    fireEvent.click(addBtnElement);
    
    expect(counterElement.className).toBe('');
    
    fireEvent.click(addBtnElement);
    
    expect(counterElement.className).toBe('green');
    
    fireEvent.click(addBtnElement);
    
    expect(counterElement.className).toBe('green');
    
    fireEvent.click(subBtnElement);
    
    expect(counterElement.className).toBe('green');
    
    fireEvent.click(subBtnElement);
    
    expect(counterElement.className).toBe('');

    fireEvent.click(subBtnElement);
    fireEvent.click(subBtnElement);
    fireEvent.click(subBtnElement);
    fireEvent.click(subBtnElement);

    expect(counterElement.className).toBe('red');
})