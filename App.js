import React, { useState } from 'react';
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
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from "expo-sharing";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#292929',
	},
	title: { fontSize: 30, color: '#fff' },
	image: {
		width: 200,
		height: 200,
		borderRadius: 100,
		resizeMode: 'contain',
	},
	button: { backgroundColor: 'blue', padding: 7, marginTop: 10 },
	buttonText: { color: '#FFF', fontSize: 20 },
});

const App = () => {
	const [imageGallery, setImageGallery] = useState(null);

	// Usando ExpoImagePicker, acceder a la galeria del celular
	const openImagePickerAsync = async () => {
		// Permiso de acceso
		const permissionResult =
			await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (permissionResult.granted === false) {
			alert('Se necesita permiso para acceder a la camara');
			return;
		}

		// Acceder a la galeria y elegir una imagen
		const selectedImage = await ImagePicker.launchImageLibraryAsync();

		// Si no se eligio una imagen de la galería
		if (selectedImage.cancelled) {
			return;
		}

		// Guardar la imagen en el state de la app
		setImageGallery({ localUri: selectedImage.uri });
	};

	// Funcion para compartir
	const openShareDialog = async () =>{
		const canShare = await Sharing.isAvailableAsync();

		if (!canShare) {
			alert('No se puede compartir en esta plataforma');
			return;
		}

		await Sharing.shareAsync(imageGallery.localUri);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Seleccioná una imagen</Text>

			{/* Se puede usar ambos tipos de botones (TouchableOpacity y Button), abrir la galeria */}
			<TouchableOpacity onPress={openImagePickerAsync}>
				{/* Source soporta url web y local (importandolo) */}
				<Image
					source={{
						uri:
						imageGallery !== null
						? imageGallery.localUri
						: 'https://picsum.photos/200/200',
					}}
					// source={huella}
					style={styles.image}
				/>
			</TouchableOpacity>

			{/* Button para botón básico, y TouchableOpacity para uno personalizable */}
			<Button
				color="000"
				title="Press me"
				onPress={() => Alert.alert('Hola')}
			/>

			<Button
				title="Quitar imagen"
				color="#000"
				onPress={() => setImageGallery(null)}
			/>

			{/* Compartir */}
			{imageGallery ? 
			<TouchableOpacity 
				onPress={openShareDialog}
				style={styles.button}
			>
				<Text style={styles.buttonText}>Compartir</Text>
			</TouchableOpacity> : <View/>}
		</View>
	);
};

export default App;
