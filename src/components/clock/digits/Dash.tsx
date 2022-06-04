import React from 'react';
import classes from './Digits.module.scss'

interface IDashProps {
	index: number;
}

const Dash = ({index}: IDashProps) => {
	const classNames = [classes.dash];
	if (index % 5 === 0) {
		classNames.push(classes.long)
	}
	return (
		<div style={{transform: `translateX(-50%) translateY(-100%) rotate(${index * 6}deg)`}} className={classNames.join(' ')}>
			<span style={{transform: `translateX(-50%) translateY(10px) rotate(-${index * 6}deg)`}}>{index === 0 ? 12 : (index / 5)}</span>
		</div>
	);
};

export default Dash;
