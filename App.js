import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
// import huella from './assets/huella.png';

const App = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Hola</Text>

			<Image
				source={{ uri: 'https://picsum.photos/200/200' }}
				// source={huella}
				style={styles.image}
			/>
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
});

export default App;
