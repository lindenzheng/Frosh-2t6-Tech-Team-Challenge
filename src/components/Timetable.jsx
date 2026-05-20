import { useState, useEffect, useRef } from "react";

export default function Timetable() {
    const days = ["monday", "tuesday", "wednesday", "thursday", "friday"];
    return (
        <div className="timetable">
            {days.map((day, index) => (
                <div className="column" key={index}>
                    <div className="column-header">{day}</div>
                </div>
            ))}
        </div>
    )
}