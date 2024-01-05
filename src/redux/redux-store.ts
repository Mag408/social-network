import { Store, combineReducers, createStore } from "redux";
import { dialogReducer } from "./reducers/dialogs-reducer";
import { sidebarReducer } from "./reducers/sidebar-reducer";
import { profailReducer } from "./reducers/profail-reducer";

const reducers = combineReducers({
  profilePage: profailReducer,
  dialogsPage: dialogReducer,
  sideBar: sidebarReducer,
});

export const store: Store = createStore(reducers);

//@ts-ignore
window.store = store;
