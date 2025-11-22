# Game Collection Menu

A modern web application featuring a collection of 6 classic HTML5 games with a React + Tailwind CSS menu interface.

## 🎮 Games Included

- **Pachinko Slot**: Exciting Japanese-style slot machine with jackpot features
- **Snake**: Classic snake game with obstacles and high scores
- **Tetris**: Fall into the rhythm with levels, hold, and scoring
- **Breakout**: Break bricks with paddle and ball
- **Flappy Bird**: Navigate through pipes without crashing
- **2048**: Combine numbers to reach 2048

## ✨ Features

- **Modern UI**: Responsive design with Tailwind CSS
- **Settings Panel**: Toggle sound effects and dark theme
- **Persistent Scores**: High scores saved in localStorage
- **Sound Effects**: Web Audio API integration (can be disabled)
- **Mobile Friendly**: Works on desktop and mobile devices
- **Auto-deployment**: Connected to Vercel for continuous deployment

## 🚀 Live Demo

[View Live Site](https://grok-project-21-3as5sczof-dongyeol-jungs-projects.vercel.app)

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Tailwind CSS 3.4
- **Build Tool**: Vite
- **Deployment**: Vercel
- **Games**: HTML5 Canvas, JavaScript ES6+
- **Audio**: Web Audio API

## 📁 Project Structure

```
src/
├── App.jsx          # Main app with routing and settings
├── main.jsx         # React entry point
└── index.css        # Tailwind directives

public/
├── *.html           # Individual game files
└── ...

package.json         # Dependencies and scripts
vite.config.js       # Vite configuration
tailwind.config.js   # Tailwind configuration
```

## 🏃‍♂️ Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/mxten777/grok_project_21.git
   cd grok_project_21
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎵 Settings

- **Sound Effects**: Toggle game sounds on/off
- **Dark Theme**: Switch between light and dark menu themes

Settings are saved in your browser's localStorage.

## 🎯 Game Controls

### Pachinko Slot
- Click "Start" to spin
- Adjust bet with +/- buttons
- Max bet button for maximum stake
- Auto spin toggle
- Setting button for difficulty adjustment

### Snake
- Arrow keys to move
- Avoid walls and yourself
- Collect food to grow

### Tetris
- Arrow keys: Move and rotate
- Space: Hard drop
- C: Hold piece
- Down arrow: Soft drop

### Breakout
- Mouse or arrow keys to move paddle
- Break all bricks to win

### Flappy Bird
- Space or click to flap
- Avoid pipes

### 2048
- Arrow keys to slide tiles
- Combine same numbers
- Reach 2048 to win

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Commit and push
6. Create a pull request

## 📄 License

This project is for educational and demonstration purposes.

## 👨‍💻 Author

Built with ❤️ using React and Tailwind CSS.