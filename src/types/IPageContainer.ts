export default interface IPageContainer {
    attributes: Map<string, string>
    containerType: string
    developerName: string
    id: string
    label: string
    order: number
    pageContainerResponses: IPageContainer[]
}
