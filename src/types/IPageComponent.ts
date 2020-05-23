import IPageComponentColumn from './IPageComponentColumn';
import IPageComponentData from './IPageComponentData';

export default interface IPageComponent {
    attributes: Map<string, string>
    columns: IPageComponentColumn[]
    componentType: string
    contentType: string
    data: IPageComponentData
    developerName: string
    hasEvents: boolean
    height: number
    helpInfo: string
    hintValue: string
    id: string
    isMultiSelect: boolean
    isSearchable: boolean
    label: string
    maxSize: number
    order: number
    pageContainerDeveloperName: string
    pageContainerId: string
    size: number
    width: number
}
