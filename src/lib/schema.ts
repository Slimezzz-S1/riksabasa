import { categories, difficulties, Content, Question } from "@/constants/types"
import { sqliteTable, text, primaryKey } from "drizzle-orm/sqlite-core"

export const quizzes = sqliteTable(
	"quizzes",
	{
		category: text("category", { enum: categories }).notNull(),
		difficulty: text("difficulty", { enum: difficulties }).notNull(),
		material: text("material", { mode: "json" }).$type<Content[]>().notNull(),
		questions: text("questions", { mode: "json" }).$type<Question[]>().notNull(),
	},
	(t) => [
		primaryKey({ columns: [t.category, t.difficulty] })
	]   
);