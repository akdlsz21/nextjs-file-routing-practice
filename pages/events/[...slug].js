import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';

function FilteredEventsPage() {
	const router = useRouter();

	const filterData = router.query.slug;

	if (!filterData) {
		return <p className="center">No filter data</p>;
	}

	const filteredYears = filterData[0];
	const filteredMonth = filterData[1];

	const numYear = Number(filteredYears);
	const numMonth = Number(filteredMonth);

	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2030 ||
		numYear < 1970 ||
		numMonth > 12 ||
		numMonth < 1
	) {
		return <p className="center">Invalid filter data</p>;
	}

	const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

	if (!filteredEvents || filteredEvents.length === 0) {
		return <p className="center">No events found</p>;
	}

	return <EventList items={filteredEvents} />;
}

export default FilteredEventsPage;
