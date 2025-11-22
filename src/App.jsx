import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

const games = [
  { name: 'Pachinko Slot', file: 'pachinko', description: 'Exciting Japanese-style slot machine with jackpot!' },
  { name: 'Snake', file: 'snake', description: 'Classic snake game with obstacles and high scores.' },
  { name: 'Tetris', file: 'tetris', description: 'Fall into the rhythm of Tetris with levels and hold.' },
  { name: 'Breakout', file: 'breakout', description: 'Break bricks with your paddle and ball.' },
  { name: 'Flappy Bird', file: 'flappy', description: 'Navigate the bird through pipes without crashing.' },
  { name: '2048', file: '2048', description: 'Combine numbers to reach 2048!' },
];

function Menu() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex flex-col items-center justify-center p-4">
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
        Built with React & Tailwind CSS
      </footer>
    </div>
  );
}

function Game() {
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

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="mb-4">
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
        >
          ← Back to Menu
        </Link>
      </div>
      <iframe
        src={gameFile}
        className="w-full max-w-4xl h-screen border-0"
        title="Game"
      ></iframe>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/game/:gameName" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;