import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

const games = [
  { name: 'Pachinko Slot', file: 'pachinko', description: 'Exciting Japanese-style slot machine with jackpot!' },
  { name: 'Snake', file: 'snake', description: 'Classic snake game with obstacles and high scores.' },
  { name: 'Tetris', file: 'tetris', description: 'Fall into the rhythm of Tetris with levels and hold.' },
  { name: 'Breakout', file: 'breakout', description: 'Break bricks with your paddle and ball.' },
  { name: 'Flappy Bird', file: 'flappy', description: 'Navigate the bird through pipes without crashing.' },
  { name: '2048', file: '2048', description: 'Combine numbers to reach 2048!' },
];

function Settings({ isOpen, onClose, settings, updateSettings }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-gray-700">Sound Effects</label>
            <button
              onClick={() => updateSettings({ soundEnabled: !settings.soundEnabled })}
              className={`w-12 h-6 rounded-full transition-colors ${settings.soundEnabled ? 'bg-green-500' : 'bg-gray-300'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.soundEnabled ? 'translate-x-6' : 'translate-x-1'}`}></div>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <label className="text-gray-700">Dark Theme</label>
            <button
              onClick={() => updateSettings({ darkTheme: !settings.darkTheme })}
              className={`w-12 h-6 rounded-full transition-colors ${settings.darkTheme ? 'bg-purple-500' : 'bg-gray-300'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.darkTheme ? 'translate-x-6' : 'translate-x-1'}`}></div>
            </button>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function Menu({ settings, updateSettings }) {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className={`min-h-screen ${settings.darkTheme ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500'} flex flex-col items-center justify-center p-4`}>
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setSettingsOpen(true)}
          className="bg-white bg-opacity-20 backdrop-blur-md text-white font-bold py-2 px-4 rounded hover:bg-opacity-30 transition-all duration-300"
        >
          ⚙️ Settings
        </button>
      </div>
      <h1 className="text-6xl font-bold text-white mb-8 text-center animate-pulse">
        🎮 Game Collection 🎮
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {games.map((game) => (
          <div key={game.file} className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white border-opacity-20">
            <h2 className="text-2xl font-semibold text-white mb-2">{game.name}</h2>
            <p className="text-gray-300 mb-4">{game.description}</p>
            <Link
              to={`/game/${game.file}`}
              className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded hover:from-green-500 hover:to-blue-600 transition-all duration-300"
            >
              Play Now
            </Link>
          </div>
        ))}
      </div>
      <footer className="mt-8 text-gray-400 text-center">
        Test Footer - Built with React & Tailwind CSS
      </footer>
      {settingsOpen && (
        <Settings
          isOpen={settingsOpen}
          onClose={() => setSettingsOpen(false)}
          settings={settings}
          updateSettings={updateSettings}
        />
      )}
    </div>
  );
}

function Game({ settings }) {
  const { gameName } = useParams();
  const navigate = useNavigate();
  const gameFile = `/${gameName}.html`;

  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data === 'goHome') {
        navigate('/');
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [navigate]);

  useEffect(() => {
    // Send settings to iframe when game loads
    const iframe = document.querySelector('iframe');
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage({ type: 'settings', settings }, '*');
    }
  }, [settings]);

  return (
    <div className={`min-h-screen ${settings.darkTheme ? 'bg-gray-900' : 'bg-gray-100'} flex flex-col items-center justify-center p-2 sm:p-4`}>
      <div className="mb-2 sm:mb-4 w-full max-w-4xl">
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm sm:text-base"
        >
          ← Back to Menu
        </Link>
      </div>
      <iframe
        src={gameFile}
        className="w-full max-w-4xl h-[calc(100vh-120px)] sm:h-[calc(100vh-140px)] border-0 rounded-lg"
        title="Game"
      ></iframe>
    </div>
  );
}

function App() {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('gameSettings');
    return saved ? JSON.parse(saved) : { soundEnabled: true, darkTheme: true };
  });

  const updateSettings = (newSettings) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    localStorage.setItem('gameSettings', JSON.stringify(updated));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu settings={settings} updateSettings={updateSettings} />} />
        <Route path="/game/:gameName" element={<Game settings={settings} />} />
      </Routes>
    </Router>
  );
}

export default App;