import React from 'react';

const Options = ({ items }) => {
	return (
		<>
			{items.map((item) => <option key={item} value={item}>{item}</option>)}
		</>
	);
};

export default Options;