import { actions as messageActions } from '../Message/';
import { actionTypes as messageActionTypes } from '../Message/';
import { message } from 'antd';
import { txDb } from './pouchdb.js';
import { ofType, mergeMap, map, timestamp, catchError, of, fromPromise } from './Rxjs-operator.js'

const submitMessageEpic = (action$, store) =>
    action$.pipe(
        ofType(messageActionTypes.SUBMIT),
        map(action => ({...store.getState().message})),
        map(obj => {
            const {count, ...data} = obj;
            return data;
        }),
        timestamp(),
        map(msg => ({...msg.value, date: msg.timestamp, _id: msg.timestamp.toString()})),
        mergeMap(datedTx =>
            fromPromise(txDb.put(datedTx)).pipe(
                map((res) => {
                    message.success('Submit succeed');
                    let count = store.getState().message.count + 1;
                    return messageActions.modify({ comment:'', count: count });
                }),
                catchError((err) => {
                    message.error('Try later... Server isn\'t working now');
                    return of({
                        type: 'SUBMIT_FAIL',
                        error: err
                    });
                })
            )
        )
    );

export default submitMessageEpic;
