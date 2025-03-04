# Expo News App

This is a React Native news application built using Expo. It fetches real-time news from an API and displays it in a user-friendly interface.

## Features
- Fetches news articles from Finnhub API
- Displays news headlines, images, and sources
- Allows users to open full articles in a browser
- User personalization with stored first name

## Technologies Used
- React Native
- Expo
- TypeScript
- Axios (for API requests)

## Installation

### Prerequisites
- Node.js (LTS recommended)
- Expo CLI installed globally (`npm install -g expo-cli`)
- Git

### Setup Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/viranga3412/expoApp.git
   cd expoApp
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Expo server:
   ```sh
   npm start
   ```

## API Integration
This app fetches news data from the Finnhub API.
- **Base URL:** `https://finnhub.io/api/v1`
- **API Key:** Stored in `utils/newsAPI.ts`

### Sample API Request
```ts
const response = await axios.get(`${BASE_URL}/news?category=general&token=${API_KEY}`);
```

## Troubleshooting
If you face permission issues with Git, reset your credentials:
```sh
git credential reject https://github.com
```
If API requests fail, verify your API key and rate limits on [Finnhub](https://finnhub.io/).

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

## License
This project is licensed under the MIT License.

