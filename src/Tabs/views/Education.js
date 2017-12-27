import React from 'react';
import { Timeline, Icon } from 'antd';
import { FormattedMessage } from 'react-intl';
export default () =>{
    return (
        <Timeline className="timeline">
            <Timeline.Item dot={<Icon type="login" style={{ fontSize: '16px'}} />} color="red">
                <FormattedMessage id="edu.enter" defaultMessage="Entered into Nanjing Normal University" /> 2011-09-01
            </Timeline.Item>
            <Timeline.Item>
                <FormattedMessage id="edu.award" defaultMessage="Won College 2nd Award" /> 2012-02-01
            </Timeline.Item>
            <Timeline.Item>
                <FormattedMessage id="edu.award" defaultMessage="Won College 2nd Award" /> 2013-02-01
            </Timeline.Item>
            <Timeline.Item dot={<Icon type="logout" style={{ fontSize: '16px'}} />} color="red">
                <FormattedMessage id="edu.graduate" defaultMessage="Graduated(BACHELOR)" /> 2013-07-01
            </Timeline.Item>
            <Timeline.Item dot={<Icon type="login" style={{ fontSize: '16px'}} />} color="red">
                <FormattedMessage id="edu.uk.enter" defaultMessage="Entered into Northumbria University" /> 2013-09-01
            </Timeline.Item>
            <Timeline.Item>
                <FormattedMessage id="edu.uk.award" defaultMessage="Won E&E DEANS AWARD" /> 2014-11-01
            </Timeline.Item>
            <Timeline.Item dot={<Icon type="logout" style={{ fontSize: '16px'}} />} color="red">
                <FormattedMessage id="edu.uk.graduate" defaultMessage="Graduated(BACHELOR with FIRST CLASS HONOURS)" /> 2015-07-01
            </Timeline.Item>
        </Timeline>
    );
};
