import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	Image,
	Button,
	Alert,
	TouchableOpacity,
} from 'react-native';
// import huella from './assets/huella.png';

const App = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Hola</Text>

			{/* Source soporta url web y local (importandolo) */}
			<Image
				source={{ uri: 'https://picsum.photos/200/200' }}
				// source={huella}
				style={styles.image}
			/>

			{/* Button para botón básico, y TouchableOpacity para uno personalizable */}
			<Button
				color="000"
				title="Press me"
				onPress={() => Alert.alert('Hola')}
			/>

			<TouchableOpacity
				onPress={() => Alert.alert('Hola')}
				style={styles.button}
			>
				<Text style={styles.buttonText}>Press me custom</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#292929',
	},
	title: { fontSize: 30, color: '#fff' },
	image: { width: 200, height: 200, borderRadius: 100 },
	button: { backgroundColor: 'blue', padding: 7, marginTop: 10 },
	buttonText: { color: '#FFF', fontSize: 20 },
});

export default App;
