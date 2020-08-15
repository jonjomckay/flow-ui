import INavigationItem from './INavigationItem';
import INavigationItemData from './INavigationItemData';

export interface FlowNavigationResponse {
    developerName: string;
    isEnabled: boolean;
    isVisible: boolean;
    label: string;
    navigationItemResponses: INavigationItem[];
    navigationItemDataResponses: INavigationItemData[];
    stateId: string;
}
