import React from 'react';

const NewSearchPrefences = () => {
	return (
		<div className="flex flex-col justify-between w-full border bg-base-200 h-80 rounded-lg mb-8 mt-4 p-6">
			<h2 className="text-xl font-semibold">
				+ Add a New Saved Search Preference
			</h2>
			<div className="flex flex-row gap-4">
				<button className="btn btn-secondary w-32 rounded-lg">Save</button>
				<button className="btn btn-ghost w-32 rounded-lg">Clear</button>
			</div>
		</div>
	);
};

export default NewSearchPrefences;
