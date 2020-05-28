import IObjectData from './IObjectData';

export default interface IPageComponentData {
    content: string
    contentValue: string
    fileDataRequest: any // TODO
    imageUri: string
    isEditable: boolean
    isEnabled: boolean
    isRequired: boolean
    isValid: boolean
    isVisible: boolean
    objectData: IObjectData[]
    objectDataRequest: any // TODO
    pageComponentId: string
    validationMessage: string
}
