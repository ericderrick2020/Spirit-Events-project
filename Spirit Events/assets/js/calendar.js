// Get the calendar container and table elements
const calendarContainer = document.getElementById('calendar-container');
const calendarTable = document.getElementById('calendar-table');
const calendarBody = document.getElementById('calendar-body');

// Set the current month and year
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// Function to generate the calendar dates
function generateCalendar() {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();

    // Create a table row for each week
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        calendarBody.appendChild(row);

        // Create a table cell for each day of the week
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');
            row.appendChild(cell);

            // Calculate the day of the month
            const day = i * 7 + j - firstDayOfWeek + 1;

            // If the day is within the current month, add the date
            if (day > 0 && day <= daysInMonth) {
                cell.textContent = day;
            }
        }
    }
}

// Function to update the month and year display
function updateMonthYearDisplay() {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthYearElement = document.getElementById('month-year');
    monthYearElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;
}

// Initialize the calendar
generateCalendar();
updateMonthYearDisplay();

// Add event listeners for the previous and next month buttons
document.getElementById('prev-month').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    calendarBody.innerHTML = '';
    generateCalendar();
    updateMonthYearDisplay();
});

document.getElementById('next-month').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    calendarBody.innerHTML = '';
    generateCalendar();
    updateMonthYearDisplay();
});