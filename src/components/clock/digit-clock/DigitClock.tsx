import React from 'react';
import classes from './DigitClock.module.scss'

interface IDigitClockProps {
	date: Date
}

const DigitClock = ({date}: IDigitClockProps) => {

	const classNames = [classes.digital];
	const value = {
		hour: date.getHours(),
		min: date.getMinutes(),
	}
	if (value.hour >= 12) {
		classNames.push(classes.pm)
	}

	return (
		<div className={classNames.join(' ')}>
			<span>{value.hour}</span>
			<span>:</span>
			<span>{value.min < 10 ? ('0' + value.min) : value.min}</span>
		</div>
	);
};

export default DigitClock;
