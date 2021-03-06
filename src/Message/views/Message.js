import React from 'react';
import { Input, Icon, Button, message, Badge, Spin } from 'antd';
import { modify, submit } from '../actions.js';
import { connect } from 'react-redux';
import { actions as dialogActions } from '../../Dialog/'
import { injectIntl, FormattedMessage } from 'react-intl';

const { TextArea } = Input;

// const Message = ({name, comment, suffix, onModify, onSubmit}) => {
//     let nameInput = null;
//     const clearInput = () => {
//         nameInput.focus();
//         onModify({
//             name: '',
//             suffix: null
//         });
//     };
//     const onChangeComment = (e) => {
//         onModify({
//             comment: e.target.value
//         });
//     };
//     const onChangeName = (e) => {
//         let username = e.target.value;
//         let suffix = username ? <Icon type="close-circle" onClick={clearInput} /> : null;
//         onModify({
//             name: username,
//             suffix: suffix
//         });
//     };
//     const onClickButton = () => {
//         if (!name) {
//             onModify({
//                 suffix: <span style={{ color: 'red' }}>Name is required!</span>
//             });
//         } else if (!comment) {
//             onModify({
//                 comment: "Please input comment"
//             });
//         } else {
//             onSubmit();
//         }
//     };
//     return (
//         <div className="comment">
//         <span>Leave your comment:</span>
//         <TextArea
//             placeholder="Comment"
//             autosize={{ minRows: 2, maxRows: 4 }}
//             value={comment}
//             onChange={onChangeComment}
//         />
//         <span>Name:</span>
//         <Input
//             placeholder="Enter your name"
//             prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//             suffix={suffix}
//             value={name}
//             onChange={onChangeName}
//             ref={(node) => { nameInput = node; }}
//         />
//         <Button type="primary" onClick={onClickButton}>Submit</Button>
//         </div>
//     );
// };
//
// const mapStateToProps = (state, ownProps) => {
//     return {
//         name: state.message.name,
//         comment: state.message.comment,
//         suffix: state.message.suffix
//     };
// } ;
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         onModify: (obj) => dispatch(modify(obj)),
//         onSubmit: () => dispatch(submit())
//     };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Message);

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suffix: null
        };
    }
    clearInput = () => {
        this.nameInput.focus();
        this.props.onModify({ name: '' });
        this.setState({ suffix: null });
    }
    onChangeComment = (e) => {
        this.props.onModify({ comment: e.target.value });
    }
    onChangeUserName = (e) => {
        let username = e.target.value;
        let suffix = username ? <Icon type="close-circle" onClick={this.clearInput} /> : null;
        this.setState({ suffix: suffix });
        this.props.onModify({ name: username });
    }
    onClickButton = () => {
        if( !this.props.name ) {
            this.setState({ suffix: <span style={{ color: 'red' }}>Name required</span> });
        } else if ( !this.props.comment ) {
            message.info('Please input comment');
        } else {
            this.props.onSubmit();
        }
    }
    render() {
        const { suffix } = this.state;
        return (
            <div className="comment">
            <span><FormattedMessage id="msg.comment" defaultMessage="Leave your comment:" /></span>
            <TextArea
                className="textarea"
                placeholder="Comment"
                autosize={{ minRows: 2, maxRows: 4 }}
                value={this.props.comment}
                onChange={this.onChangeComment}
            />
            <span><FormattedMessage id="msg.name" defaultMessage="Nickname:" /></span>
            <Input
                className="nameinput"
                placeholder="Enter your name"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={suffix}
                value={this.props.name}
                onChange={this.onChangeUserName}
                ref={node => this.nameInput = node}
            />
            <Button type="primary" onClick={this.onClickButton}><FormattedMessage id="msg.btn" defaultMessage="Submit" /></Button>
            <div className="msgicon">
            <Badge count={this.props.count}>
            <Icon className="msgicon-main" type="message" style={{ fontSize:64 }} onClick={this.props.onInitialMessage} />
            </Badge>
            </div>
            </div>
        );
    }
};
const mapStateToProps = (state, ownProps) => {
    return {
        name: state.message.name,
        comment: state.message.comment,
        count: state.message.count
    };
} ;
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onModify: (obj) => dispatch(modify(obj)),
        onSubmit: () => dispatch(submit()),
        onInitialMessage: () => dispatch(dialogActions.initialmessage(<Spin />))
    };
};

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Message));
