import React from 'react';
import { Menu, Icon } from 'antd';
import { FormattedMessage } from 'react-intl';

const SubMenu = Menu.SubMenu;

export default () => {
    return (
        <Menu theme="dark" mode="inline" defaultOpenKeys={['sub1']}>
            <SubMenu key="sub1" title={<span><Icon type="user" /><FormattedMessage id="menu.name" defaultMessage="Minqi.Lu" className="nav-text" /></span>}>
                <Menu.Item key="1" className="nav-text"><FormattedMessage id="menu.gender" defaultMessage="Gender: Male" /></Menu.Item>
                <Menu.Item key="2" className="nav-text"><FormattedMessage id="menu.age" defaultMessage="Age: 25" /></Menu.Item>
                <Menu.Item key="3" className="nav-text"><FormattedMessage id="menu.birth" defaultMessage="Birth: 1993-03-02" /></Menu.Item>
            </SubMenu>
            <Menu.Item key="4">
                <Icon type="mobile" />
                <FormattedMessage id="menu.mobile" defaultMessage="15850175681" className="nav-text" />
            </Menu.Item>
            <Menu.Item key="5">
                <Icon type="qq" />
                <FormattedMessage id="menu.mail" defaultMessage="424450414@qq.com" className="nav-text" />
            </Menu.Item>
            <Menu.Item key="6">
                <a href="https://github.com/Luminqi">
                    <Icon type="github" />
                    <FormattedMessage id="menu.github" defaultMessage="Luminqi" className="nav-text" />
                </a>
            </Menu.Item>
        </Menu>
    );
};
