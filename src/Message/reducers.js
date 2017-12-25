import { MODIFY, SUBMIT } from './actionTypes';

export default (state = {name: '', comment: ''}, action) => {
    switch(action.type) {
        case MODIFY: {
            const {type, ...message} = action;
            return { ...state, ...message };
        }
        case SUBMIT:
        default: {
            return state;
        }
    }
};
