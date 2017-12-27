import React from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import { changetab } from '../actions.js';
import { injectIntl, FormattedMessage } from 'react-intl';
import Tech from './Technique.js';
import Education from './Education.js';
import Intro from './Intro.js';
import Work from './Work.js';

const TabPane = Tabs.TabPane;

const newTabs = ({storedKey, onChangeTab}) => {
    return (
        <Tabs activeKey={storedKey} onChange={(key) => { onChangeTab(key); }} type="card">
            <TabPane tab={<FormattedMessage id="tab.ability" defaultMessage="Abilities" />} key="1"><Tech /></TabPane>
            <TabPane tab={<FormattedMessage id="tab.education" defaultMessage="Education" />} key="2"><Education /></TabPane>
            <TabPane tab={<FormattedMessage id="tab.work" defaultMessage="Work Experience" />} key="3"><Work /></TabPane>
            <TabPane tab={<FormattedMessage id="tab.selfassessment" defaultMessage="Self-assessment" />} key="4"><Intro /></TabPane>
        </Tabs>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        storedKey: state.tabKey
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeTab: (key) => dispatch(changetab(key))
    }
};

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(newTabs));
