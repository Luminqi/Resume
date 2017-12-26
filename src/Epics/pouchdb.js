import PouchDB from 'pouchdb';

export const txDb = new PouchDB('http://127.0.0.1:5984/resume');
