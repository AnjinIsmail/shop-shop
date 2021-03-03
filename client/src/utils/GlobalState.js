import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'
// import {composeWithDevTools} from 'redux-devtools-extension';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};




export { StoreProvider, useStoreContext };