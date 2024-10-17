// Sample event data
const events = [
    { images: "../assets/img/party_3.jpg",title: "Spirit Vibes", date: "2024-07-15", location: "Lugogo Cricket Oval" },
    { images: "../assets/img/party_3.jpg",title: "Tech Conference", date: "2025-03-15", location: "Kampala Convention Center" },
    { images: "../assets/img/party_3.jpg",title: "Food & Wine Expo", date: "2025-09-22", location: "Serena Hotel Gardens" },
    { images: "../assets/img/party_3.jpg",title: "Music Festival", date: "2024-08-08", location: "Jinja Nile Resort" },
    { images: "../assets/img/party_3.jpg",title: "Art Exhibition", date: "2017-04-10", location: "National Art Gallery" },
    { images: "../assets/img/party_3.jpg",title: "Startup Pitch", date: "2015-05-05", location: "Innovation Hub" },
    { images: "../assets/img/party_3.jpg",title: "Gaming Convention", date: "2025-11-18", location: "Arena Mall" },
    { images: "../assets/img/party_3.jpg",title: "Book Fair", date: "2025-01-18", location: "Public Library" },
    { images: "../assets/img/party_3.jpg",title: "Charity Gala", date: "2025-12-12", location: "Pearl of Africa Hotel" },
    { images: "../assets/img/party_3.jpg",title: "Marathon", date: "2025-02-14", location: "City Square" },
    { images: "../assets/img/party_3.jpg",title: "Past Concert", date: "2023-10-10", location: "Old Stadium" },
    { images: "../assets/img/party_3.jpg",title: "Past Art Show", date: "2022-06-15", location: "Art Gallery" }
];

const cardsPerPage = 9;
let currentPage = 1;
let filteredEvents = events;

function displayCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; // helps to Clear previous cards

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentEvents = filteredEvents.slice(startIndex, endIndex);

    currentEvents.forEach(event => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${event.images}" alt="Event Image">
            <h3>${event.title}</h3>
            <p class="event-date"><i class="fa-solid fa-calendar"></i> ${new Date(event.date).toLocaleDateString()}</p>
            <p class="event-location"><i class="fa-solid fa-location-dot"></i> ${event.location}</p>
            <a href="buyticket.html"><button>Get Ticket</button></a>
        `;
        cardContainer.appendChild(card);
    });
}

function updatePagination() {
    const totalPages = Math.ceil(filteredEvents.length / cardsPerPage);
    document.getElementById("prev").disabled = currentPage === 1;
    document.getElementById("next").disabled = currentPage === totalPages;
}

function filterEvents() {
    const filterValue = document.getElementById("eventFilter").value;
    const searchValue = document.getElementById("searchBar").value.toLowerCase();

    filteredEvents = events.filter(event => {
        const isPast = new Date(event.date) < new Date();
        const isThisYear = new Date(event.date).getFullYear() === new Date().getFullYear();
        const matchesSearch = event.title.toLowerCase().includes(searchValue);

        switch (filterValue) {
            case "thisYear":
                return isThisYear && matchesSearch;
            case "past":
                return isPast && matchesSearch;
            default: 
                return matchesSearch;
        }
    }).sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort from current to past

    currentPage = 1; // Reset to the first page
    displayCards();
    updatePagination();

    // Ensure currentPage does not exceed totalPages after filtering
    const totalPages = Math.ceil(filteredEvents.length / cardsPerPage);
    if (currentPage > totalPages && totalPages > 0) {
        currentPage = totalPages;
        displayCards();
    }
}

document.getElementById("eventFilter").addEventListener("change", filterEvents);
document.getElementById("searchBar").addEventListener("input", filterEvents);

document.getElementById("prev").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayCards();
        updatePagination();
    }
});

document.getElementById("next").addEventListener("click", () => {
    const totalPages = Math.ceil(filteredEvents.length / cardsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayCards();
        updatePagination();
    }
});

// Initial display
displayCards();
updatePagination();
