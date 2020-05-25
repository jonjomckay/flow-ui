import IObjectData from './IObjectData';

export default interface IPageInput {
    contentValue?: string
    isDirty: boolean
    isLoading: boolean
    objectData?: IObjectData[]
}
