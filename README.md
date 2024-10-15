# Weather App Dashboard

A responsive and visually appealing weather dashboard built with React, Tailwind CSS, and OpenWeatherMap API. The app allows users to search for weather conditions by city or based on their current location, displaying information like temperature, humidity, wind speed, and weather conditions using custom icons.

## Features

- 🌦 **Real-Time Weather Data**: Fetches current weather information from the OpenWeatherMap API.
- 🔍 **City Search**: Allows users to search for weather by city name.
- 📍 **Geolocation Support**: Automatically retrieves weather based on the user's current location.
- 🌡 **Weather Information**: Displays temperature, humidity, wind speed, and an icon representing the weather condition.
- 🎨 **Responsive Design**: Optimized for all device sizes with Tailwind CSS.
- 🎉 **Dynamic Weather Icons**: Shows relevant weather icons based on the condition (clear, cloudy, rain, snow, etc.).
- 🌘 **Dark & Light Mode**: Toggle between dark and light mode for a personalized experience (planned feature).

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/wakgari-Elias/weather-app-dashboard.git
    ```
2. Navigate to the project directory:
    ```bash
    cd weather-app-dashboard
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
    ```
    VITE_APP_ID=your_openweathermap_api_key
    ```
    You can obtain the API key from [OpenWeatherMap](https://openweathermap.org/).

5. Start the development server:
    ```bash
    npm run dev
    ```

6. Open your browser and go to:
    ```
    http://localhost:3000
    ```

## Project Structure

<<<<<<< HEAD
src/ ├── assets/
│ ├── clear.png # Icon for clear weather │ ├── cloud.png # Icon for cloudy weather │ ├── drizzle.png # Icon for drizzle weather │ ├── rain.png # Icon for rainy weather │ ├── snow.png # Icon for snowy weather ├── components/ │ ├── Weather.jsx # Main component for displaying weather information │ ├── SearchBar.jsx # Input component for searching by city │ ├── WeatherCard.jsx # Card component for displaying weather details │ ├── ErrorMessage.jsx # Component to display error messages ├── App.jsx # Main App component ├── index.css # Global styles using Tailwind CSS ├── main.jsx # Application entry point └── .env # Environment file storing the OpenWeatherMap API key



=======
>>>>>>> c843e2dbdb8cb5e8f0f1497bafd3ea337211d290
### Explanation:

- **assets/**: Contains weather icons (clear, cloud, drizzle, rain, snow) that represent different weather conditions.
- **components/**: Includes individual components used in the app:
  - `Weather.jsx`: The main weather component that fetches and displays weather data.
  - `SearchBar.jsx`: A component that allows users to input a city for weather search.
  - `WeatherCard.jsx`: Displays the weather details like temperature, wind speed, and humidity.
  - `ErrorMessage.jsx`: Shows error messages when the weather data cannot be retrieved.
- **App.jsx**: The root component that integrates all other components.
- **index.css**: Contains global styles, mainly leveraging Tailwind CSS.
- **main.jsx**: The main entry point for the application, where the root component is rendered.
- **.env**: Contains environment variables, specifically the OpenWeatherMap API key.

This project structure helps keep the codebase organized and maintainable, especially as your project grows.



<<<<<<< HEAD
=======

>>>>>>> c843e2dbdb8cb5e8f0f1497bafd3ea337211d290
## Technologies Used

- **React**: JavaScript library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **OpenWeatherMap API**: Provides real-time weather data.
- **Vite**: Next-generation front-end tooling for development.

## Future Improvements

- 🌗 **Dark and Light Mode**: Add a toggle to switch between dark and light themes.
- 🌍 **Multi-Language Support**: Translate the app into different languages.
- 🌧 **5-Day Weather Forecast**: Add support for extended forecasts.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

### Author

- **Elias Wakgari** - [GitHub](https://github.com/wakgari-Elias)

<<<<<<< HEAD
<<<<<<< HEAD
 😊
=======
>>>>>>> c843e2dbdb8cb5e8f0f1497bafd3ea337211d290
=======

>>>>>>> be7b030ce883c9c2ba75967b6781d11e7eade1a7
