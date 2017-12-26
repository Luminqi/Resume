import { SHOWMODAL, HIDEMODAL, UPDATECONTENT, INITIALMESSAGE } from './actionTypes';

export default (state = { visible: false, title: '', progress: 'loading', content: ''}, action) => {
    switch(action.type) {
        case HIDEMODAL: {
            return {...state, visible: action.visible};
        }
        case INITIALMESSAGE:
        case SHOWMODAL: {
            return {...state, visible: action.visible, title: action.title, progress: action.progress, content: action.content };
        }
        case UPDATECONTENT: {
            return {...state, content: action.content};
        }
        default: {
            return state;
        }
    }
};
