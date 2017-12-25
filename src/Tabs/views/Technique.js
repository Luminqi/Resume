import React from 'react';
import { Popover, Button, Spin} from 'antd';
import { view as Dialog } from '../../Dialog/';
import { actions as dialogActions } from '../../Dialog/';
import { connect } from 'react-redux';

const Tech = ({ onshowDialog }) => {
    const content = (title) => {
        return (
            <Button icon="search" onClick={onshowDialog(title)}>Search on website</Button>
        );
    };
    return (
        <React.Fragment>
        <Dialog />
        <Popover content={content('Javascript')}>
        <Button type="primary">Javascript</Button>
        </Popover>
        <Popover content={content('React')}>
        <Button type="primary">React</Button>
        </Popover>
        <Popover content={content('Redux')}>
        <Button type="primary">Redux</Button>
        </Popover>
        </React.Fragment>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onshowDialog: (title) => () => dispatch(dialogActions.showmodal(title, 'loading', <Spin />))
    };
};

export default connect(null, mapDispatchToProps)(Tech);
