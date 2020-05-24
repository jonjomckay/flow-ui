export default interface IPageContainer {
    attributes: { [name: string]: string };
    containerType: string
    developerName: string
    id: string
    label: string
    order: number
    pageContainerResponses: IPageContainer[]
}
