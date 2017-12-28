import React from 'react';
import { actions as dialogActions } from '../Dialog/';
import { actionTypes as dialogActionTypes } from '../Dialog/';
import { actions as messageActions } from '../Message/';
import { List } from 'antd';
import { txDb } from './pouchdb.js';
import moment from 'moment';
import { ofType, switchMap, mergeMap, catchError, of, fromPromise } from './Rxjs-operator.js';

const msgList = (data) => {
    const listdata = data.map(
        (item) => ({
            key: item.doc._id,
            name: item.doc.name,
            comment: item.doc.comment,
            date: moment(item.doc.date).format('MM/DD/YYYY HH:mm')
        })
    );
    return (
        <List
            itemLayout="horizontal"
            size="large"
            dataSource={listdata}
            renderItem={item => (
                <List.Item key={item.key}>
                    <List.Item.Meta
                        title={item.name}
                        description={item.date}
                    />
                    {item.comment}
                </List.Item>
            )}
        />
    );
} ;

const showMessageEpic = (action$) =>
    action$.pipe(
        ofType(dialogActionTypes.INITIALMESSAGE),
        switchMap(action =>
            fromPromise(txDb.allDocs({
                include_docs: true,
                limit: 50,
                descending: true
            })).pipe(
                mergeMap((res) => [dialogActions.updatecontent(msgList(res.rows)), messageActions.modify({count: 0})]),
                catchError((err) => of(dialogActions.updatecontent(<span>Try later... Server is not working now</span>)))
                )
        )
    );

export default showMessageEpic;
