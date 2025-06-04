const eventsData = [
    {
        id: 1,
        name: "Event1",
        datetime: "2025-07-10T18:30",
        location: "Islamabad, Pakistan",
        description: "Join us for a conference with scholars from all around the world.",
    },
    {
        id: 2,
        name: "Event2",
        datetime: "2025-08-01T07:00",
        location: "Karachi, Pakistan",
        description: "Talks by leading innovators in AI, ML and Blockchain",
    },
    {
        id: 3,
        name: "Event3",
        datetime: "2025-07-15T09:00",
        location: "Lahore, Pakistan",
        description: "An exciting workshop on humanoids and their advent in Pakistan",
    },
    
];

function formatDateTime(isoString) {
    const options={
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    };
    const dt = new Date(isoString);
    return dt.toLocaleString("en-US", options);
}

function searchFilter() {
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = eventsData.filter((ev) => ev.name.toLowerCase().includes(query));
        renderEvents(filtered);
    })
}

function createEventCard(event){
    const card=document.createElement("div");
    card.classList.add("event-card");
    
    const content=document.createElement("div");
    content.classList.add("event-content");
    const title=document.createElement("h3");
    title.textContent=event.name;
    content.appendChild(title);
    const info = document.createElement("div");
    info.classList.add("event-info");
    info.innerHTML = `<strong>${formatDateTime(event.datetime)}</strong> | ${event.location}`;
    content.appendChild(info);

    const desc = document.createElement("p");
    desc.textContent = event.description;
    content.appendChild(desc);

    const btn = document.createElement("button");
    btn.classList.add("register-btn");
    btn.textContent= "Register";
    card.appendChild(content);
    card.appendChild(btn);

    return card;
}

function renderEvents(eventsArray) {
    const container = document.getElementById("eventsContainer");
    container.innerHTML="";

    if(eventsArray.length===0){
        container.innerHTML = "<p>No events found.</p>";
        return;
    }

    eventsArray.forEach((evt) => {
        const card=createEventCard(evt);
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderEvents(eventsData);
    searchFilter();
})