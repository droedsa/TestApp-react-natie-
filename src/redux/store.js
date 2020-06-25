import galleryPage from "./reducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const reducer = galleryPage;

const store = createStore(reducer,applyMiddleware(thunk));

export default store;