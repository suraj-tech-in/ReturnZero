document.addEventListener("DOMContentLoaded", () => {
  const addEventButton = document.getElementById("add-event-button");
  const eventFormContainer = document.getElementById("event-form-container");
  const eventForm = document.getElementById("event-form");
  const eventCards = document.getElementById("event-cards");

  // Show the form when the button is clicked
  addEventButton.addEventListener("click", () => {
    eventFormContainer.style.display = "block";
  });

  // Handle form submission
  eventForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Collect form data
    const title = document.getElementById("event-title").value;
    const description = document.getElementById("event-description").value;
    const location = document.getElementById("event-location").value;
    const eligibility = document.getElementById("event-eligibility").value;
    const fee = document.getElementById("event-fee").value;
    const imageUrl = document.getElementById("event-image").value;

    // Create a new card element
    const newCard = document.createElement("div");
    newCard.className = "card mb-3 ms-3";
    newCard.style.maxWidth = "540px";
    newCard.innerHTML = `
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${imageUrl}" class="img-fluid rounded-start" alt="${title}" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${description}</p>
              <p class="card-text">
                <small class="text-body-secondary">${location} | ${eligibility} | Rs ${fee}</small>
              </p>
            </div>
          </div>
        </div>
      `;

    // Add the new card to the event cards section
    eventCards.appendChild(newCard);

    // Hide the form and reset it
    eventFormContainer.style.display = "none";
    eventForm.reset();
  });
});
