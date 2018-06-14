import React from 'react';
import ReactDom from 'react-dom';
import List from './components/List';
// import Note from './components/Note';

import { createStore } from 'redux';
import myReducer from './reducers/index';
import { Provider } from 'react-redux';
import Note from './components/Note';

const store = createStore(myReducer);

ReactDom.render(
    
    <Provider store = {store} >
        <List />
    </Provider>,
    // Provider declare store
    document.getElementById('root')
    );

// require('./example') 