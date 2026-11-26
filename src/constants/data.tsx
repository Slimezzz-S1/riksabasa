import { ThemedText } from "@/components/themed-text"
import { ThemedView } from "@/components/themed-view"
import { Image, StyleSheet, View } from "react-native"
import { Colors } from "./theme"
import { CarouselItemProps, HeroCarouselItem } from "@/components/ui/hero-carousel"

const styles = StyleSheet.create({
    root : {
        position : "relative",
        width : 480,
        height : 350,
        backgroundColor : Colors.light.accentColor,
        padding : 24,
        paddingBottom : 0,
        borderRadius : 20,
        flexDirection : "row",
        justifyContent : "space-between",
        overflow : "hidden"
    },
    TextWrapper : {
        display : "flex",
        justifyContent : "center",
        width : "50%",
    },
    text : {
        color : "white",
        fontSize : 30,
        lineHeight : 30 * 1.15
    },
    background: {
        position: "absolute",
        top: 0,
        left : "-50%",
        resizeMode: "contain",
    },
    imageWrapper: {
        width: 200,
        height: "100%",
        overflow: "hidden",
    },
    image: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        aspectRatio: 2 / 3,
    },
})

export const indexItems : CarouselItemProps[] = [
    {
        id : "1",
        element : (
            <ThemedView style={styles.root}>
                <Image source={require("@/assets/index/hero-background.jpeg")} style={styles.background} />

                <View style={styles.TextWrapper}>
                    <ThemedText style={styles.text}>
                        {"Uji Kemampuan Bahasa,\nLestarikan Sastra dan Budaya"}
                    </ThemedText>
                </View>

                <View style={styles.imageWrapper}>
                    <Image source={require("@/assets/index/student.png")} style={styles.image} />
                </View>
            </ThemedView>
        )
    },
    {
        id : "2",
        element : (
            <ThemedView style={styles.root}>
                <Image source={require("@/assets/index/hero-background.jpeg")} style={styles.background} />

                <View style={styles.TextWrapper}>
                    <ThemedText style={styles.text}>
                        {"Lorem ipsum dolor sit elit. Dolor consectetur."}
                    </ThemedText>
                </View>

                <View style={styles.imageWrapper}>
                    <Image source={require("@/assets/index/student.png")} style={styles.image} />
                </View>
            </ThemedView>
        )
    },
]