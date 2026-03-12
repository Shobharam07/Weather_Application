# 🌤️ Weather Application

A modern **weather application** built with **React**, **Material UI**, and the **OpenWeatherMap API**. Search any city worldwide and get real-time weather data including temperature, humidity, feels-like temperature, and dynamic weather-based imagery! ☀️🌧️❄️

## 🚀 Live Demo

🔗 [weather-application-sigma-lac.vercel.app](https://weather-application-sigma-lac.vercel.app/)

<!-- Add a screenshot of your app here -->
<!-- ![Weather App Screenshot](./screenshot.png) -->

## ✨ Features

- **City Search** — Search weather for any city in the world using a MUI TextField input
- **Real-Time Weather Data** — Fetches live data from the **OpenWeatherMap API**
- **Dynamic Weather Cards** — Displays weather info in beautiful Material UI Cards
- **Weather-Based Images** — Card image changes based on conditions:
  - 🌧️ **Rainy** — Rain image when humidity > 80%
  - ☀️ **Hot** — Sunny image when temperature > 15°C
  - ❄️ **Cold** — Cold/snowy image when temperature ≤ 15°C
- **Weather Icons** — Dynamic MUI icons based on weather:
  - ⛈️ `ThunderstormIcon` for rainy weather
  - ☀️ `WbSunnyIcon` for hot weather
  - ❄️ `AcUnitIcon` for cold weather
- **Detailed Weather Info** — Shows:
  - 🌡️ Current Temperature
  - 💧 Humidity
  - ⬇️ Min Temperature (°C)
  - ⬆️ Max Temperature (°C)
  - 🤔 Feels Like (°C)
  - 📝 Weather Description
- **Environment Variables** — API keys stored securely via `.env` with Vite's `import.meta.env`
- **Default City** — Loads with Lucknow weather data on first render

## 🎯 How It Works

1. Enter a **city name** in the search box.
2. Click **Search** to fetch weather data.
3. The app calls the **OpenWeatherMap API** with metric units.
4. A weather card displays with:
   - Dynamic background image (hot/cold/rainy)
   - Weather icon matching conditions
   - Temperature, humidity, and feels-like data
5. Search another city to update the card instantly!

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library with functional components and hooks |
| **Vite** | Lightning-fast build tool and dev server |
| **Material UI (MUI) 6** | Pre-built UI components (Card, TextField, Button, Typography) |
| **MUI Icons** | Weather condition icons (AcUnit, Thunderstorm, WbSunny) |
| **Emotion** | CSS-in-JS styling engine for MUI |
| **OpenWeatherMap API** | Real-time weather data source |
| **Environment Variables** | Secure API key management via `.env` |

## 📊 Language Composition

![JavaScript](https://img.shields.io/badge/JavaScript-73.6%25-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-22.3%25-1572B6?style=flat-square&logo=css3&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-4.1%25-E34F26?style=flat-square&logo=html5&logoColor=white)

## 🧩 Component Architecture

```
App.jsx
 └── WeatherApp.jsx          ← Main component (state management)
      ├── SearchBox.jsx       ← City search input + API call
      └── InfoBox.jsx         ← Weather info card with dynamic images
```

| Component | Responsibility |
|-----------|---------------|
| `App.jsx` | Root component, renders WeatherApp |
| `WeatherApp.jsx` | Manages weather state (`useState`), passes `updateInfo` to SearchBox |
| `SearchBox.jsx` | City input form, fetches weather from API, sends data up via `updateInfo` |
| `InfoBox.jsx` | Displays MUI Card with dynamic image, weather icon, and all weather details |

## 📂 Project Structure

```
Weather_Application/
├── public/                     # Static assets
├── src/
│   ├── assets/                 # Images and assets
│   ├── App.jsx                 # Root component
│   ├── App.css                 # App-level styles
│   ├── main.jsx                # React entry point
│   ├── index.css               # Global styles
│   ├── WeatherApp.jsx          # Main weather component (state)
│   ├── SearchBox.jsx           # City search form + API logic
│   ├── searchBox.css           # SearchBox styles
│   ├── infoBox.jsx             # Weather info card component
│   └── infoBox.css             # InfoBox styles
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
└── README.md                   # Project documentation
```

## 🌡️ Weather Data Displayed

| Data Point | Source | Example |
|------------|--------|---------|
| City Name | `jsonresponse.name` | Lucknow |
| Temperature | `jsonresponse.main.temp` | 30°C |
| Min Temperature | `jsonresponse.main.temp_min` | 24.24°C |
| Max Temperature | `jsonresponse.main.temp_max` | 30°C |
| Humidity | `jsonresponse.main.humidity` | 50% |
| Feels Like | `jsonresponse.main.feels_like` | 24.24°C |
| Weather Description | `jsonresponse.weather[0].description` | haze |

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://api.openweathermap.org/data/2.5/weather
VITE_API_KEY=your_openweathermap_api_key_here
```

> 🔑 Get your free API key at [openweathermap.org](https://openweathermap.org/api)

## 🏁 Getting Started

### Prerequisites
- **Node.js** (v18+)
- **OpenWeatherMap API Key** (free tier)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shobharam07/Weather_Application.git
   ```
2. **Navigate to the project folder**
   ```bash
   cd Weather_Application
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Add your OpenWeatherMap API key
   ```
5. **Run the development server**
   ```bash
   npm run dev
   ```
6. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🙌 Contributing

Contributions, issues, and feature requests are welcome! Ideas for improvement:
- 🌍 Add geolocation to auto-detect user's city
- 📅 Add 5-day weather forecast
- 🌙 Add dark mode toggle
- 📱 Improve mobile responsiveness
- 🔄 Add loading spinner during API calls
- ❌ Add error handling for invalid city names

## 📄 License

This project is open source and available for personal and educational use.

---

⭐ **If you found this project helpful, give it a star!**
