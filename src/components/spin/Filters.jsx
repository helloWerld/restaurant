import React from 'react';

const Filters = () => {
	return (
		<div className=" flex flex-col lg:flex-row w-full bg-base-200 rounded-3xl p-8">
			<div className="flex flex-col w-1/2 h-full">
				<h2 className="text-xl font-semibold">Set Filters</h2>
				<input />
			</div>
			<div className="divider divider-horizontal"></div>
			<div className="flex flex-col w-1/2 h-full">Advanced</div>
		</div>
	);
};

export default Filters;
