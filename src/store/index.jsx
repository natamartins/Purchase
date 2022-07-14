import { createStore } from "redux";
import reducer from "./reducers/combiner";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.dispatch({ type: "ADD_PRODUCT", list: "mes", product: "cafe" });

console.log("testando", store.getState());

export default store;
