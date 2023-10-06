import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";

export default function Consulta() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Link href="/Agendar">TelaC</Link>
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
});