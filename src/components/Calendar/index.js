import React, {useState} from "react";
import "./Calendar.scss";
import buttonRight from "../../assets/img/button-right.svg";
import buttonLeft from "../../assets/img/button-left.svg";

const Calendar = () => {
    const [weekDays] = useState([
        {
            weekDay: "Sun",
            weekNum: 22
        },
        {
            weekDay: "Mon",
            weekNum: 23
        },
        {
            weekDay: "Tue",
            weekNum: 24
        },
        {
            weekDay: "Wed",
            weekNum: 25
        },
        {
            weekDay: "Thu",
            weekNum: 26
        },
        {
            weekDay: "Fri",
            weekNum: 27
        },
        {
            weekDay: "Sat",
            weekNum: 28
        }
    ]);
    
    const [activeItem, setActiveItem] = useState(-1);

    const handleClick = (index) => {
         setActiveItem(index)
    }

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <div className="button button-left">
                   <img src={buttonLeft} alt="button-left" />
                </div>
                <span className="month">March</span>
                <div className="button button-right">
                   <img src={buttonRight} alt="button-right"/>
                </div>
            </div>
            <div className="week-days">
                {weekDays.map((weekDay, index) => (
                    <span key={index} className="dates">
                    <h1>{weekDay.weekDay}</h1>
                    <p className={activeItem === index ? "active-day" : ""} onClick={handleClick.bind(this, index)}>{weekDay.weekNum}</p>
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Calendar;