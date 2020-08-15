import React from 'react';

export default interface INotification {
    key: string
    message: string | React.ReactElement
    title: string
    type: 'success' | 'info' | 'error' | 'warning'
}
