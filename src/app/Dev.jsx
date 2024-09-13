import React, { useState } from 'react';
import Footer from '@/components/Footer';

const Dev = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>
				Click to increase count
			</button>
			<Footer count={count} />
		</div>
	);
};

export default Dev;
