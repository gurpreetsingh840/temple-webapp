const fs = require('fs');
const path = require('path');

// Read calendar_events.json
const calendarEvents = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'calendar_events.json'), 'utf8')
);

// Get current year
const currentYear = new Date().getFullYear();

// Transform and filter the data
const filteredEvents = calendarEvents.filter(event => {
  const eventYear = new Date(event.date).getFullYear();
  return eventYear >= currentYear;
});

const transformedEvents = {
  events: filteredEvents.map((event, index) => {
    // Extract name from desc (everything before the opening parenthesis)
    const name = event.desc.split('(')[0].trim();
    
    return {
      id: index + 1, // Renumber starting from 1
      name: name,
      date: event.date,
      desc: event.desc,
      descHindi: event.descHindi,
      descPunjabi: event.descPunjabi
    };
  })
};

// Write to events.json
fs.writeFileSync(
  path.join(__dirname, 'events.json'),
  JSON.stringify(transformedEvents, null, 4)
);

console.log(`✓ Filtered to current year (${currentYear}) and beyond`);
console.log(`✓ Successfully transformed ${transformedEvents.events.length} events`);
console.log('✓ Written to events.json');
