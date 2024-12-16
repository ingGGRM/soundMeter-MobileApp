import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useEffect, useState } from "react";

import { db, ref, onValue } from "../firebase";

export default function SoundMeter() {
	const [noise, setNoise] = useState(0);
	const [temperature, setTemperature] = useState(0);
	const [humidity, setHumidity] = useState(0);

	useEffect(() => {
		const data = ref(db);

		onValue(data, (snapshot) => {
			setNoise(snapshot.val().noise);
			setTemperature(snapshot.val().temperature);
			setHumidity(snapshot.val().humidity);
		});
	}, [db]);

	return (
		<View style={styles.wrapper}>
			<View style={styles.noiseWrapper}>
				<Text style={styles.noiseLabel}>{`Ruido (dB)\n\n`}</Text>
				<Text style={styles.noiseText}>{noise + " dB"}</Text>
			</View>
			<View style={styles.tempHumidWrapper}>
				<View style={styles.humidWrapper}>
					<Text
						style={styles.tempHumidLabels}
					>{`Temperatura\n(°C)\n`}</Text>
					<Text style={styles.temperatureText}>
						{temperature + " °C"}
					</Text>
				</View>

				<View style={styles.tempWrapper}>
					<Text
						style={styles.tempHumidLabels}
					>{`Humedad Relativa\n(%HR)\n`}</Text>
					<Text style={styles.humidityText}>{humidity + " %HR"}</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: { flex: 1, alignItems: "center" },

	noiseWrapper: {
		position: "absolute",
		top: 50,
		height: Dimensions.get("window").height * 0.7 - 100,
		minWidth: "100%",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
	},

	noiseLabel: {
		textAlign: "center",
		fontSize: 14,
		fontWeight: 500,
		color: "white",
	},

	noiseText: {
		textAlign: "center",
		fontSize: 80,
		fontWeight: 700,
		color: "#090",
		textShadowColor: "#aa0",
		textShadowOffset: { width: 3, height: 3 },
		textShadowRadius: 15,
	},

	tempHumidWrapper: {
		position: "absolute",
		bottom: 25,
		height: "20%",
		width: Dimensions.get("window").width - 50,
		backgroundColor: "#aaa8",
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		boxShadow: "0 0 10 3 #c70",
	},

	tempHumidLabels: {
		textAlign: "center",
		fontSize: 14,
		fontWeight: 500,
	},

	tempWrapper: {
		width: "50%",
	},

	temperatureText: {
		textAlign: "center",
		fontSize: 25,
		fontWeight: 400,
		color: "orangered",
		textShadowColor: "#444",
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 5,
	},

	humidWrapper: {
		width: "50%",
	},

	humidityText: {
		textAlign: "center",
		fontSize: 25,
		fontWeight: 400,
		color: "darkgray",
		textShadowColor: "#444",
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 5,
	},
});
