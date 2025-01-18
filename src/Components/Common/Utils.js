export function sortTasksByDate(tasks, isAscending = true) {
    return tasks.sort((a, b) => {
        const dateA = new Date(a.taskDueDate);
        const dateB = new Date(b.taskDueDate);

        if (isAscending) {
            return dateA - dateB; // Ascending order
        } else {
            return dateB - dateA; // Descending order
        }
    });
}

export function formatDate(dateString) {
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Add suffix to the day
    const suffix = (day) => {
        if (day % 10 === 1 && day !== 11) return "st";
        if (day % 10 === 2 && day !== 12) return "nd";
        if (day % 10 === 3 && day !== 13) return "rd";
        return "th";
    };

    return `${month} ${day}${suffix(day)}, ${year}`;
}