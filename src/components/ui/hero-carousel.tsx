import { ReactElement } from "react";
import { FlatList } from "react-native";
import { ThemedView } from "../themed-view";

export interface CarouselItemProps {
    id : string
    element : ReactElement
}

interface HeroCarouselProps {
    items : CarouselItemProps[]
}


export default function HeroCarousel({ items } : HeroCarouselProps) {
    return (
        <FlatList
            data={items}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <ThemedView>
                    {item.element}
                </ThemedView>
            )}
        />
    )
}