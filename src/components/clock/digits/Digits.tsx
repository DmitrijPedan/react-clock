import React from 'react';
import Dash from "./Dash";

const Digits = () => {

	const dashes = new Array(60).fill(1);

	return (
		<div>
			{dashes.map((dash, i) => <Dash key={i} index={i}/>)}
		</div>
	);
};

export default Digits;
