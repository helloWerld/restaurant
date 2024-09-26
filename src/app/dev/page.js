import React from 'react';
import SpinResultModal, {
	ActionButtons,
} from '@/components/modals/SpinResultModal';

const Dev = () => {
	return (
		<div className="min-h-screen w-full flex flex-col">
			<SpinResultModal />
			<ActionButtons />
		</div>
	);
};

export default Dev;
