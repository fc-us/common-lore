import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        {/* Logo / Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Chevron icon */}
          <svg
            className="w-12 h-12 text-teal mx-auto mb-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
            <polyline points="6 4 12 10 18 4" />
          </svg>

          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide">
            CROSSINGS
          </h1>
          <p className="text-xl text-gray-400 max-w-md mx-auto">
            A guided conversation game for meaningful cross-cultural connections
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/create">
            <Button variant="primary" size="lg">
              Create Room
            </Button>
          </Link>
          <Link to="/join">
            <Button variant="secondary" size="lg">
              Join Room
            </Button>
          </Link>
        </motion.div>

        {/* How to play link */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/how-to-play"
            className="text-gray-400 hover:text-teal transition-colors"
          >
            How to Play →
          </Link>
        </motion.div>
      </div>

      {/* Suit preview */}
      <motion.div
        className="py-12 border-t border-navy-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center text-gray-500 text-sm uppercase tracking-wider mb-6">
            Four Bridges to Cross
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { symbol: '♠', name: 'Career', color: '#1e40af' },
              { symbol: '♥', name: 'Hospitality', color: '#dc2626' },
              { symbol: '♦', name: 'Culture', color: '#eab308' },
              { symbol: '♣', name: 'Wonder', color: '#16a34a' },
            ].map((suit) => (
              <div
                key={suit.name}
                className="bg-navy-800/50 rounded-xl p-4 text-center border border-navy-700"
              >
                <span
                  className="text-3xl block mb-2"
                  style={{ color: suit.color }}
                >
                  {suit.symbol}
                </span>
                <span className="text-sm text-gray-400">{suit.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 text-sm border-t border-navy-800">
        <p>
          Designed by Frontier Commons Innovation Lab for{' '}
          <a
            href="https://www.ifiusa.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal hover:underline"
          >
            International Friendships, Inc.
          </a>
        </p>
      </footer>
    </div>
  );
}
