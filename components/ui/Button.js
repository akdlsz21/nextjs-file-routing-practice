import Link from 'next/link';
import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
	const { link, children } = props;

	if (link) {
		return (
			<Link href={link}>
				<a className={classes.btn}>{children}</a>
			</Link>
		);
	}

	return (
		<button className={classes.btn} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;
