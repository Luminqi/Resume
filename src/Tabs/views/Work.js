import React from 'react';
import { Card } from 'antd';
import logo from './COMSERVICELOGO.png';

export default () => {
    return (
        <Card title={<img src={logo} alt="" style={{ width:"48px", height:"48px" }} />}>
        <p>content</p>
        </Card>
    );
};
