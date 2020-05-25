export default interface INotification {
    key: string
    message: string
    title: string
    type: 'success' | 'info' | 'error' | 'warning'
}
