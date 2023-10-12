import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native';


const Agendar = () => {
  const [products, setProducts] = useState([])

  const url =  "http://localhost:3000/jogadores"
  
  useEffect(() =>{
     async function fecthData(){
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    }

    fecthData()
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.aling}>
        <FlatList
        data={products}
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
