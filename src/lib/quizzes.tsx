import { Category, Difficulty, Quiz, QuestionsData } from "@/constants/types"
import { and, eq } from "drizzle-orm"
import { quizzes } from "./schema"

/** Get one quiz. */
export async function getQuiz(
  category: Category,
  difficulty: Difficulty
): Promise<Quiz | undefined> {
  const [row] = await db
    .select()
    .from(quizzes)
    .where(and(eq(quizzes.category, category), eq(quizzes.difficulty, difficulty)));

  return row && { material: row.material, questions: row.questions };
}

/** Save or overwrite one quiz. */
export async function saveQuiz(
  category: Category,
  difficulty: Difficulty,
  quiz: Quiz
) {
  await db
    .insert(quizzes)
    .values({ category, difficulty, ...quiz })
    .onConflictDoUpdate({
      target: [quizzes.category, quizzes.difficulty],
      set: { material: quiz.material, questions: quiz.questions },
    });
}

/** Load everything back into your QuestionsData shape. */
export async function getQuestionsData(): Promise<QuestionsData> {
  const rows = await db.select().from(quizzes);
  const data = {} as QuestionsData;

  for (const row of rows) {
    (data[row.category] ??= {} as QuestionsData[Category])[row.difficulty] = {
      material: row.material,
      questions: row.questions,
    };
  }
  return data;
}

/** Seed the database from a QuestionsData object. */
export async function seedQuestionsData(data: QuestionsData) {
  for (const [category, byDifficulty] of Object.entries(data)) {
    for (const [difficulty, quiz] of Object.entries(byDifficulty)) {
      await saveQuiz(category as Category, difficulty as Difficulty, quiz);
    }
  }
}