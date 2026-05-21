import { format12Hour } from "../utils/time";

export default function Sidebar({ event, isOpen }) {
    const sidebar = isOpen
        ? <EventDetails event={event} />
        : <Header />;

    return (
        <div className="sidebar">{sidebar}</div>
    )
}

const Header = () => {
    return (
        <div className="header">
            <div className="year">2T6</div>
            <div className="vertical-group">
                <h1 className="month">august</h1>
                <div className="dates">26–30th</div>
            </div>
        </div>
    )
}

function EventDetails({ event }) {
    return (
        <div className="details">
            <h1>{event.title}</h1>
            <h2>{format12Hour(event.start)}{" "}-{" "}{format12Hour(event.end)}</h2>
            <p dangerouslySetInnerHTML={{ __html: event.description }}></p>
        </div>
    )
}