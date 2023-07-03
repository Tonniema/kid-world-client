//eslint-disable-next-line
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Active_Route.css"

const Active_Route = ({to , children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive}) => isActive? "active" : "" }
        >
           {children}
        </NavLink>
    );
};

export default Active_Route;
//