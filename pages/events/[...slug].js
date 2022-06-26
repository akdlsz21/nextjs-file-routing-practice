import { useRouter } from 'next/router';

function FilteredEventsPage() {
	const router = useRouter();

	const filterData = router.query.slug;

	if (!filterData) {
		return <p className="center">No filter data</p>;
	}

	return (
		<div>
			<h1>Events</h1>
			<div> FilteredEvents</div>
		</div>
	);
}

export default FilteredEventsPage;
