import { ImageSource } from "react-native"

export const categories = ["bahasa-indonesia", "bahasa-sunda", "sastra-indonesia"] as const
export const difficulties = ["easy", "intermediate", "medium", "hard", "expert"] as const

export type Category = typeof categories[number]
export type Difficulty = typeof difficulties[number]
export type ContentType = "text" | "image"
export type QuestionsData = {
	[C in Category]: {
		[D in Difficulty]: Quiz
	}
}

export type QuizRow = {
    category: Category;
    difficulty: Difficulty;
    material: string;
    questions: string;
}

export interface Quiz {
	material : Content[]
	questions : Question[]
}

export interface Text {
	type : "text"
	text : string
}

export type Content = Text | Image

export interface Image {
	type : "image"
	text : string
	source : ImageSource
}


export interface Question {
	question : string
	answers : string[]
	correctAnswer : number
}