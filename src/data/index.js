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

export const restaurantSearchHistory = [
	{
		id: '1',
		name: 'La Bella Pizza',
		location: {
			address: '123 Main St, Anytown, USA',
			latitude: 40.712776,
			longitude: -74.005974,
		},
		cuisine: 'Italian',
		dietary_restrictions: ['Vegetarian', 'Gluten-Free'],
		price_range: '$$',
		rating: 4.5,
		openNow: true,
		searchedOn: '2024-08-20T14:30:00Z',
	},
	{
		id: '2',
		name: 'Sushi World',
		location: {
			address: '456 Elm St, Anytown, USA',
			latitude: 40.73061,
			longitude: -73.935242,
		},
		cuisine: 'Japanese',
		dietary_restrictions: ['Vegan', 'Pescatarian'],
		price_range: '$$$',
		rating: 4.8,
		openNow: false,
		searchedOn: '2024-08-19T18:45:00Z',
	},
	{
		id: '3',
		name: 'Green Delight',
		location: {
			address: '789 Oak St, Anytown, USA',
			latitude: 40.752998,
			longitude: -73.977056,
		},
		cuisine: 'Vegetarian',
		dietary_restrictions: ['Vegan', 'Organic', 'Gluten-Free'],
		price_range: '$$',
		rating: 4.3,
		openNow: true,
		searchedOn: '2024-08-18T12:00:00Z',
	},
	{
		id: '4',
		name: 'Burger Palace',
		location: {
			address: '321 Maple Ave, Anytown, USA',
			latitude: 40.765001,
			longitude: -73.975267,
		},
		cuisine: 'American',
		dietary_restrictions: ['Halal'],
		price_range: '$',
		rating: 4.0,
		openNow: true,
		searchedOn: '2024-08-17T19:30:00Z',
	},
	{
		id: '5',
		name: 'Taco Fiesta',
		location: {
			address: '654 Pine St, Anytown, USA',
			latitude: 40.73061,
			longitude: -73.9897,
		},
		cuisine: 'Mexican',
		dietary_restrictions: ['Vegetarian'],
		price_range: '$',
		rating: 4.6,
		openNow: false,
		searchedOn: '2024-08-16T13:15:00Z',
	},
	{
		id: '6',
		name: 'Curry Express',
		location: {
			address: '987 Cedar St, Anytown, USA',
			latitude: 40.758896,
			longitude: -73.98513,
		},
		cuisine: 'Indian',
		dietary_restrictions: ['Vegan', 'Halal'],
		price_range: '$$',
		rating: 4.7,
		openNow: true,
		searchedOn: '2024-08-15T17:00:00Z',
	},
	{
		id: '7',
		name: 'Pasta Paradise',
		location: {
			address: '101 Maple St, Anytown, USA',
			latitude: 40.743303,
			longitude: -73.989898,
		},
		cuisine: 'Italian',
		dietary_restrictions: ['Vegetarian', 'Gluten-Free'],
		price_range: '$$$',
		rating: 4.9,
		openNow: false,
		searchedOn: '2024-08-14T20:00:00Z',
	},
	{
		id: '8',
		name: 'Wok & Roll',
		location: {
			address: '202 Birch St, Anytown, USA',
			latitude: 40.754932,
			longitude: -73.984016,
		},
		cuisine: 'Chinese',
		dietary_restrictions: ['Vegetarian'],
		price_range: '$',
		rating: 4.2,
		openNow: true,
		searchedOn: '2024-08-13T21:45:00Z',
	},
	{
		id: '9',
		name: 'Bistro Bon Appetit',
		location: {
			address: '303 Spruce St, Anytown, USA',
			latitude: 40.742054,
			longitude: -73.998735,
		},
		cuisine: 'French',
		dietary_restrictions: ['Gluten-Free'],
		price_range: '$$$$',
		rating: 4.6,
		openNow: true,
		searchedOn: '2024-08-12T11:30:00Z',
	},
	{
		id: '10',
		name: 'Mediterranean Magic',
		location: {
			address: '404 Cedar Ave, Anytown, USA',
			latitude: 40.746395,
			longitude: -73.982836,
		},
		cuisine: 'Mediterranean',
		dietary_restrictions: ['Vegan', 'Vegetarian'],
		price_range: '$$',
		rating: 4.4,
		openNow: false,
		searchedOn: '2024-08-11T16:00:00Z',
	},
];
