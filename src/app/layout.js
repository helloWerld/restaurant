import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Restaurant App',
	description: 'Random food selector',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} min-h-screen w-full`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
