/**
 * Date Module
 */

// Exports date formatted: DayOfWeek, Month Day of Month
// Example: Sunday, May 1
exports.getDate = function() {
    const currentDate = new Date();
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };

    return currentDate.toLocaleDateString("en-US", options);
}


// Exports only Day of Week
// Example: Sunday
exports.getDayOfWeek = function() {
    const currentDate = new Date();
    const options = {
        weekday: 'long',
    };

    return currentDate.toLocaleDateString("en-US", options);
}