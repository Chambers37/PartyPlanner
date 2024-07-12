const api = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2406-ftb-et-web-ft/events"

class EventCache {
  constructor() {
    this.cache = {};
  }
  
}

const getEvents = async () => {
  const response = await fetch(api);
  const eventsObject = await response.json();
  const eventsArray = eventsObject.data;
  const main = document.querySelector('main');
  const ol = document.querySelector('ol');
  

  eventsArray.forEach(event => {

    const li = document.createElement('li');
    const eventName = event.name;
    const eventDate = event.date.slice(0,10);
    const eventTime = event.date.slice(10).slice(1);
    const eventLocation = event.location;
    const eventDescription = event.description;
    

    li.innerHTML = `
    <h2>${eventName.slice(0,1).toUpperCase() + eventName.slice(1)}</h2>
    <p><b>Date:</b> ${eventDate}</p>
    <p><b>Time:</b> ${eventTime}</p>
    <p><b>Location:</b> ${eventLocation}</p>
    <p><b>Description:</b> ${eventDescription}</p>
    `;

    ol.append(li)
  });
  console.log(eventsArray);
}

getEvents();