import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList';

function HomePage() {
	return (
		<div>
			<EventList items={getFeaturedEvents()}></EventList>
		</div>
	);
}

export default HomePage;
