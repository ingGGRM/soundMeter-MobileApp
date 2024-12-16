import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: true,
				headerTitle: "Medidor de ruido",
				headerTitleAlign: "center",
				headerTitleStyle: {
					color: "#07f",
					fontSize: 30,
					fontWeight: 700,
				},
			}}
		></Stack>
	);
}
