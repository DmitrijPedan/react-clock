import React from 'react';
import classes from './MonthDay.module.scss'

interface IMonthProps  {
	date: Date,
}

const MonthDay = ({date}: IMonthProps) => {
	const value = {
		month: date.getMonth(),
		monthName: date.toLocaleString('default', { month: 'short' }),
		dayName: date.toLocaleDateString('default', { weekday: 'short' }),
	}
	return (
		<div className={classes.wrap}>
			<span className={classes.month}>{value.monthName}</span>
			<span className={classes.day}>{value.dayName} {value.month}</span>
		</div>
	);
};

export default MonthDay;
