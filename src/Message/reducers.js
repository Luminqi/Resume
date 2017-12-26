import { MODIFY, SUBMIT } from './actionTypes';

export default (state = {name: '', comment: '', count: 0}, action) => {
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
