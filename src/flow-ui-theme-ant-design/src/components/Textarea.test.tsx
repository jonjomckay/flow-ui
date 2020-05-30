// @ts-nocheck

import React from 'react';
import { render } from '@testing-library/react';
import Textarea from './Textarea';
import { IPageComponent } from '../../types';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

it('displays the given label message when one is supplied', () => {
    const label = 'Some label';

    const component: IPageComponent = {
        data: {
            isVisible: true
        },
        id: 'id-1234',
        label: label
    };

    const { getByText } = render(<Textarea component={ component } isLoading={ false } onChange={ jest.fn } />);
    expect(getByText(label)).toBeInTheDocument();
});

it('has a maximum number of characters when one is given', () => {
    const component: IPageComponent = {
        data: {
            isVisible: true
        },
        id: 'id-1234',
        maxSize: 1234
    };

    const { container } = render(<Textarea component={ component } isLoading={ false } onChange={ jest.fn } />);
    expect(container.querySelector('#id-1234')).toHaveAttribute('maxlength', '1234');
});

it('has a height set when one is given', () => {
    const component: IPageComponent = {
        data: {
            isVisible: true
        },
        height: 1234,
        id: 'id-1234',
    };

    const { container } = render(<Textarea component={ component } isLoading={ false } onChange={ jest.fn } />);
    expect(container.querySelector('#id-1234')).toHaveAttribute('rows', '1234');
});

it('has a width set when one is given', () => {
    const component: IPageComponent = {
        data: {
            isVisible: true
        },
        id: 'id-1234',
        width: 1234,
    };

    const { container } = render(<Textarea component={ component } isLoading={ false } onChange={ jest.fn } />);
    expect(container.querySelector('#id-1234')).toHaveAttribute('cols', '1234');
});

it('displays a hint value when one is given', () => {
    const component: IPageComponent = {
        data: {
            isVisible: true
        },
        hintValue: 'Some hint value',
        id: 'id-1234'
    };

    const { container } = render(<Textarea component={ component } isLoading={ false } onChange={ jest.fn } />);
    expect(container.querySelector('#id-1234')).toHaveAttribute('placeholder', component.hintValue);
});

it('displays help info when some is given', () => {
    const component: IPageComponent = {
        data: {
            isVisible: true
        },
        helpInfo: 'Some help info',
        id: 'id-1234'
    };

    const { getByText } = render(<Textarea component={ component } isLoading={ false } onChange={ jest.fn } />);
    expect(getByText(component.helpInfo)).toBeInTheDocument();
});

it('has a default value when content value is set', () => {
    const component: IPageComponent = {
        data: {
            contentValue: 'Default value',
            isRequired: true
        },
        id: 'id-1234'
    };

    const { getByText } = render(<Textarea component={ component } isLoading={ false } onChange={ jest.fn } />);
    expect(getByText('Default value')).toBeInTheDocument();
});

it('is disabled when marked as not enabled', () => {
    const component: IPageComponent = {
        data: {
            isEnabled: false
        },
        id: 'id-1234'
    };

    const { container } = render(<Textarea component={ component } isLoading={ false } onChange={ jest.fn } />);
    expect(container.querySelector('#id-1234')).toHaveAttribute('disabled');
});

it('is enabled when marked as enabled', () => {
    const component: IPageComponent = {
        data: {
            isEnabled: true
        },
        id: 'id-1234'
    };

    const { container } = render(<Textarea component={ component } isLoading={ false } onChange={ jest.fn } />);
    expect(container.querySelector('#id-1234')).not.toHaveAttribute('disabled');
});

it('is read only when marked as not editable', () => {
    const component: IPageComponent = {
        data: {
            isEditable: false
        },
        id: 'id-1234'
    };

    const { container } = render(<Textarea component={ component } isLoading={ false } onChange={ jest.fn } />);
    expect(container.querySelector('#id-1234')).toHaveAttribute('readonly');
});

it('is not read only when marked as editable', () => {
    const component: IPageComponent = {
        data: {
            isEditable: true
        },
        id: 'id-1234'
    };

    const { container } = render(<Textarea component={ component } isLoading={ false } onChange={ jest.fn } />);
    expect(container.querySelector('#id-1234')).not.toHaveAttribute('readonly');
});

it('is not rendered when marked as not visible', () => {
    const component: IPageComponent = {
        data: {
            isVisible: false
        },
        id: 'id-1234'
    };

    const { container } = render(<Textarea component={ component } isLoading={ false } onChange={ jest.fn } />);
    expect(container.querySelector('#id-1234')).not.toBeInTheDocument();
});

it('is rendered when marked as visible', () => {
    const component: IPageComponent = {
        data: {
            isVisible: true
        },
        id: 'id-1234'
    };

    const { container } = render(<Textarea component={ component } isLoading={ false } onChange={ jest.fn } />);
    expect(container.querySelector('#id-1234')).toBeInTheDocument();
});

it('is not marked as required when not required', () => {
    const component: IPageComponent = {
        data: {
            isRequired: false
        },
        id: 'id-1234'
    };

    const { container } = render(<Textarea component={ component } isLoading={ false } onChange={ jest.fn } />);
    expect(container.querySelector('#id-1234')).not.toHaveAttribute('required');
});

it('is marked as required when required', () => {
    const component: IPageComponent = {
        data: {
            isRequired: true
        },
        id: 'id-1234'
    };

    const { container } = render(<Textarea component={ component } isLoading={ false } onChange={ jest.fn } />);
    expect(container.querySelector('#id-1234')).toHaveAttribute('required');
});

it('is shown as not valid when not valid', () => {
    const component: IPageComponent = {
        data: {
            isValid: true
        },
        id: 'id-1234'
    };

    const { container } = render(<Textarea component={ component } isLoading={ false } onChange={ jest.fn } />);
    expect(container.querySelector('.ant-form-item')).not.toHaveClass('ant-form-item-has-feedback');
    expect(container.querySelector('.ant-form-item')).not.toHaveClass('ant-form-item-has-error');
});

it('is shown as valid when valid', () => {
    const component: IPageComponent = {
        data: {
            isValid: false
        },
        id: 'id-1234'
    };

    const { container } = render(<Textarea component={ component } isLoading={ false } onChange={ jest.fn } />);
    expect(container.querySelector('.ant-form-item')).toHaveClass('ant-form-item-has-feedback');
    expect(container.querySelector('.ant-form-item')).toHaveClass('ant-form-item-has-error');
});

it('displays the given validation message when one is supplied', () => {
    const validationMessage = 'Some validation error';

    const component: IPageComponent = {
        data: {
            isValid: false,
            validationMessage: validationMessage
        },
        id: 'id-1234'
    };

    const { getByText } = render(<Textarea component={ component } isLoading={ false } onChange={ jest.fn } />);
    expect(getByText(validationMessage)).toBeInTheDocument();
});
