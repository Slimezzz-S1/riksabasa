import { Question } from "@/constants/types";

export default function shuffleInPlace(array : any[]) {
  let currentIndex = array.length;

  while (currentIndex != 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}
export function shuffleAnswers(q: Question): Question {
  // shuffle the positions 0..n-1 instead of the strings
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