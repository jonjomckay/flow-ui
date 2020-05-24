import { INavigationItem } from '../types';
import { SelectNavigationItemProps } from '../actions';

export default interface NavigationProps {
    id: string
    items: INavigationItem[]
    navigation: any

    selectNavigationItem(payload: SelectNavigationItemProps): void
}
