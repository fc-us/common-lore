import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SUIT_THEMES, Suit } from '@crossings/shared';
import Button from '@/components/ui/Button';

export default function HowToPlay() {
  const suits = [
    {
      suit: Suit.SPADES,
      description: 'Questions about career goals, professional identity, and vision for the future.',
    },
    {
      suit: Suit.HEARTS,
      description: 'Questions about family, home, belonging, and hospitality across cultures.',
    },
    {
      suit: Suit.DIAMONDS,
      description: 'Questions about cultural identity, traditions, and cross-cultural understanding.',
    },
    {
      suit: Suit.CLUBS,
      description: 'Questions exploring the intersection of science, faith, and wonder.',
    },
  ];

  const actionCards = [
    {
      name: 'The Referral',
      suit: Suit.SPADES,
      effect: 'Nominate another player to answer a question of your choice from your hand.',
    },
    {
      name: 'The Shared Table',
      suit: Suit.HEARTS,
      effect: 'Everyone at the table must answer the last question asked.',
    },
    {
      name: 'The Translator',
      suit: Suit.DIAMONDS,
      effect: 'Choose a player to explain their answer using a metaphor or a word from their native language.',
    },
    {
      name: 'The Experiment',
      suit: Suit.CLUBS,
      effect: 'Veto a question and draw a new card, or challenge another player to answer your card.',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </Link>

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-serif text-4xl font-bold text-white mb-4">
            How to Play
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Crossings is a guided conversation game designed to facilitate
            meaningful connections across cultural boundaries.
          </p>
        </motion.div>

        {/* Objective */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-serif text-2xl font-bold text-white mb-4">
            Objective
          </h2>
          <p className="text-gray-300 leading-relaxed">
            To journey from being strangers at a table to becoming a shared
            community by discovering universal truths that connect our different
            worlds. Crossings is about movement and discovery, not winning.
          </p>
        </motion.section>

        {/* Setup */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="font-serif text-2xl font-bold text-white mb-4">
            Setup
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex gap-3">
              <span className="text-teal font-bold">1.</span>
              <span>One player creates a room and shares the code with friends (2-6 players)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal font-bold">2.</span>
              <span>Each player receives 5 cards from the shuffled deck</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal font-bold">3.</span>
              <span>The remaining cards form the "Journey Pile" in the center</span>
            </li>
          </ul>
        </motion.section>

        {/* Gameplay */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="font-serif text-2xl font-bold text-white mb-4">
            Gameplay
          </h2>
          <div className="space-y-4 text-gray-300">
            <div className="bg-navy-800 rounded-xl p-4 border border-navy-700">
              <h3 className="font-semibold text-white mb-2">The Share</h3>
              <p>
                Going clockwise, each player chooses one card from their hand,
                plays it, and answers the prompt aloud. Once answered, the card
                is placed in the discard pile.
              </p>
            </div>

            <div className="bg-navy-800 rounded-xl p-4 border border-navy-700">
              <h3 className="font-semibold text-white mb-2">The Bridge Pass</h3>
              <p>
                If a question feels too personal or you're not ready to cross
                it, say <span className="text-teal">"Pass"</span> or{' '}
                <span className="text-teal">"Under Construction"</span>. You
                then draw a new card from the deck and your turn ends.
              </p>
            </div>

            <div className="bg-navy-800 rounded-xl p-4 border border-navy-700">
              <h3 className="font-semibold text-white mb-2">The End</h3>
              <p>
                Play continues until everyone's hand is empty. Then, each player
                shares: "What is one thing someone else shared tonight that
                you'll carry with you after you leave?"
              </p>
            </div>
          </div>
        </motion.section>

        {/* Four Suits */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="font-serif text-2xl font-bold text-white mb-4">
            The Four Crossings
          </h2>
          <div className="grid gap-4">
            {suits.map(({ suit, description }) => {
              const theme = SUIT_THEMES[suit];
              return (
                <div
                  key={suit}
                  className="bg-navy-800 rounded-xl p-4 border border-navy-700"
                  style={{ borderLeftWidth: '4px', borderLeftColor: theme.color }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl" style={{ color: theme.color }}>
                      {theme.symbol}
                    </span>
                    <span className="font-semibold text-white">
                      {theme.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      ({theme.subtitle})
                    </span>
                  </div>
                  <p className="text-gray-300">{description}</p>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* Action Cards */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="font-serif text-2xl font-bold text-white mb-4">
            Action Cards (Aces)
          </h2>
          <p className="text-gray-400 mb-4">
            Aces are special cards that can be played at any time before or
            after a player answers a question to trigger a special rule.
          </p>
          <div className="grid gap-4">
            {actionCards.map(({ name, suit, effect }) => {
              const theme = SUIT_THEMES[suit];
              return (
                <div
                  key={name}
                  className="bg-navy-800 rounded-xl p-4 border border-navy-700"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl" style={{ color: theme.color }}>
                      {theme.symbol}
                    </span>
                    <span className="font-semibold text-white">{name}</span>
                  </div>
                  <p className="text-gray-300">{effect}</p>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/create">
            <Button variant="primary" size="lg">
              Start Playing
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
