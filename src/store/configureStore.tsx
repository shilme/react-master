// import { createStore } from 'redux';
// import { enthusiasm } from '../reducers/demo';
// import { StoreState } from '../types/index';
// import initState from './initState';
// export default function () {
//   const store = createStore<StoreState>(enthusiasm, initState);
//   return store;
// }

import { createStore } from 'redux';
import  reducers  from '../reducers/index';
import { StoreState } from '../types/index';
import initState from './initState';
export default function () {
  // const store = createStore<StoreState>(reducers, initState);
  const store = createStore(reducers, initState);
  return store;
}