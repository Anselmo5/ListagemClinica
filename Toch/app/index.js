import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Bem Vindo A Clinica Los Manos!</Text>
      <Link href="/Consulta" style={styles.yper}>Vamos Começar </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  titulo:{
    fontWeight:'bold',
    fontSize:20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  yper:{
    marginTop:10,
    fontWeight:"bold"
  },
});