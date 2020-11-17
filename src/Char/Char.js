import React from 'react';

const Char = (props) => {
	const style = {
		display: 'inline-block',
		padding: '1rem',
		textAlign: 'center',
		margin: '1rem',
		border: '0.0625rem solid black'
	};

	return (
		<div style={style}>
			<p onClick={props.clicked}>{props.val}</p>
		</div>
	);
};

export default Char;
