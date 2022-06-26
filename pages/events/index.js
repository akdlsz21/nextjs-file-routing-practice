import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/events-search';

function AllEventsPage() {
	const events = getAllEvents();
	console.log(`AllEventsPage: events: ${JSON.stringify(events)}`);
	return (
		<>
			<EventsSearch />
			<EventList items={events} />
		</>
	);
}

export default AllEventsPage;
