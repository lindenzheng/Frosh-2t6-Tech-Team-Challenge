import { layoutEvents, normalizeEvents } from "../utils/events";
import { format12Hour } from "../utils/time";
import schedule from "../schedule_data.json";

const DAY_START = 7;
const DAY_END = 18;

const NITE_START = 18;
const NITE_END = 23;

const COLUMN_HEIGHT = 680;

const colors = {
    purple: "var(--purple)",
    darkPurple: "var(--dark-purple)",
    yellow: "var(--yellow)",
    green: "var(--green)",
    gray: "var(--gray)"
};

export default function Timetable({ setEvent, setIsOpen, nite }) {
    const normalized = normalizeEvents(schedule);
    const eventsByDay = layoutEvents(normalized);

    const visibleStart = nite ? NITE_START * 60 : DAY_START * 60;
    const visibleEnd = nite ? NITE_END * 60 : DAY_END * 60;
    const totalVisibleMinutes = visibleEnd - visibleStart;

    return (
        <div className="timetable">
            {Object.entries(eventsByDay).map(
                ([day, events]) => {
                    const visibleEvents = events.filter(event => event.end > visibleStart &&
                        event.start < visibleEnd);
                    return (
                        <div className="column" key={day}>
                            <div className="column-header">{day}</div>
                            <div className="column-body">
                                {visibleEvents.map(rawEvent => {
                                    const event = {
                                        ...rawEvent,
                                        visibleStart: Math.max(rawEvent.start, visibleStart),
                                        visibleEnd: Math.min(rawEvent.end, visibleEnd)
                                    };
                                    const top =
                                        ((event.visibleStart - visibleStart) /
                                            totalVisibleMinutes) * COLUMN_HEIGHT;

                                    const height =
                                        ((event.visibleEnd - event.visibleStart) /
                                            totalVisibleMinutes) * COLUMN_HEIGHT;

                                    const width =
                                        event.lanes === 2
                                            ? "50%"
                                            : "100%";

                                    const left =
                                        event.lane === 1
                                            ? "50%"
                                            : "0%";

                                    return (
                                        <div
                                            key={event.title + event.start}
                                            onMouseEnter={() => { setIsOpen(true); setEvent(event); }}
                                            onMouseLeave={() => setIsOpen(false)}
                                            className="event"
                                            style={{
                                                top,
                                                height,
                                                width,
                                                left,
                                                background: colors[event.color],
                                                color:
                                                    event.color === "darkPurple" && !nite
                                                        ? colors.yellow
                                                        : "var(--secondary)"
                                            }}
                                        >
                                            <h4>{event.title}</h4>
                                            <p>
                                                {format12Hour(rawEvent.start)}{" "}-{" "}{format12Hour(rawEvent.end)}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                }
            )}
        </div>
    );
}