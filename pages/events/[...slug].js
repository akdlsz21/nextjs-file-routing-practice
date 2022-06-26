import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/Button';

function FilteredEventsPage() {
	const router = useRouter();

	const filterData = router.query.slug;

	if (!filterData) {
		return (
			<>
				<p className="center">No filter data</p>
				<Button link="/events">Go to Events</Button>
			</>
		);
	}

	const filteredYears = filterData[0];
	const filteredMonth = filterData[1];

	const numYear = Number(filteredYears);
	const numMonth = Number(filteredMonth);
	const date = new Date(numYear, numMonth - 1);
	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2030 ||
		numYear < 1970 ||
		numMonth > 12 ||
		numMonth < 1
	) {
		return (
			<>
				<p className="center">No filter data</p>
				<Button link="/events">Go to Events</Button>
			</>
		);
	}

	const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<>
				<p className="center">No filter data</p>
				<Button link="/events">Go to Events</Button>
			</>
		);
	}

	return (
		<>
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</>
	);
}

export default FilteredEventsPage;
