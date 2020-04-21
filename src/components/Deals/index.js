import React from "react";
import "./Deals.scss";
import Calendar from "../Calendar";
import Profile from "../Profile";
import dateLeft from "../../assets/img/choose-date-left.svg";
import dateRight from "../../assets/img/choose-date-right.svg";

const Deals = () => {
    return(
        <>
        <div className="deals-content">
            <div className="section-1">
                <Calendar />
                <Profile />
            </div>
            <div className="section-2">
                <div className="calendar-options">
                    <div className="date-indicator"><span>Today</span></div>
                    <div className="choose-date">
                       <span>
                           <img src={dateLeft} alt="date left" />
                       </span>
                       <span>
                           <img src={dateRight} alt="date right" />
                       </span>
                    </div>
                    <div className="date"><span>March 28, Saturday</span></div>
                    <div className="balance"><span>65,000 AMD</span></div>
                    <div className="dropdown-history"><span>Last 7 days</span><img src={dateLeft} alt="dropdown button" /></div>
                </div>
                <div className="search-input">
                    <img src={search-icon} alt="search icon" />
                    <input placeholder="Search" type="text" id="search"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Deals;