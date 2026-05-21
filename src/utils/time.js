export function parseTime(timeStr) {
    // remove a1/p1 suffixes
    const cleaned = timeStr
        .replace(/\s*a1\/p1/i, "")
        .trim();

    // 12-hour format
    const twelveHourMatch =
        cleaned.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);

    if (twelveHourMatch) {
        let [, h, m, period] = twelveHourMatch;

        let hours = parseInt(h, 10);
        const minutes = parseInt(m, 10);

        if (period.toUpperCase() === "PM" && hours !== 12)
            hours += 12;

        if (period.toUpperCase() === "AM" && hours === 12)
            hours = 0;

        return hours * 60 + minutes;
    }

    // 24-hour format
    const twentyFourHourMatch =
        cleaned.match(/^(\d{1,2}):(\d{2})(?::\d{2})?$/);

    if (twentyFourHourMatch) {
        const [, h, m] = twentyFourHourMatch;

        return parseInt(h, 10) * 60 + parseInt(m, 10);
    }

    throw new Error(`Invalid time format: ${timeStr}`);
}

export function format12Hour(minutes) {
    const h24 = Math.floor(minutes / 60);
    const mins = minutes % 60;

    const period = h24 >= 12 ? "PM" : "AM";

    let h12 = h24 % 12;

    if (h12 === 0) h12 = 12;

    return `${h12}:${String(mins).padStart(2, "0")} ${period}`;
}