import { SHOWMODAL, HIDEMODAL, UPDATECONTENT, INITIALMESSAGE } from './actionTypes';

const showmodal = (title, progress, content) => ({
    type: SHOWMODAL,
    visible: true,
    title: title,
    progress: progress,
    content: content
});
const hidemodal = () => ({
    type: HIDEMODAL,
    visible: false
});
const updatecontent = (content) => ({
    type: UPDATECONTENT,
    content: content
});
const initialmessage = (content) => ({
    type: INITIALMESSAGE,
    visible: true,
    title: 'Messages',
    progress: 'loading',
    content: content
});

export { showmodal, hidemodal, updatecontent, initialmessage };
