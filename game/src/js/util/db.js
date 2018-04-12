import Dexie from 'dexie';

const db = new Dexie('rm-DB');
db.version(1).stores({
  spScore: '++id, name, kills, shotsFired, accuracy, timeAlive',
  mpScore: '++id, name, kills, shotsFired, accuracy, timeAlive'
});

export default db;