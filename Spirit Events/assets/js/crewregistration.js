let crewCount = 0;

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const crewCountDisplay = document.createElement("p");
    crewCountDisplay.id = "crew-count";
    crewCountDisplay.style.textAlign = "center";
    crewCountDisplay.innerText = `Total Crew Registered: ${crewCount}`;
    document.querySelector(".crew-registration").appendChild(crewCountDisplay);

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the default form submission
        crewCount++; // Increment the crew count
        crewCountDisplay.innerText = `Total Crew Registered: ${crewCount}`; // Update the display
        form.reset(); // Reset the form fields
    });
});