import { Store, applyMiddleware, combineReducers, createStore } from "redux";
import { dialogReducer } from "./reducers/dialogs-reducer";
import { sidebarReducer } from "./reducers/sidebar-reducer";
import { profailReducer } from "./reducers/profail-reducer";
import { usersReducer } from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  profilePage: profailReducer,
  dialogsPage: dialogReducer,
  sideBar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));

//@ts-ignore
window.store = store;
