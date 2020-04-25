//hoc - higher order component - A component that renders another component.
//Reuse code
//Render hijacking
//prop manipulation
//Abstract state
console.log('hoc is running!')


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

//const AdminInfo = withAdminWarning(Info);
//ReactDOM.render(<AdminInfo isAdmin={true} info='There are the details.'/>, document.getElementById('app'));

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/>:<p>Please login to view the info!</p>}
        </div>
    )
}

const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={true} info='There are the details.'/>, document.getElementById('app'));