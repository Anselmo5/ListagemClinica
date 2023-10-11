import { Link } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native';


const Agendar = () => {
  const [taks, setTaks] = useState([]);

  const footballPlayers = [
    {
    name: "Cristiano Ronaldo",
    position: "Forward",
    age: 36,
    },
    {
    name: "Lionel Messi",
    position: "Attacking Midfielder",
    age: 34,
    },
    {
    name: "Neymar Jr.",
    position: "Forward",
    age: 29,
    },
    {
    name: "Kylian Mbappé",
    position: "Forward",
    age: 23,
    },
    {
    name: "Sergio Ramos",
    position: "Defender",
    age: 35,
    },
    {
    name: "Kevin De Bruyne",
    position: "Midfielder",
    age: 30,
    },
    {
    name: "Robert Lewandowski",
    position: "Forward",
    age: 32,
    },
    {
    name: "Virgil van Dijk",
    position: "Defender",
    age: 30,
    },
    {
    name: "Luka Modric",
    position: "Midfielder",
    age: 35,
    },
    {
    name: "Erling Haaland",
    position: "Forward",
    age: 21,
    },
    ];

  
  return (
    <View style={styles.container}>
      <View style={styles.aling}>
        <FlatList
        data={footballPlayers}
        keyExtractor={(item) => item.id}
        renderItem={({item}) =>(
          <Text style={styles.inp}> {item.name} {item.age} : {item.position}</Text>
        )}

        
        
        />

        <Link href="/" style={styles.titulo}>Volte Para o Inicio</Link>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aling: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop:1,
  },
  inp:{
    padding:5,
    margin:5,
    width:250, 
    height:50,
    backgroundColor:'#ff8800',   
    borderRadius:5,
  },

});

export default Agendar;
