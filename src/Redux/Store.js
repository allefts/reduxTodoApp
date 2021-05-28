import { createStore } from "redux";
import todoReducer from "./rootReducer";

let Store = createStore(todoReducer);

export default Store;
