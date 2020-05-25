import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) =>(
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Expensify</h1>
                </Link>
                <button className="button button--link" onClick={startLogout}>Logout</button>
            </div>           
        </div>       
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

{/* <NavLink to="/create" activeClassName="is-active">CreateExpense</NavLink>
<NavLink to="/help" activeClassName="is-active">HelpPage</NavLink> */}