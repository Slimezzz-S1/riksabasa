import { Question } from "@/constants/types";

export function shuffle<T>(array : readonly T[]) : T[] {
	const tmp = [...array]
	let currentIndex = array.length

	while (currentIndex  != 0) {
		const randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--;

		[tmp[currentIndex], tmp[randomIndex]] = [tmp[randomIndex], tmp[currentIndex]]
	}

	return tmp
}
export function shuffleAnswers(q: Question): Question {
	const order = q.answers.map((_, i) => i);

	for (let i = order.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));

		[order[i], order[j]] = [order[j], order[i]];
	}

	return {
		...q,
		answers: order.map((i) => q.answers[i]),
		correctAnswer: order.indexOf(q.correctAnswer),
	};
}