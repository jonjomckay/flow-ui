import React from 'react';
import ReactDOM from 'react-dom';
import { Flow } from '@jonjomckay/flow-ui';
import antdTheme from '@jonjomckay/flow-ui-theme-ant-design';

Array.from(document.getElementsByClassName('flow')).forEach(element => {
    const id = element.getAttribute('data-flow-id');
    if (!id) {
        ReactDOM.render(<div>No <code>data-flow-id</code> attribute could be found on the <code>.flow</code> element</div>, element);
        return;
    }

    const tenant = element.getAttribute('data-tenant-id');
    if (!tenant) {
        ReactDOM.render(<div>No <code>data-tenant-id</code> attribute could be found on the <code>.flow</code> element</div>, element);
        return;
    }

    const version = element.getAttribute('data-flow-version');

    ReactDOM.render(
        <Flow id={ id } tenant={ tenant } theme={ antdTheme } version={ version } />,
        element
    );
});
