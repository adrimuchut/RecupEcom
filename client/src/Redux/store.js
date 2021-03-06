import { createStore, applyMiddleware,  } from 'redux'
import Reducer from './reducer'
import thunk from 'redux-thunk'

const store = createStore(
    Reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(thunk)
  );
  export default store;
