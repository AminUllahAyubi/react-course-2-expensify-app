import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { createStore, combineReducers } from "redux";


                //      Redux practice 
const addCount = ({ value } = {}) => {
  return {
    type: "increment",
    value,
  };
};
const defaultCount=10;
const countReducer=(state={count:defaultCount},action)=>{
    switch(action.type){
        case'increment':
            return{
                count:defaultCount+action.value
            }
        default: 
            return{
                state
            }       
    }
}

//  name reducers

const nameReducer=(state=[{name:'anonymous'}],action)=>{
    switch(action.type){
        case'add_name':
        return{

        }
        case'change_to_upperCase':
        return{

        }
    }
}

const store = createStore(combineReducers(
    {
        number:countReducer,
        names:nameReducer
    }
));





store.subscribe(() => {
  console.log(store.getState());
});
// console.log(store.getState());
store.dispatch({
  type: "increment",
  value: 1,
});
store.dispatch(addCount({ value: 23 }));

                                    //      Router practice
const Header = () => {
  return (
    <div>
      <h1>Welcome To Router Topics</h1>
      <Link to="/">Home Page</Link>
      <Link to="/firstPage">firstPage</Link>
      <Link to="/secondPage/23">secondPage</Link>
    </div>
  );
};
const Home = () => {
  return(
    <div>
        <h1>Home Page</h1>
        <p>This is the count variable value of the number object which is controled to store reducer function { store.getState().number.count}</p>
    </div>
  )
};
const FirstPage = () => {
  return (
    <div>
      <h1>FirstPage</h1>
    </div>
  );
};
const SecondPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Second Page</h1>
      {props.location.hash}
    </div>
  );
};
const PageNotFound = () => {
  return (
    <div>
      <h1>404! PageNotFound</h1>
    </div>
  );
};
const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true}></Route>
          <Route path="/firstPage" component={FirstPage}></Route>
          <Route path="/secondPage/:id" component={SecondPage}></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
ReactDOM.render(<Router />, document.getElementById("app"));
