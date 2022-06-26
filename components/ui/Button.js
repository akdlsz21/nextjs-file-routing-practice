import Link from 'next/link';
import React from 'react';
import classes from './Button.module.css';

const Button = ({ link, children }) => {
	return (
		<Link href={link}>
			<a className={classes.btn}>{children}</a>
		</Link>
	);
};

export default Button;
