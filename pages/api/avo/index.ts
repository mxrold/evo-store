import { IncomingMessage, ServerResponse } from "http";
import Database from "@/database/db";

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
  const db = new Database();
  const allEntries = await db.getAll();
  const lengthEntries = allEntries.length;

  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");

  response.end(JSON.stringify({ data: allEntries, length: lengthEntries }));
};

export default allAvos;
