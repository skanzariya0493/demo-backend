require("dotenv").config();

const { Client } = require("pg");

async function test() {
    console.log("process.env.DATABASE_URL", process.env.DATABASE_URL);
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    await client.connect();
    console.log("✅ Connected Successfully!");
    await client.end();
  } catch (err) {
    console.error(err);
  }
}

test();