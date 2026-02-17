# 🕐 Lock Screen Display

A beautiful, modern lock screen-style web application that displays real-time clock, date, and rotating inspirational quotes with a stunning blurred background effect.

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

- ⏰ **Real-time Clock** - Live time display that updates every second
- 📅 **Dynamic Date Display** - Shows current date with full formatting
- 💬 **Random Motivational Quotes** - 61 inspirational quotes rotating every 30 seconds
- 🎨 **Glassmorphism Design** - Modern UI with frosted glass effect
- 🌄 **Full-Screen Blurred Background** - Immersive visual experience
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ✨ **Smooth Animations** - Elegant transitions and micro-interactions
- 🎯 **Premium Aesthetics** - Professional design with custom typography

## 🚀 Demo

Simply open `index.html` in your web browser to see the lock screen display in action.

## 📁 Project Structure

```
Lock_Screen_Display/
├── index.html          # Main HTML file
├── LICENSE             # MIT License
├── README.md           # Project documentation
├── css/
│   └── style.css       # Styles with glassmorphism effects
├── js/
│   └── index.js        # Core functionality and quote loader
├── data/
│   └── quotes.json     # 61 motivational quotes
└── img/
    └── bg.jpg          # Background image
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rajjitlai/Lock_Screen_Display.git
   cd Lock_Screen_Display
   ```

2. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

3. **Access the app**
   - Direct file: Open `index.html`
   - Local server: Visit `http://localhost:8000`

## 🎯 Usage

The lock screen display automatically:
- Updates time every second
- Displays the current date
- Rotates through quotes every 30 seconds
- Adapts to your system's timezone

## 🎨 Customization

### Change Background Image
Replace `img/bg.jpg` with your preferred image. For best results, use high-resolution landscape images.

### Adjust Blur Effect
Edit the blur value in `css/style.css`:
```css
.container img {
    filter: blur(8px); /* Change value (0-20px recommended) */
}
```

### Modify Quote Rotation Speed
Update the interval in `js/index.js`:
```javascript
setInterval(displayRandomQuote, 30000); // Change 30000 (30 seconds)
```

### Add More Quotes
Edit `data/quotes.json` and add your quotes to the array:
```json
{
  "quotes": [
    "Your new quote here",
    "Another inspiring quote"
  ]
}
```

### Change Timezone
The app uses your system's local timezone automatically. To use a specific timezone, modify `js/index.js`:
```javascript
// Add timezone option
timeElement.textContent = now.toLocaleTimeString('en-US', { 
    ...options,
    timeZone: 'America/New_York' // Your desired timezone
});
```

## 🔧 Technology Stack

- **HTML5** - Semantic structure
- **CSS3** - Glassmorphism, animations, responsive design
- **Vanilla JavaScript** - No dependencies
- **Google Fonts** - Outfit font family
- **JSON** - Quote data storage

## 🌟 Key Design Features

- **Glassmorphism Effect**: Modern frosted glass UI components
- **Full-Screen Background**: Image covers entire viewport with blur
- **Premium Typography**: Custom Outfit font from Google Fonts
- **Smooth Animations**: Fade-in, scale, and slide effects
- **Responsive Layout**: Adapts to mobile, tablet, and desktop
- **Dark Overlay**: Improves text readability over images

## 📝 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

Copyright © 2026 **Rajjit Laishram**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original inspiration from EasyTutorials
- Quote collection curated from various inspirational sources
- Design inspired by modern lock screen interfaces

## 📧 Contact

**Rajjit Laishram**
- GitHub: [@rajjitlai](https://github.com/rajjitlai)

---

**⭐ If you like this project, please give it a star!**
