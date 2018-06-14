import { createStore } from 'redux';
import { status, sort } from './actions/index';
import myReducer from './reducers/index';

const store = createStore(myReducer);

// store luu tru nhung reducer
// tu store dispatch action 

console.log('default', store.getState()); 

store.dispatch(status());

console.log('toggle_status', store.getState());

store.dispatch(sort({
    by : 'dat',
    value : -1
}));

// var sortaction = {
//     type : 'SORT',
//     sort :{
//         by: 'dat',
//         value : -1
//     }
// }
// store.dispatch(sortaction);

console.log('sort',store.getState());  