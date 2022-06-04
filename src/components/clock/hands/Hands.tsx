import React from 'react';
import Hand from "./Hand";
import classes from "./Hands.module.scss";

interface IHandsProps {
	date: Date
}

const Hands = ({date}: IHandsProps) => {
	return (
		<div>
			<Hand type={'hour'} date={date}/>
			<Hand type={'min'} date={date}/>
			<Hand type={'sec'} date={date}/>
			<span className={classes.dot}/>
		</div>
	);
};

export default Hands;
