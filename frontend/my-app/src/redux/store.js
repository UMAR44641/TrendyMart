import { legacy_createStore,compose,combineReducers,applyMiddleware } from "redux";
import { authReducer } from "./auth/auth.reducer";
import thunk from "redux-thunk";

const rootReducer=combineReducers({
 auth:authReducer
})

const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=legacy_createStore(rootReducer,composer(applyMiddleware(thunk)))