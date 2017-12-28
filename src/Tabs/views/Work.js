import React from 'react';
import { Card } from 'antd';
import { FormattedMessage } from 'react-intl';
import logo from './COMSERVICELOGO.png';

export default () => {
    return (
        <Card title={
                        <React.Fragment>
                        <img src={logo} alt="" style={{ width: "48px", height: "48px", marginRight: "8px" }} />
                        <FormattedMessage id="work.title" defaultMessage="CHINA COMSERVICE" />
                        <span style={{ marginLeft: "24px"}}>2015.10-2017.12</span>
                        </React.Fragment>
                    }
                className="work-card"
        >
            <FormattedMessage id="work.content1" tagName="p" defaultMessage="Deal with the failure of the upper network equipment" />
            <FormattedMessage id="work.content2" tagName="p" defaultMessage="Optimize mobile 3G/4G signal" />
            <FormattedMessage id="work.content3" tagName="p" defaultMessage="Responsible for the operation and maintenance of base station" />
        </Card>
    );
};
