import { ReactElement } from "react"
import { FlatList, View, Image, StyleSheet, ImageSource } from "react-native"
import { ThemedView } from "../themed-view"
import { ThemedText } from "../themed-text"
import { Colors } from "@/constants/theme"

export interface CarouselItemProps {
    id : string
    element : ReactElement
}
interface CarouselProps {
    items : CarouselItemProps[]
}

export default function HeroCarousel({ items } : CarouselProps) {
    return (
        <FlatList
            data={items}
            horizontal
            pagingEnabled
            centerContent
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                gap: 10
            }}
            renderItem={({ item }) => item.element}
        />
    )
}

interface HeroCarouselItemProps {
	text : string
	imageSource? : ImageSource
}

export function HeroCarouselItem({ text, imageSource } : HeroCarouselItemProps) {
	return (
		<ThemedView style={styles.root}>
            <Image source={require("@/assets/index/hero-background.jpeg")} style={styles.background} />

            <View style={imageSource ? styles.TextWrapperWithImage : styles.TextWrapperWithoutImage}>
                <ThemedText style={styles.text}>
                    {text}
                </ThemedText>
            </View>

            {(imageSource?.toString().length ?? 0) > 1 && (
                <View style={styles.imageWrapper}>
                    <Image source={require("@/assets/index/student.png")} style={styles.image} />
                </View>
            )}
        </ThemedView>
	)
}

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
    TextWrapperWithImage : {
        display : "flex",
        justifyContent : "center",
        width : "50%",
    },
    TextWrapperWithoutImage : {
        display : "flex",
        justifyContent : "center",
        width : "100%",
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
    },
})