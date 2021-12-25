import { createStore } from "redux";
import { mainreducer } from "./reducers";


export const store = createStore(mainreducer)