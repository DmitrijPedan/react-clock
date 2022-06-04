import React, {useEffect, useState} from 'react';
import Digits from "./digits/Digits";
import Hands from "./hands/Hands";
import ClockLabel from "./label/Label";
import MonthDay from "./month-day/MonthDay";
import classes from './Clock.module.scss';
import DigitClock from "./digit-clock/DigitClock";

interface IClockProps {
	size: string;
}

const Clock = ({size}: IClockProps) => {

	const [date, setDate] = useState(new Date());

	useEffect(() => {
		setInterval(() => setDate(new Date()), 1000);
	}, []);

	return (
		<div className={classes.wrapper}>
			<div className={classes.face} style={{fontSize: size}}>
				<Digits/>
				<Hands date={date} />
				<ClockLabel label={'Hand Made'}/>
				<MonthDay date={date}/>
				<DigitClock date={date}/>
			</div>
		</div>
	);
};

export default Clock;
