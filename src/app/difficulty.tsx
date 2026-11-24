import { ThemedView } from "@/components/themed-view"
import Select, { OptionProps } from "@/components/ui/select"
import { useLocalSearchParams } from "expo-router"
import { ScrollView, StyleSheet } from "react-native"

export default function DifficultyScreen() {
    const { category } = useLocalSearchParams<{ category: string }>()

    const options: OptionProps[] = [
        {
            title: "EZZ",
            description: "ez bett anjir",
            url: {
            pathname: "/quiz", params: {
                category,
                difficulty: "easy"
            }
        },
        imageUrl : require("@/assets/categories/bahasa-indonesia.jpeg"),
        },
        {
            title: "Medium",
            description: "Medium",
            url: {
                pathname: "/quiz",
                params: {
                    category,
                    difficulty: "medium"
                }
            },
            imageUrl : require("@/assets/categories/bahasa-indonesia.jpeg")
        },
        {
            title: "Hard",
            description: "Level Impossible",
            url: {
                pathname: "/quiz",
                params: {
                    category,
                    difficulty: "hard"
                }
            },
            imageUrl : require("@/assets/categories/bahasa-indonesia.jpeg")
        },
    ]

    return (
        <ThemedView style={styles.flex}>
            <ScrollView contentContainerStyle={styles.container}>
                <Select text="Pilih kesulitan" options={options} />
            </ScrollView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    container: {
        padding: 20
    },
})