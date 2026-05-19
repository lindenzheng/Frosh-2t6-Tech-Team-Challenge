import { useState, useEffect, useRef } from "react";

const Week = () => {
    const days = ["monday", "tuesday", "wednesday", "thursday", "friday"];
    return (
        <div className="calendar">
            {days.map((day, index) => (
                <div className="day-column" key={index}>
                    <div className="day-title">{day}</div>
                </div>
            ))}
        </div>
    )
}

export default Week