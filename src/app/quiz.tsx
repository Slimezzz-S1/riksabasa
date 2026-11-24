import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { questionData } from "@/constants/question-data";
import type { Category, Difficulty } from "@/constants/types";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";

export default function QuizScreen() {
  const router = useRouter();
  const { category, difficulty } = useLocalSearchParams<{
    category: Category;
    difficulty: Difficulty;
  }>();

  const questions = questionData[category]?.[difficulty] ?? [];

  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<(number | null)[]>(() =>
    questions.map(() => null)
  );
  const [finished, setFinished] = useState(false);

  if (questions.length === 0) {
    return (
      <ThemedView style={styles.center}>
        <ThemedText>
            No questions found for this quiz.
            </ThemedText>
      </ThemedView>
    );
  } 

  const current = questions[index];
  const isLast = index === questions.length - 1;
  const allAnswered = picked.every((p) => p !== null);

  const pick = (answerIndex: number) =>
    setPicked((prev) => prev.map((p, i) => (i === index ? answerIndex : p)));

  const score = picked.filter((p, i) => p === questions[i].correctAnswer).length;

  // ---------- Results ----------
  if (finished) {
    return (
      <ThemedView style={styles.flex}>
        <Stack.Screen options={{ title: "Results", headerBackVisible: false }} />
        <ScrollView contentContainerStyle={styles.container}>
          <ThemedText style={styles.score}>
            {score} / {questions.length}
          </ThemedText>

          {questions.map((q, i) => {
            const correct = picked[i] === q.correctAnswer;
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
            );
          })}

          <Pressable style={styles.primary} onPress={() => router.back()}>
            <ThemedText style={styles.primaryText}>Done</ThemedText>
          </Pressable>
        </ScrollView>
      </ThemedView>
    );
  }

  // ---------- Question ----------
  return (
    <ThemedView style={styles.flex}>
      <Stack.Screen
        options={{ title: `Question ${index + 1} / ${questions.length}` }}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <ThemedText style={styles.question}>{current.question}</ThemedText>

        {current.answers.map((answer, i) => {
          const selected = picked[index] === i;
          return (
            <Pressable
              key={i}
              onPress={() => pick(i)}
              style={[styles.answer, selected && styles.answerSelected]}
            >
              <ThemedText style={selected ? styles.answerSelectedText : undefined}>
                {answer}
              </ThemedText>
            </Pressable>
          );
        })}

        <View style={styles.navRow}>
          <Pressable
            style={[styles.secondary, index === 0 && styles.disabled]}
            disabled={index === 0}
            onPress={() => setIndex(index - 1)}
          >
            <ThemedText>Back</ThemedText>
          </Pressable>

          {isLast ? (
            <Pressable
              style={[styles.primary, !allAnswered && styles.disabled]}
              disabled={!allAnswered}
              onPress={() => setFinished(true)}
            >
              <ThemedText style={styles.primaryText}>Finish</ThemedText>
            </Pressable>
          ) : (
            <Pressable
              style={styles.primary}
              onPress={() => setIndex(index + 1)}
            >
              <ThemedText style={styles.primaryText}>Next</ThemedText>
            </Pressable>
          )}
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  container: { padding: 20, gap: 12 },
  question: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  answer: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#8884",
  },
  answerSelected: { backgroundColor: "#4f46e5", borderColor: "#4f46e5" },
  answerSelectedText: { color: "#fff" },
  navRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 16 },
  primary: {
    backgroundColor: "#4f46e5",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
    alignItems: "center",
  },
  primaryText: { color: "#fff", fontWeight: "600" },
  secondary: {
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#8884",
  },
  disabled: { opacity: 0.4 },
  score: { fontSize: 48, fontWeight: "bold", textAlign: "center", marginVertical: 24 },
  reviewItem: { gap: 4, marginBottom: 12 },
  reviewQuestion: { fontWeight: "600" },
});