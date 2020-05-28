import React from 'react';

export default interface AlertProps {
    message: React.ReactNode
    title?: React.ReactNode
    type: 'error' | 'success' | 'warning' | 'info'
}
