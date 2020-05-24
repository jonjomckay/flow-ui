export default interface IOutcome {
    attributes: { [name: string]: string };
    developerName: string
    id: string
    isBulkAction: string
    isOut: boolean
    label: string
    order: number
    pageActionBindingType: string
    pageActionType: string
    pageObjectBindingId: string
}
