import {
    IObjectData,
    IPageComponent,
    IPageComponentColumn,
    PageOutcomesProps
} from '@jonjomckay/flow-ui';

export interface CommonComponentProps {
    component: IPageComponent;
    isLoading: boolean;
}

export type CheckboxProps = CommonComponentProps & {
    onChange(value: string | null): void;
}

export type ContentProps = CommonComponentProps & {
    value: string;
    onChange(value: string | null): void;
}

export type ImageProps = CommonComponentProps & {
    height: number;
    label: string
    width: number;
    uri: string;
}

export type InputProps = CommonComponentProps & {
    onChange(value: string | null): void;
}

export type ListProps = CommonComponentProps & {
    isOrdered: boolean;
    label: string;
    list: { key: string, value: string | undefined }[];
}

export type OutcomesGroup = 'horizontal' | 'vertical' | null;
export type OutcomesJustify = 'left' | 'right' | null;
export type OutcomesProps = CommonComponentProps & PageOutcomesProps & {
    group: OutcomesGroup;
    justify: OutcomesJustify;
}

export type PresentationProps = CommonComponentProps & {
    content: string;
}

export type RadioOption = {
    id: string;
    isSelected: boolean;
    label: string;
}

export type RadioProps = CommonComponentProps & {
    options: RadioOption[];
    onChange(options: RadioOption[]): void;
}

export type SelectOption = {
    id: string;
    isSelected: boolean;
    label: string;
}

export type SelectProps = CommonComponentProps & {
    options: SelectOption[];
    onChange(options: SelectOption[]): void;
}

export type TableProps = CommonComponentProps & {
    columns: IPageComponentColumn[];
    data?: IObjectData[];
    onChange(data?: IObjectData[]): void;
}

export type TextareaProps = CommonComponentProps & {
    onChange(value: string | null): void;
}

export type ToggleProps = CommonComponentProps & {
    checked: boolean;
    label: string;
    onChange(checked: boolean): void;
}
