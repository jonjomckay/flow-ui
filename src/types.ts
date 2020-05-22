export interface IObjectDataProperty {
    contentFormat: string
    contentType: string
    contentValue: string
    developerName: string
    objectData: IObjectData[]
    typeElementId: string
    typeElementPropertyId: string
}

export interface IObjectData {
    developerName: string
    externalId: string
    internalId: string
    isSelected: boolean
    order: number
    properties: IObjectDataProperty[]
    typeElementId: string
    typeElementBindingDeveloperName: string
}

export interface IPageComponentColumn {
    componentType: string
    contentFormat: string
    contentType: string
    developerName: string
    isDisplayValue: boolean
    isEditable: boolean
    label: string
    order: number
    typeElementPropertyId: string
    typeElementPropertyToDisplayId: string
}

interface IPageComponentData {
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

export interface IPageComponent {
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

export interface IPageContainer {
    attributes: Map<string, string>
    containerType: string
    developerName: string
    id: string
    label: string
    order: number
    pageContainerResponses: IPageContainer[]
}

export interface IPageInput {
    contentValue?: string
    isDirty: boolean
    isLoading: boolean
    objectData?: IObjectData[]
}
