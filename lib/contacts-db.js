import sql from "better-sqlite3";

const db = sql(`${process.env.database_name}.db`);

export async function saveContact(message) {
  db.prepare(
    `
    INSERT INTO contacts 
    (name, email, message)
    VALUES (
      @name,
      @email,
      @message
    )
    `
  ).run(message);
}
