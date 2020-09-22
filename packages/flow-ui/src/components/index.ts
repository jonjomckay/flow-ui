import { IObjectData, IOutcome, IPageComponent, selectOutcome } from '@jonjomckay/flow-ui';

export interface CheckboxProps {
    component: IPageComponent;
    isLoading: boolean;
    onChange(value: string | null): void;
}

export interface ContentProps {
    component: IPageComponent;
    value: string;
    onChange(value: string | null): void;
}

export interface ImageProps {
    height: number;
    label: string
    width: number;
    uri: string;
}

export interface InputProps {
    component: IPageComponent;
    onChange(value: string | null): void;
}

export interface ListProps {
    isOrdered: boolean;
    label: string;
    list: { key: string, value: string | undefined }[];
}

export interface OutcomesProps {
    group: 'horizontal' | 'vertical' | null;
    isLoading: boolean;
    justify: 'left' | 'right' | null;
    outcomes: IOutcome[];

    selectOutcome: typeof selectOutcome;
}

export interface PresentationProps {
    content: string;
}

export interface RadioOption {
    id: string;
    isSelected: boolean;
    label: string;
}

export interface RadioProps {
    component: IPageComponent;
    isLoading: boolean;
    options: RadioOption[];
    onChange(options: RadioOption[]): void;
}

export interface TextareaProps {
    component: IPageComponent;
    onChange(value: string | null): void;
}

