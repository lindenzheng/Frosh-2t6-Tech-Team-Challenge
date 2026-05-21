import { parseTime } from "./time";

export function normalizeEvents(schedule) {
    const normalized = [];

    Object.entries(schedule).forEach(([day, events]) => {
        events.forEach(event => {
            normalized.push({
                day: day.split(" ")[0],
                title: event["Event Name"].toUpperCase(),
                description: event["Event Description"],
                start: parseTime(event["Start Time"]),
                end: parseTime(event["End Time"]),
                color: event["Color"].replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
            });
        });
    });

    return normalized;
}

export function layoutEvents(events) {
    const byDay = {};

    events.forEach(event => {
        if (!byDay[event.day]) {
            byDay[event.day] = [];
        }

        byDay[event.day].push(event);
    });

    Object.values(byDay).forEach(dayEvents => {
        dayEvents.sort((a, b) => a.start - b.start);

        for (let i = 0; i < dayEvents.length; i++) {
            const current = dayEvents[i];

            current.lane = 0;
            current.lanes = 1;

            for (let j = 0; j < i; j++) {
                const prev = dayEvents[j];

                const overlaps =
                    current.start < prev.end &&
                    current.end > prev.start;

                if (overlaps) {
                    current.lane = 1;

                    current.lanes = 2;
                    prev.lanes = 2;
                }
            }
        }
    });

    return byDay;
}