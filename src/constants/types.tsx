<<<<<<< HEAD
import { ImageSource } from "react-native"
=======
export type Category = "bahasa-indonesia" | "bahasa-sunda" | "sastra-sunda"
export type Difficulty = "easy" | "medium" | "hard"
>>>>>>> parent of 77c4378 (menambahkan kesulitan baru)

export type Category = "bahasa-indonesia" | "bahasa-sunda" | "sastra-indonesia"
export type Difficulty = "easy" | "intermediate" | "medium" | "hard" | "expert"
export type ContentType = "text" | "image"
export type Content = Text | Image
export type QuestionsData = {
	[C in Category]: {
		[D in Difficulty]: Quiz
	}
}

export interface Quiz {
	material : Content[]
	questions : Question[]
}

export interface Text {
	type : "text"
	text : string
}

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