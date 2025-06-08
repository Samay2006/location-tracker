# Real-Time Location Tracker

A web application that tracks user locations in real time and displays them on an interactive map.

## 🚀 Features

- Real-time location updates using Socket.io
- Interactive map with Leaflet.js
- Multiple users tracked simultaneously
- Responsive and clean UI

## 🛠️ Tech Stack

- **Backend:** Node.js, Express, Socket.io
- **Frontend:** EJS, Leaflet.js, HTML, CSS, JavaScript

## 📦 Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd location-tracker
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the server:**
   ```sh
   npm start
   ```
   or
   ```sh
   node app.js
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
location-tracker/
│
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── views/
│   └── index.ejs
├── app.js
├── package.json
├── package-lock.json
└── .gitignore
```

## 🗺️ How It Works

- Users allow location access in their browser.
- The app sends location data to the server via Socket.io.
- The server broadcasts all users' locations to everyone in real time.
- Locations are displayed as markers on a Leaflet map.

## 📸 Screenshot

> _Add a screenshot of your app running here!_

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ using Node.js, Express, Socket.io, and Leaflet.js**
