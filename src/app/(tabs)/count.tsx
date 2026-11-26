import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useState } from "react";
import { Button, StyleSheet } from "react-native";

export default function CountPage() {
	const [count, setCount] = useState<number>(0)

	const onIncrement = () => {
		setCount(prev => prev + 1)
	}

	const onReset = () => {
		setCount(0)
	}

	return (
		<ThemedView style={styles.container}>
			<ThemedView style={styles.mainContainer}>
				<ThemedText>
					Pencet ini untuk menambah angka dengan 1
				</ThemedText>

				<ThemedText>
					angka : {count}
				</ThemedText>

				<ThemedView style={styles.buttonContainer}>
					<Button title="Tambah satu" onPress={onIncrement} />

					<Button title="onReset" onPress={onReset} />
				</ThemedView>
			</ThemedView>
		</ThemedView>
	)
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	justifyContent: 'center',
	flexDirection: 'row',
  },
  mainContainer : {
	flex : 1,
	justifyContent : "center",
	alignItems : "center",
	flexDirection : "column",
	gap : 12,
  },
  buttonContainer : {
	gap: 12,
	display : "flex"
  }
});
