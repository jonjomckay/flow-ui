/* eslint-disable */
import React, { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import { Jodit } from 'jodit';
import 'jodit/build/jodit.min.css';

interface Props {
    config: {},
    name?: string;

    onBlur?(value: string): void;

    onChange(value: string): void;

    tabIndex?: string;
    value: string;
}

// TODO: This depends on a specific commit in package.json until this is released: https://github.com/xdan/jodit/pull/364
// This is based on a comment from https://github.com/jodit/jodit-react/issues/43 because otherwise rendering screws up on update
const JoditEditor = forwardRef(
    ({ value, config, onChange, onBlur, tabIndex, name }: Props, ref) => {
        const textArea = useRef<any>(null);

        useLayoutEffect(() => {
            if (ref) {
                if (typeof ref === 'function') {
                    ref(textArea.current);
                } else {
                    ref.current = textArea.current;
                }
            }
        });

        useEffect(() => {
            const blurHandler = (value: string) => {
                onBlur && onBlur(value);
            };

            const changeHandler = (value: string) => {
                onChange && onChange(value);
            };

            const element = textArea.current;
            textArea.current = Jodit.make(element, config);
            textArea.current.value = value;

            textArea.current.events.on('blur', () =>
                blurHandler(textArea.current.value)
            );
            textArea.current.events.on('change', () =>
                changeHandler(textArea.current.value)
            );

            textArea.current.workplace.tabIndex = tabIndex || -1;
        }, []);

        return <textarea ref={ textArea } name={ name }></textarea>;
    }
);

export default JoditEditor;
