import sqlite from 'sqlite';

let db

export const init = async () => {
  db = await sqlite.open(':memory:');

  await db.run("CREATE TABLE users (username TEXT, password TEXT)");
  await db.run("INSERT INTO users (username, password) VALUES ('alice', 'password')");
  await db.run("INSERT INTO users (username, password) VALUES ('bob', 'password')");
  await db.run("INSERT INTO users (username, password) VALUES ('eve', 'password')");
  await db.run("INSERT INTO users (username, password) VALUES ('ivor', 'password')");
}

export const userValid = async (username, password) => {
  return await db.get("SELECT username FROM users WHERE username = '" + username + "' AND password = '" + password  + "';");
}
