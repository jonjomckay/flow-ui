import INavigationItemData from './INavigationItemData';

export default interface INavigationItem {
    data: INavigationItemData
    developerName: string
    developerSummary: string
    id: string
    label: string
    navigationItems: INavigationItem[]
    order: number
}
