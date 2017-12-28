import React from 'react';
import { Popover, Button, Spin} from 'antd';
import { actions as dialogActions } from '../../Dialog/';
import { connect } from 'react-redux';

const Tech = ({ onshowDialog }) => {
    const content = (title) => {
        return (
            <Button icon="search" onClick={onshowDialog(title)}>Search</Button>
        );
    };
    return (
        <div className="skill">
        <Popover content={content('Javascript')}>
        <Button type="primary" className="skill-btn">Javascript(ES6)</Button>
        </Popover>
        <Popover content={content('CSS')}>
        <Button type="primary" className="skill-btn">CSS(CSS3)</Button>
        </Popover>
        <Popover content={content('HTML')}>
        <Button type="primary" className="skill-btn">HTML</Button>
        </Popover>
        <Popover content={content('jQuery')}>
        <Button type="primary" className="skill-btn">jQuery</Button>
        </Popover>
        <br />
        <Popover content={content('Bootstrap')}>
        <Button type="primary" className="skill-btn">Bootstrap</Button>
        </Popover>
        <Popover content={content('LESS')}>
        <Button type="primary" className="skill-btn">LESS</Button>
        </Popover>
        <Popover content={content('React')}>
        <Button type="primary" className="skill-btn">React</Button>
        </Popover>
        <Popover content={content('Redux')}>
        <Button type="primary" className="skill-btn">Redux</Button>
        </Popover>
        <Popover content={content('Rxjs')}>
        <Button type="primary" className="skill-btn">Rxjs</Button>
        </Popover>
        </div>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onshowDialog: (title) => () => dispatch(dialogActions.showmodal(title, 'loading', <Spin />))
    };
};

export default connect(null, mapDispatchToProps)(Tech);
