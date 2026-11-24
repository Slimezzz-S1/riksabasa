import { Colors } from "@/constants/theme";
import { Href, useRouter } from "expo-router";
import { Image, ImageSource, Pressable, StyleSheet, View, ViewProps } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";

interface SelectProps extends ViewProps {
    text : string
    options : OptionProps[]
}

export default function Select({ text, options, style, ...rest } : SelectProps) {
    return (
        <ThemedView style={{...styles.categoryRoot, ...style}} {...rest}>
            <ThemedText style={styles.categoryText}>
                {text}
            </ThemedText>

            {options.map((option, index) => (
                <Option key={index} {...option} />
            ))}
        </ThemedView>
    )
}

export interface OptionProps extends ViewProps {
    title : string
    description : string
    url : Href
    imageUrl : ImageSource
}

export function Option({ title, description, url, style, imageUrl, ...rest } : OptionProps) {
    const router = useRouter()

    return (
        <ThemedView style={[styles.optionRoot, style]} {...rest}>
            <View>
                <Image source={imageUrl} style={styles.optionImage} />
            </View>

            <View style={styles.optionMainElement}>
                <ThemedText style={styles.optionTitle}>
                    {title}
                </ThemedText>

                <View style={styles.optionInnerElement}>
                    <ThemedText style={styles.optionDescription}>
                        {description}
                    </ThemedText>
                </View>
            </View>

            <Pressable style={styles.optionButton} onPress={() => router.navigate(url)}>
                <ThemedText>
                    Select
                </ThemedText>
            </Pressable>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    categoryRoot : {
        gap : 16
    },
    categoryText : {
        fontSize : 32,
        fontWeight : "black"
    },

    optionRoot : {
        flexDirection : "row",
        borderWidth : 2,
        borderColor : "gray",
        borderRadius : 12,
        padding: 12,
        gap : 16
    },
    optionImage : {
        width : 75,
        height : 75
    },
    optionInnerElement : {
        flex : 1,
        display : "flex",
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "flex-start",
    },
    optionTitle : {
        fontSize : 26,
    },
    optionDescription : {
        flex : 1
    },
    optionButton : {
        padding : 12,
        paddingInline : 24,
        backgroundColor : Colors.light.secondaryColor,
        borderRadius : 18,
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    },
    optionMainElement : {
        flex : 1,
    },
})