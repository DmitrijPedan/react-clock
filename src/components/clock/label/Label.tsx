import React from 'react';
import classes from './Label.module.scss';

interface ILabelProps {
	label: string;
}

const ClockLabel = ({label}: ILabelProps) => {
	return <span className={classes.label}>{label}</span>;
};

export default ClockLabel;
