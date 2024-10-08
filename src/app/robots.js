export default function robots() {
	return {
		rules: {
			userAgent: '*',
			allow: ['/', '/details', '/spin', '/search'],
			disallow: ['/auth', '/dashboard', '/private/'],
		},
		sitemap: 'https://restaurant-5e91b.web.app/sitemap.xml',
	};
}
