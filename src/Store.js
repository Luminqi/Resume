import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as switchReducer } from './Switch/';
import { reducer as changetabReducer } from './Tabs/';
import { reducer as dialogReducer } from './Dialog/';
import { reducer as messageReducer } from './Message/';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import showContentEpic from './Epics/showContentEpic.js';
import submitMessageEpic from './Epics/submitMessageEpic.js';

const reducer = combineReducers({
    lang: switchReducer,
    tabKey: changetabReducer,
    dialog: dialogReducer,
    message: messageReducer
});
const epic = combineEpics(showContentEpic, submitMessageEpic)
const epicMiddleware = createEpicMiddleware(epic);

export default createStore(reducer, applyMiddleware(epicMiddleware));



// initialState= {
//     lang: {
//         locales: 'en-US'|| 'zh-CN',
//         messages: {
//            'switch.en': 'EN',
//            'switch.zh': 'ZH'
//         }
//     },
//     tabKey: '1',
//     dialog: {
//         visible: false||true,
//         title: 'React',
//         progress: 'loading'||'error'||'complete',
//         content: ''
//     }
//     message: {
//         name: 'Simon',
//         comment: 'good',
//     }
// }
