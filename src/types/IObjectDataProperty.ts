import IObjectData from './IObjectData';

export default interface IObjectDataProperty {
    contentFormat: string
    contentType: string
    contentValue: string
    developerName: string
    objectData: IObjectData[]
    typeElementId: string
    typeElementPropertyId: string
}
