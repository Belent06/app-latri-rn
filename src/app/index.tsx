import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  // Estado para controlar qué pantalla se muestra
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    // Temporizador para ocultar el Splash Screen después de 3.5 segundos
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3500);

    // Limpieza del temporizador
    return () => clearTimeout(timer);
  }, []);

  // --- COMPONENTE SPLASH SCREEN ---
  if (isSplashVisible) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/FEF_logo.svg/512px-FEF_logo.svg.png' }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.splashText}>La Tri</Text>
        <ActivityIndicator size="large" color="#FFD100" style={{ marginTop: 20 }} />
      </View>
    );
  }

  // --- COMPONENTE HOME SCREEN ---
  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Selección Ecuatoriana</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Información del Equipo</Text>
        <Text style={styles.infoText}>⚽ <Text style={styles.bold}>Apodo:</Text> La Tri, La Tricolor</Text>
        <Text style={styles.infoText}>🏟️ <Text style={styles.bold}>Estadio principal:</Text> Estadio Rodrigo Paz Delgado</Text>
        <Text style={styles.infoText}>🏆 <Text style={styles.bold}>Confederación:</Text> CONMEBOL</Text>
        <Text style={styles.infoText}>🌟 <Text style={styles.bold}>Colores:</Text> Amarillo, Azul y Rojo</Text>
      </View>
    </SafeAreaView>
  );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
  // Estilos del Splash
  splashContainer: {
    flex: 1,
    backgroundColor: '#002244', // Azul oscuro
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  splashText: {
    color: '#FFD100', // Amarillo
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
  },
  
  // Estilos del Home
  homeContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#002244',
    paddingVertical: 20,
    alignItems: 'center',
    paddingTop: 50, // Espacio para el notch del celular
  },
  headerTitle: {
    color: '#FFD100',
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#ffffff',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra para Android
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#002244',
    marginBottom: 15,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
});