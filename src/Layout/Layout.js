import React from 'react';
import { Layout, Avatar } from 'antd';
import Menu from '../Menu/Menu.js';
import { view as Tabs } from '../Tabs/';
import Buttons from '../Buttons/Buttons.js';
import { view as Switch } from '../Switch/';
import { view as Dialog } from '../Dialog/';

import './Layout.css'

const { Content, Footer, Sider, } = Layout;

export default () => {
    return (
        <Layout className="layout">
            <Sider
                className="sider"
                breakpoint="md"
                collapsedWidth="0"
            >
                <div className="logo">
                <Avatar size="large" icon="user" />
                </div>
                <Menu />
            </Sider>
            <Layout>
                <Content className="content">
                    <Dialog />
                    <Switch />
                    <Buttons />
                    <div>
                    <Tabs />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Created by Luminqi
                </Footer>
            </Layout>
        </Layout>
    );
};
