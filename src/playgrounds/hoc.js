import React from "react";
import  ReactDOM from "react-dom";


const Info=(props)=>{
    return(
        <div>
            <h2>This is info component</h2>
            <p>Don't remove this {props.number}</p>
        </div>
    );
}

const withAdminWarning=(WrappedComponent)=>{
    return (props)=>{
        return(
            <div>
                <p>This is hoc component</p>
                <WrappedComponent />
            </div>
        )
    }
}

const HocComponent=withAdminWarning(Info);

ReactDOM.render(<HocComponent number={23}/>,document.getElementById('app'));




