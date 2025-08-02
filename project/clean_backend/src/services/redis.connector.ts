import dotenv from 'dotenv';
import { createClient } from "redis";
import { SapSession } from "../domain/sap";

/**
 * Cargar variables de entorno desde .env
 */
dotenv.config();

/**
 *
 */
export async function getSapSession(): Promise<SapSession | null> {
  const url = process.env.REDIS_SESSION_URI || "";
  const redisClient = createClient({ url });
  redisClient.connect();
  const sessionString = await redisClient.get("b1_session");

  const session = sessionString ? JSON.parse(sessionString) : null;
  return session;
}

/**
 *
 */
export async function setSapSession(session: SapSession) {
  const url = process.env.REDIS_SESSION_URI || "";
  const redisClient = createClient({ url });
  redisClient.connect();
  await redisClient.set("b1_session", JSON.stringify(session));
}
