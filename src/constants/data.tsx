import { ThemedText } from "@/components/themed-text"
import { ThemedView } from "@/components/themed-view"
import { CarouselItemProps } from "@/components/ui/hero-carousel"
import { Image, StyleSheet, View } from "react-native"
import { Colors } from "./theme"

const styles = StyleSheet.create({
    mainElement : {
        position : "relative",
        width : 480,
        backgroundColor : Colors.light.accentColor,
        padding : 24,
        borderRadius : 20,
        flexDirection : "row",
        justifyContent : "space-between",
        overflow : "hidden"
    },
    mainElementTextWrapper : {
        display : "flex",
        justifyContent : "center",
        width : "50%",
    },
    mainElementImage : {
        width : 200,
        height : 300,
    },
    mainText : {
        color : "white",
        fontSize : 30,
    },
    background : {
        position : "absolute",
        top : "0",
        left : "0",
        width : "100%",
        height : "100%",
        objectFit : "cover",
        borderWidth : 2
    },
})

export const heroCarouselItems : CarouselItemProps[] = [
    {
        id : "1",
        element : (
            <ThemedView style={styles.mainElement}>
                <Image source={require("@/assets/index/hero-background.jpeg")} style={styles.background} />

                <View style={styles.mainElementTextWrapper}>
                    <ThemedText style={styles.mainText}>
                        {"Uji Kemampuan Bahasa,\nLestarikan Sastra dan Budaya"}
                    </ThemedText>
                </View>

                <Image source={require("@/assets/index/student.jpeg")} style={styles.mainElementImage} />
            </ThemedView>
        )
    },
    {
        id : "2",
        element : (
            <ThemedView style={styles.mainElement}>
                <Image source={require("@/assets/index/hero-background.jpeg")} style={styles.background} />

                <View style={styles.mainElementTextWrapper}>
                    <ThemedText style={styles.mainText}>
                        {"Uji Kemampuan Bahasa,\nLestarikan Sastra dan Budaya"}
                    </ThemedText>
                </View>

                <Image source={require("@/assets/index/student.jpeg")} style={styles.mainElementImage} />
            </ThemedView>
        )
    },
]