import { actions as messageActions } from '../Message/';
import { actionTypes as messageActionTypes } from '../Message/';
import { ofType } from 'redux-observable';
import { mergeMap, map, mapTo, catchError, timestamp } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { fromPromise } from 'rxjs/observable/fromPromise';
import PouchDB from 'pouchdb';

const txDb = new PouchDB('http://127.0.0.1:5984/resume');
const submitMessageEpic = (action$, store) =>
    action$.pipe(
        ofType(messageActionTypes.SUBMIT),
        map(action => ({...store.getState().message})),
        timestamp(),
        map(msg => ({...msg.value, date: msg.timestamp})),
        mergeMap(datedTx =>
            fromPromise(txDb.post(datedTx)).pipe(
                mapTo(messageActions.modify({ comment:'' }))
            )
        )
    );

export default submitMessageEpic;
