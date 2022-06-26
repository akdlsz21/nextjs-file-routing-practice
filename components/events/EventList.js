import React from 'react';
import EventItem from './EventItem';
import classes from './EventList.module.css';

const EventList = (props) => {
	const { items } = props;

	console.log(items);

	return (
		<ul className={classes.list}>
			{items.map((ev) => (
				<EventItem
					key={ev.id}
					id={ev.id}
					title={ev.tile}
					location={ev.location}
					date={ev.date}
					image={ev.image}
				/>
			))}
		</ul>
	);
};

export default EventList;
