import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/styles.css";
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {addTextFilter} from './actions/filters';
import { sortByAmount } from "./actions/filters";
import { sortByDate } from "./actions/filters";
import visibleExpense from './selectors/expenses';
const store=configureStore();
const jsx=(
    <Provider store={store}>
        <AppRouter></AppRouter>
    </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
