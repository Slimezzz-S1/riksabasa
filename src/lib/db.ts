import { drizzle } from "drizzle-orm/expo-sqlite"
import { openDatabaseSync } from "expo-sqlite"

const expo = openDatabaseSync("quiz.db")
export const db = drizzle(expo)