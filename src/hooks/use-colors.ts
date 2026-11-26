import { Colors } from "@/constants/theme"
import { useColorScheme } from "./use-color-scheme.web"

export default function useColors() {
    const scheme = useColorScheme()

    return Colors[scheme === "dark" ? "dark" : "light"]
}