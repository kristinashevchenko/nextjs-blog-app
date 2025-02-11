const sql = require("better-sqlite3");
const db = sql("blog.db");

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS contacts (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       email TEXT NOT NULL,
       name TEXT NOT NULL,
       message TEXT NOT NULL
    )
`
).run();
