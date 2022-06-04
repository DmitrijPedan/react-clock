import React from 'react';
import classes from "./Hands.module.scss";

interface IHandProps {
	type: 'hour' | 'min' | 'sec';
	date: Date;
}

const Hand = ({type, date}: IHandProps) => {
	let deg = 0;
	const value = {
		hour: date.getHours(),
		min: date.getMinutes(),
		sec: date.getSeconds(),
	}
	if (type === 'sec') {
		deg += value.sec * 6
	}
	if (type === 'min') {
		deg += value.min * 6
	}
	if (type === 'hour') {
		deg = value.hour * 30 + value.min * 0.5
	}
	return (
		<div
			className={[classes.hand, classes[type]].join(' ')}
			style={{transform: `translateX(-50%) translateY(-100%) rotate(${deg}deg)`}}
		/>
	);
};

export default Hand;
