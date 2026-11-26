import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import HeroCarousel from "@/components/ui/hero-carousel";
import Category, { OptionProps } from "@/components/ui/select";
import { indexItems } from "@/constants/data";
import { Colors } from "@/constants/theme";
import { StyleSheet, View, } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function HomeHeader() {
	const insets = useSafeAreaInsets()

	return (
		<View style={[styles.header, { paddingTop: insets.top }]}>
			<ThemedText style={styles.headerTitle}>
				RiksaBasa
			</ThemedText>
		</View>
	)
}

export default function HomePage() {
	const categories : OptionProps[] = [
		{
			title : "Bahasa Indonesia",
			description : "blaa blah blaj",
			url : {
				pathname : "/difficulty",
				params : {
					category : "bahasa-indonesia"
				}
			},
			imageUrl : require("@/assets/categories/bahasa-indonesia.jpeg")
		},
		{
			title : "Bahasa Sunda",
			description : "blaa blah blaj versi sunda",
			url : {
				pathname : "/difficulty",
				params : {
					category : "bahasa-sunda"
				}
			},
			imageUrl : require("@/assets/categories/bahasa-sunda.jpeg")
		},
		{
			title : "Sastra indonesia",
			description : "tung tung tung sahur",
			url : {
				pathname : "/difficulty",
				params : {
					category : "sastra-indonesia"
				}
			},
			imageUrl : require("@/assets/categories/sastra-indonesia.jpeg")
		},
	]

	return (
		<>
		<HomeHeader />

		<ThemedView style={styles.section}>
			<HeroCarousel items={indexItems} />

			<Category text="Pilih Kategori" options={categories} />
		</ThemedView>
		</>
	)
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: Colors.light.accentColor,
		paddingBottom: 14,
		paddingHorizontal: 16,
	},
	headerTitle: {
		color: "#fff",
		fontSize: 20,
		fontWeight: "bold",
	},
	section : {
		padding : 16,
		gap : 16
	},
})