//eslint-disable-next-line
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Active_Link_For_Dashboard.css"
const Active_Link_For_Dashboard = ({to , children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive}) => isActive? "Active_Link_For_Dashboard" : "" }
        >
           {children}
        </NavLink>
    );
};

export default Active_Link_For_Dashboard;
