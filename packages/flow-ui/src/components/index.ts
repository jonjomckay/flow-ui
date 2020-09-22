import { IObjectData, IOutcome, IPageComponent, IPageComponentColumn, selectOutcome } from '@jonjomckay/flow-ui';

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

export type OutcomeGroup = 'horizontal' | 'vertical' | null;
export type OutcomeJustify = 'left' | 'right' | null;

export interface OutcomesProps {
    group: OutcomeGroup;
    isLoading: boolean;
    justify: OutcomeJustify;
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

export type TableProps = CommonComponentProps & {
    columns: IPageComponentColumn[];
    data?: IObjectData[];
    onChange(data?: IObjectData[]): void;
}

export interface TextareaProps {
    component: IPageComponent;
    onChange(value: string | null): void;
}

export interface ToggleProps {
    checked: boolean;
    component: IPageComponent;
    isLoading: boolean;
    label: string;
    onChange(checked: boolean): void;
}
