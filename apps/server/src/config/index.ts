import 'dotenv/config';

export const config = {
  port: parseInt(process.env.PORT || '3001', 10),
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  nodeEnv: process.env.NODE_ENV || 'development',

  // Room settings
  roomCodeLength: 8,
  maxPlayersPerRoom: 6,
  minPlayersToStart: 2,
  cardsPerPlayer: 5,
  roomExpirationHours: 24,

  // Timer settings
  defaultTimerSeconds: 120,
  minTimerSeconds: 30,
  maxTimerSeconds: 600,

  // Session settings
  reconnectionWindowMs: 5 * 60 * 1000, // 5 minutes
};
