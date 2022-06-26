import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';

function AllEventsPage() {
	const events = getAllEvents();
	console.log(`AllEventsPage: events: ${JSON.stringify(events)}`);
	return (
		<div>
			<EventList items={events} />
		</div>
	);
}

export default AllEventsPage;
