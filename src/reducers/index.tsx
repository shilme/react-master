// import { combineReducers } from 'redux';
// import { enthusiasm } from './demo';
// const rootReducer = combineReducers({
//   demo: enthusiasm
// });

// export default rootReducer;


import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { enthusiasm } from './demo';
const rootReducer = combineReducers({
  demo: enthusiasm,
  routing: routerReducer
});

export default rootReducer;