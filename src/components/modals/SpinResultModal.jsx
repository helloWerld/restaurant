'use client';

import React from 'react';

const SpinResultModal = () => {
	return (
		<div>
			<button
				className="btn"
				onClick={() => document.getElementById('spin_result_modal').showModal()}
			>
				open modal
			</button>
			<dialog id="spin_result_modal" className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Restaurant Name</h3>
					<p className="py-4">Address, Price, Cuisine, Phone Number</p>
					<ActionButtons />
				</div>
			</dialog>
		</div>
	);
};

export default SpinResultModal;

const ActionButtons = () => {
	return (
		<div className="flex flex-row gap-4">
			<button className="btn btn-outline">Spin Again</button>
			<button className="btn btn-primary">Get Directions</button>
		</div>
	);
};
