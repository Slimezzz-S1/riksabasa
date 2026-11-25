export type Category = "bahasa-indonesia" | "bahasa-sunda" | "sastra-sunda"
export type Difficulty = "easy" | "intermediate" | "medium" | "hard" | "expert"

export interface QuestionProps {
    question : string
    answers : string[]
    correctAnswer : number
}

export type ByDifficulty = {
  [D in Difficulty]: QuestionProps[];
};

export type ByCategory = {
  [C in Category]: ByDifficulty;
};