import React from 'react';
import {Link} from "react-router-dom";
import "./Sidebar.scss";
import header from "../../assets/img/header.png";
import deals from "../../assets/img/deals.svg";
import contacts from "../../assets/img/contacts.svg";
import employees from "../../assets/img/employees.svg";
import branch from "../../assets/img/branch.svg";
import analytics from "../../assets/img/analytics.svg";
import settings from "../../assets/img/settings.svg";

const Sidebar = () => {
    return (
       <div className="sidebar">
           <div className="sidebar-header">
               <img src={header} alt="header"/>
           </div>
           <div className="sidebar-links">
               <div className="link">
               <Link to="/deals"><img src={deals} alt="deals" /><span>Deals</span></Link>
               </div>
               <div className="link">
               <Link to="/contacts"><img src={contacts} alt="contacts" /><span>Contacts</span></Link>
               </div>
               <div className="link">
                <Link to="/employees"><img src={employees} alt="employees" /><span>Employees</span></Link>
               </div>
               <div className="link">
                   <Link to="/branch"><img src={branch} alt="branch" /><span>Branch</span></Link>
               </div>
               <div className="link">
                   <Link to="/analytics"><img src={analytics} alt="analytics" /><span>Analitycs</span></Link>
               </div>
               <div className="link">
                   <Link to="/settings"><img src={settings} alt="settings" /><span>Settings</span></Link>
               </div>
           </div>
       </div>
    )
}

export default Sidebar;