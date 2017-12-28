import React from 'react';
import { view as Message } from '../../Message/';
import { FormattedMessage } from 'react-intl';

export default () => {
    return (
        <React.Fragment>
        <div className="intro">
        <FormattedMessage id="intro.content1" tagName="p" defaultMessage="Love font-end and get excited about learning new things" />
        <FormattedMessage id="intro.content2" tagName="p" defaultMessage="Waiting for your contact" />
        </div>
        <Message />
        </React.Fragment>
    );
};
