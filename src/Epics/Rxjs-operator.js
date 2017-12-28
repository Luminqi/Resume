import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { switchMap, mergeMap, map, timestamp, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { fromPromise } from 'rxjs/observable/fromPromise';

export { ofType, ajax, switchMap, mergeMap, map, timestamp, catchError, of, fromPromise};
