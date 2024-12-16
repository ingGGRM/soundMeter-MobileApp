import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
	Button,
	Platform,
	StyleSheet,
	Text,
	View,
	StatusBar,
} from "react-native";

// import screens and components
import SoundMeter from "./screens/SoundMeter";

export default function Index() {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<StatusBar
					animated={true}
					backgroundColor="#222"
					barStyle={"default"}
					showHideTransition={"slide"}
					hidden={false}
				/>
				<SoundMeter />
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#333",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		height: "100%",
	},
});
