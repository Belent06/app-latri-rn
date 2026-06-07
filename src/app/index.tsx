import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);


// --- FUNCIÓN DEL BOTÓN ---
    const mostrarMensaje = () => {
      if (Platform.OS === 'web') {
        window.alert("¡Vamos La Tri! 🇪🇨\n\nGracias por apoyar a la Selección Ecuatoriana de Fútbol.");
      } else {

        Alert.alert(
          "¡Vamos La Tri! 🇪🇨", 
          "Gracias por apoyar a la Selección Ecuatoriana de Fútbol."
        );
      }
    };

  // --- COMPONENTE SPLASH SCREEN ---
  if (isSplashVisible) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={require('../../assets/images/logo-latri.png')}
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
      
      {/* ENCABEZADO MODIFICADO */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Selección Ecuatoriana</Text>
        <Image
          source={require('../../assets/images/logo-latri.png')} // Reusamos el logo para la esquina
          style={styles.headerIcon}
          resizeMode="contain"
        />
      </View>
      
      {/* TARJETA DE INFORMACIÓN */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Información del Equipo</Text>
        <Text style={styles.infoText}>⚽ <Text style={styles.bold}>Apodo:</Text> La Tri, La Tricolor</Text>
        <Text style={styles.infoText}>🏟️ <Text style={styles.bold}>Estadio principal:</Text> Estadio Rodrigo Paz Delgado</Text>
        <Text style={styles.infoText}>🏆 <Text style={styles.bold}>Confederación:</Text> CONMEBOL</Text>
        <Text style={styles.infoText}>🌟 <Text style={styles.bold}>Colores:</Text> Amarillo, Azul y Rojo</Text>
      </View>

      {/* NUEVO BOTÓN INTERACTIVO */}
      <TouchableOpacity style={styles.button} onPress={mostrarMensaje}>
        <Text style={styles.buttonText}>Apoyar al Equipo</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1, backgroundColor: '#002244', alignItems: 'center', justifyContent: 'center',
  },
  logo: { width: 200, height: 200 },
  splashText: { color: '#FFD100', fontSize: 32, fontWeight: 'bold', marginTop: 20 },
  
  homeContainer: { flex: 1, backgroundColor: '#f5f5f5' },
  
  // Estilos actualizados del Header
  header: { 
    backgroundColor: '#002244', 
    paddingVertical: 15, 
    paddingHorizontal: 20, // Espacio a los lados
    paddingTop: 50,
    flexDirection: 'row', // Pone los elementos en fila horizontal
    justifyContent: 'space-between', // Empuja texto a la izq e imagen a la der
    alignItems: 'center', // Los centra verticalmente
  },
  headerTitle: { color: '#FFD100', fontSize: 22, fontWeight: 'bold' },
  headerIcon: { width: 40, height: 40 }, // Logo en miniatura
  
  card: {
    backgroundColor: '#ffffff', margin: 20, padding: 20, borderRadius: 10,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1,
    shadowRadius: 4, elevation: 3,
  },
  cardTitle: { fontSize: 20, fontWeight: 'bold', color: '#002244', marginBottom: 15, textAlign: 'center' },
  infoText: { fontSize: 16, marginBottom: 10, color: '#333' },
  bold: { fontWeight: 'bold' },

  // Estilos del Botón
  button: {
    backgroundColor: '#FFD100', // Fondo amarillo
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 20, // Mismo margen que la tarjeta
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2,
    elevation: 2,
  },
  buttonText: {
    color: '#002244', // Letra azul oscura
    fontSize: 16,
    fontWeight: 'bold',
  }
});