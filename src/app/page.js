import DeliveryServices from '@/components/homepage/DeliveryServices';
import Hero from '@/components/homepage/Hero';
import HowItWorks from '@/components/homepage/HowItWorks';

export default function Home() {
	return (
		<main className="flex flex-col items-between min-h-screen py-12 max-w-screen-2xl mx-auto">
			<Hero />
			<DeliveryServices />
			<HowItWorks />
			{/* Add Homepage Explainer */}
			{/* Recent Searches & Popular Results */}
			{/* Recent Filters / How They Searches */}
			{/* Testimonials */}
			{/* Top Rated */}

			{/* Wheel */}
		</main>
	);
}
