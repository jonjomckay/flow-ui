import { RootState } from '../../store';
import { connect } from 'react-redux';
import { notification } from 'antd';
import NotificationsProps from '../../notification/NotificationsProps';

// This holds notifications that we've opened. It does not hold the notifications themselves (that's hidden in antd)
let existingNotifications: string[] = [];

function Notifications({ notifications }: NotificationsProps) {
    // Close any notifications that we think are open, but we aren't given anymore
    existingNotifications.forEach(key => {
        let shouldWeKeepNotification = notifications.some(n => n.key === key);
        if (!shouldWeKeepNotification) {
            notification.close(key);
        }
    });

    // Start a new record of existing notifications using the ones we're passed in
    existingNotifications = notifications.map(n => {
        notification.open({
            duration: null,
            description: n.title,
            key: n.key,
            message: n.message,
            type: n.type
        })

        return n.key;
    });

    return null;
}

const mapStateToProps = (state: RootState) => ({
   notifications: state.notification.notifications
});

export default connect(mapStateToProps)(Notifications);
