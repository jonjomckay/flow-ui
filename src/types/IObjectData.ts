import IObjectDataProperty from './IObjectDataProperty';

export default interface IObjectData {
    developerName: string
    externalId: string
    internalId: string
    isSelected: boolean
    order: number
    properties: IObjectDataProperty[]
    typeElementId: string
    typeElementBindingDeveloperName: string
}
