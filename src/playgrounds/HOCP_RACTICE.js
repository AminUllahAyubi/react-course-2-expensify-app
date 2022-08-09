import React from "react";
import ReactDOM from "react-dom";
const Info = (props) => {
  return (
    <div>
      <h1>let's learn hoc</h1>
      <p>You learn : {props.info}</p>
    </div>
  );
};
const Hoc = (WrappedComponenet) => {
  return (props) => {
    return (
      <div>
        <WrappedComponenet {...props} />
      </div>
    );
  };
};
const RequireAuthenticate = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        {props.isAuthenticate ? <WrappedComponent {...props} /> : <p>you are not authenticated user</p>}
      </div>
    )
  }
}
const RenderHoc = Hoc(Info);
const AuthInfo = RequireAuthenticate(RenderHoc)
ReactDOM.render(
  <AuthInfo isAuthenticate={true} info="high order component" />,
  document.getElementById("app")
);



