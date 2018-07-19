import React from "react"

import { render } from "react-dom"

import { Provider } from "react-redux"

import { createStore, applyMiddleware } from "redux"

import thunk from "redux-thunk"

import rootReducer from "./reducers"

import App from "./components/App"
import "./index.css"

const middlewares = [thunk]
const store = createStore(rootReducer, applyMiddleware(...middlewares))

render(
    <Provider store={store}>
        <div className="split left">
            <App />
        </div>
    </Provider>,
    document.getElementById("root")
)
