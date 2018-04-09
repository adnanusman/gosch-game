import Dexie from 'dexie';

const db = new Dexie('rmDB');
db.version(1).stores({
  score: '++id, kills, shotsFired, accuracy, timeAlive'
});

export default db;