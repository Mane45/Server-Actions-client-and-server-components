const Database = require("better-sqlite3")
const db = new Database("courses.db")


db.exec(`
    CREATE TABLE IF NOT EXISTS courses(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        duration INTEGER,
        price INTEGER,
        cover TEXT
    )

`)
db.exec("DROP TABLE IF EXISTS lecturers")

db.exec(`
    CREATE TABLE IF NOT EXISTS lecturers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      surname TEXT,
      department TEXT,
      subject TEXT
    );
`);