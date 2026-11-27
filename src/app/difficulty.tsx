import { ThemedView } from "@/components/themed-view"
import { HeroCarouselItem } from "@/components/ui/hero-carousel"
import Select, { OptionProps } from "@/components/ui/select"
import { useLocalSearchParams } from "expo-router"
import { ScrollView, StyleSheet} from "react-native"

export default function DifficultyScreen() {
    const { category } = useLocalSearchParams<{ category: string }>()

    const options: OptionProps[] = [
        {
            title: "Mudah",
            description: "ez bett anjir",
            url: {
            pathname: "/quiz", params: {
                category,
                difficulty: "easy"
            }
        },
        imageUrl : require("@/assets/difficulties/level-1.jpeg"),
        },
        {
            title: "Menengah",
            description: "atau disebut intermediate",
            url: {
                pathname: "/quiz",
                params: {
                    category,
                    difficulty: "intermediate"
                }
            },
            imageUrl : require("@/assets/difficulties/level-2.jpeg")
        },
        {
            title: "Sedang",
            description: "50/50",
            url: {
                pathname: "/quiz",
                params: {
                    category,
                    difficulty: "medium"
                }
            },
            imageUrl : require("@/assets/difficulties/level-3.jpeg")
        },
        {
            title: "Sulit",
            description: "hese any",
            url: {
                pathname: "/quiz",
                params: {
                    category,
                    difficulty: "hard"
                }
            },
            imageUrl : require("@/assets/difficulties/level-4.jpeg")
        },
        {
            title: "Sangat Sulit",
            description: "Level Impossible",
            url: {
                pathname: "/quiz",
                params: {
                    category,
                    difficulty: "hard"
                }
            },
            imageUrl : require("@/assets/difficulties/level-5.jpeg")
        },
    ]

    return (
        <ThemedView style={styles.root}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <HeroCarouselItem text={`${category}\nPilih level yang kamu ingin pelajari`} />

                <Select text="Pilih kesulitan" options={options} />
            </ScrollView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    scrollContainer : {
        padding : 16,
        gap : 16
    }
})