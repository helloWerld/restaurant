# Restaurant Finder App

## Overview

The Restaurant Finder App helps users discover places to eat based on their preferences such as cuisine, location, price range, and more. It introduces an element of fun by allowing users to spin a virtual wheel, which randomly selects a restaurant from the filtered options.

## Features

- **Preference-Based Search:** Filter restaurants by cuisine, location, price range, and other preferences.
- **Random Selection:** A React-powered roulette wheel adds an element of chance by randomly choosing a restaurant from the filtered list.
- **Interactive Map:** Integration with Google Maps API allows users to view the selected restaurant's location on a map.
- **User-Friendly Interface:** Built with Next.js and styled using Tailwind CSS and DaisyUI for a clean and responsive design.
- **Firebase Integration:** Utilizes Firebase for user authentication, data storage, and real-time updates.

## Technologies Used

- **Next.js:** React framework for building server-rendered applications.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **DaisyUI:** Tailwind CSS components for building user interfaces.
- **React-Roulette Wheel:** A customizable roulette wheel component for React.
- **Firebase:** Backend services for authentication, database, and hosting.
- **Google Maps API:** For displaying the location of restaurants on an interactive map.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Firebase account for backend services
- Google Maps API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/helloWerld/restaurant.git
   ```
2. Navigate to the project directory:
   ```bash
   cd restaurant
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up Firebase:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Copy your Firebase config and paste it into a `.env.local` file in the project root.

5. Set up Google Maps API:
   - Get a Google Maps API key from the [Google Cloud Console](https://console.cloud.google.com/).
   - Add your Google Maps API key to the `.env.local` file:
   ```bash
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Open your browser and go to `http://localhost:3000` to view the app.

## Usage

1. Enter your preferences in the provided fields (cuisine, location, price range, etc.).
2. Spin the roulette wheel to randomly select a restaurant.
3. View details about the selected restaurant, including location and contact information.
4. See the restaurant's location on an interactive Google Map.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
