export const user = {
	user_id: '12345abc',
	name: 'John Doe',
	email: 'johndoe@example.com',
	profile_image:
		'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
	location: {
		latitude: 39.7817,
		longitude: -89.6501,
		address: '123 Elm Street, Springfield, IL 62701 United States',
	},
	preferences: [
		{
			name: 'After Work',
			cuisine: ['Italian', 'Mexican'],
			price_range: '$$',
			dietary_restrictions: [],
			favorite_restaurants: [
				{
					restaurant_id: 'rest123',
					name: "Mario's Italian Bistro",
					location: '456 Elm St, Los Angeles, CA 90013',
				},
			],
		},
		{
			name: 'Date Night',
			cuisine: ['French', 'Japanese'],
			price_range: '$$$',
			dietary_restrictions: ['Gluten-Free'],
			favorite_restaurants: [
				{
					restaurant_id: 'rest789',
					name: 'Le Petit Cafe',
					location: '101 Pine St, Los Angeles, CA 90015',
				},
				{
					restaurant_id: 'rest456',
					name: 'Sakura Sushi',
					location: '789 Oak St, Los Angeles, CA 90014',
				},
			],
		},
		{
			name: 'Weekend Brunch',
			cuisine: ['American', 'Mediterranean'],
			price_range: '$',
			dietary_restrictions: ['Vegan'],
			favorite_restaurants: [
				{
					restaurant_id: 'rest321',
					name: 'Sunny Side Up',
					location: '234 Maple St, Los Angeles, CA 90016',
				},
			],
		},
	],
	spins_remaining: 5,
	last_spin_date: '2024-08-15T14:35:00Z',
	notifications: {
		email: true,
		sms: false,
		push: true,
	},
	created_at: '2024-07-01T12:00:00Z',
	updated_at: '2024-08-15T14:35:00Z',
};
