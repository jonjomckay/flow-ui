import { INavigationItem } from '../types';
import { SelectNavigationItemProps } from '../actions';
import { FlowNavigationResponse } from '../types/FlowNavigationResponse';

export default interface NavigationProps {
    id: string;
    items: INavigationItem[];
    navigation: FlowNavigationResponse | null;

    selectNavigationItem(payload: SelectNavigationItemProps): void;
}
