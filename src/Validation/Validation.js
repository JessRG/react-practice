import React from 'react';

const validation = (props) => {
	let str = 'Text too short';
	if (props.length > 5) {
		str = 'Text long enough';
	}

	return (
		<div>
			<p>{props.length}</p>
			<p>{str}</p>
		</div>
	);
};

export default validation;
