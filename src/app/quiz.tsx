import { ThemedText } from "@/components/themed-text"
import { ThemedView } from "@/components/themed-view"
import { questionsData } from "@/constants/data"
import { Colors } from "@/constants/theme"
import type { Category, Difficulty, Question } from "@/constants/types"
import { Stack, useLocalSearchParams, useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { Pressable, ScrollView, StyleSheet, View, Text } from "react-native"

export default function QuizScreen() {
	const router = useRouter()
	const { category, difficulty } = useLocalSearchParams<{
		category: Category
		difficulty: Difficulty
	}>()

	const questions : Question[] = questionsData[category]?.[difficulty]["questions"] ?? []

	const [index, setIndex] = useState(0)
	const [picked, setPicked] = useState<(number | null)[]>(() => questions.map(() => null))
	const [finished, setFinished] = useState(false)

	if (questions.length === 0) {
		return (
			<ThemedView style={styles.center}>
				<ThemedText>
					No questions found for this quiz.
				</ThemedText>
			</ThemedView>
		)
	}

	const current = questions[index];
	const isLast = index === questions.length - 1;
	const allAnswered = picked.every((p) => p !== null);

	const pick = (answerIndex: number) => setPicked((prev) => prev.map((p, i) => (i === index ? answerIndex : p)))

  	const score = picked.filter((p, i) => p === questions[i].correctAnswer).length;

  	// RESULT

	if (finished) {
		return (
			<ThemedView style={styles.root}>
				<Stack.Screen options={{ title: "Results", headerBackVisible: false }} />

				<ScrollView contentContainerStyle={styles.container}>
					<ThemedText style={styles.score}>
						{score} / {questions.length}
					</ThemedText>

					{questions.map((q, i) => {
						const correct = picked[i] === q.correctAnswer

						return (
							<View key={i} style={styles.reviewItem}>
								<ThemedText style={styles.reviewQuestion}>
									{i + 1}. {q.question}
								</ThemedText>

								<ThemedText style={{ color: correct ? "#4caf50" : "#f44336" }}>
									Your answer: {picked[i] !== null ? q.answers[picked[i]!] : "-"}
								</ThemedText>

								{!correct && (
									<ThemedText style={{ color: "#4caf50" }}>
										Correct: {q.answers[q.correctAnswer]}
									</ThemedText>
								)}
							</View>
						)
					})}

					<Pressable style={styles.primary} onPress={() => router.back()}>
						<ThemedText style={styles.primaryText}>
							Done
						</ThemedText>
					</Pressable>
				</ScrollView>
			</ThemedView>
		)
	}

	// QUESTION

	return (
		<ThemedView style={styles.root}>
			<Stack.Screen />

			<ProgressHeader currentQuestion={index + 1} questionLength={questions.length} />

			<ScrollView contentContainerStyle={styles.container}>
				<ThemedView style={styles.questionWrapper}>
					<ThemedText style={styles.question}>
						{current.question}
					</ThemedText>
				</ThemedView>

				{current.answers.map((answer, i) => {
					const selected = picked[index] === i
					return (
						<Pressable
							key={i}
							onPress={() => pick(i)}
							style={[styles.answer, selected && styles.answerSelected]}
						>
							<View style={styles.answerCircle}>
								<Text style={styles.answerCircleText}>
									{["A", "B", "C", "D"][i]}
								</Text>
							</View>

							<ThemedText style={{...(selected ? styles.answerSelectedText : {}), ...styles.answerText}}>
								{answer}
							</ThemedText>
						</Pressable>
					)
				})}

				<View style={styles.navRow}>
				<Pressable
					style={[styles.secondary, index === 0 && styles.disabled]}
					disabled={index === 0}
					onPress={() => setIndex(index - 1)}
				>
					<ThemedText>
						Back
					</ThemedText>
				</Pressable>

				{isLast ? (
					<Pressable
						style={[styles.primary, !allAnswered && styles.disabled]}
						disabled={!allAnswered}
						onPress={() => setFinished(true)}
					>
					<ThemedText style={styles.primaryText}>
						Finish
					</ThemedText>
					</Pressable>
				) : (
					<Pressable
						style={styles.primary}
						onPress={() => setIndex(index + 1)}
					>
					<ThemedText style={styles.primaryText}>
						Next
					</ThemedText>
					</Pressable>
				)}
				</View>
			</ScrollView>
		</ThemedView>
	)
}

interface ProgressBarProps {
	currentQuestion : number
	questionLength : number
}

function ProgressHeader({ currentQuestion, questionLength } : ProgressBarProps) {
	const [posX, setPosX] = useState<number>(0)

	useEffect(() => {
		setPosX((currentQuestion / 100) * questionLength)
	}, [currentQuestion])

	return (
		<ThemedView>
			<View style={styles.progressTextWrapper}>
				<Text style={styles.progressText}>
					{currentQuestion}/{questionLength}
				</Text>
			</View>

			<View style={styles.progress}>
				<View style={styles.progressInner} />
			</View>
		</ThemedView>
	)
}

const styles = StyleSheet.create({
	progressRoot : {
		color : Colors.light.accentColor
	},
	progress : {
		position : "relative",
		width : "100%",
		padding : 12
	},
	progressInner : {
		backgroundColor : Colors.light.text
	},
	progressText : {
		color : Colors.light.text
	},
	progressTextWrapper : {

	},
	root: {
		flex: 1
	},
	questionWrapper : {
		backgroundColor : Colors.light.accentColor,
		padding : 16,
		borderRadius : 16
	},
	question: {
		fontSize: 22,
		fontWeight: "bold",
		marginBottom: 12,
		color : Colors.light.background,
	},
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	container: {
		padding: 20,
		gap: 12
	},
	answer: {
		padding: 16,
		borderRadius: 12,
		borderWidth: 2,
		borderColor: "#8884",
		flexDirection : "row",
		alignItems : "center",
		gap : 22
	},
	answerText : {
		flex : 1,
		fontSize : 24
	},
	answerSelected: {
		backgroundColor: Colors.light.accentColor,
		borderColor: Colors.light.lightAccentColor
	},
	answerSelectedText: {
		color: "#fff",
	},
	answerCircle: {
		backgroundColor: Colors.light.secondaryColor,
		width: 44,
		height: 44,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 22,
		flexShrink: 0,
	},
	answerCircleText : {
		color : "white",
		fontSize : 24
	},
	navRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 16
	},
	primary: {
		backgroundColor: Colors.light.accentColor,
		paddingVertical: 14,
		paddingHorizontal: 28,
		borderRadius: 12,
		alignItems: "center",
	},
	primaryText: {
		color: "#fff",
		fontWeight: "600"
	},
	secondary: {
		paddingVertical: 14,
		paddingHorizontal: 28,
		borderRadius: 12,
		borderWidth: 2,
		borderColor: "#8884",
	},
	disabled: {
		opacity: 0.4
	},
	score: {
		fontSize: 48,
		fontWeight: "bold",
		textAlign: "center",
		marginVertical: 24
	},
	reviewItem: {
		gap: 4,
		marginBottom: 12
	},
	reviewQuestion: {
		fontWeight: "600"
	},
})