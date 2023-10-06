import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native';
import { Link } from "expo-router";
import { useState,useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { log } from 'react-native-reanimated';



export default function Agendar() {
    const [dados, setDados] = useState([]);

   
    const dadosIniciais = [
        { id: '1', nome: 'João', idade: 25, endereco: 'Rua A, 123' },
        { id: '2', nome: 'Maria', idade: 30, endereco: 'Rua B, 456' },
        { id: '3', nome: 'Pedro', idade: 22, endereco: 'Rua C, 789' },
        { id: '4', nome: 'Ana', idade: 28, endereco: 'Rua D, 1011' },
        { id: '5', nome: 'Luiza', idade: 35, endereco: 'Rua E, 1213' },
        { id: '6', nome: 'Lucas', idade: 29, endereco: 'Rua F, 1415' },
        { id: '7', nome: 'Mariana', idade: 27, endereco: 'Rua G, 1617' },
        { id: '8', nome: 'Rafael', idade: 26, endereco: 'Rua H, 1819' },
        { id: '9', nome: 'Juliana', idade: 31, endereco: 'Rua I, 2021' },
        { id: '10', nome: 'Gustavo', idade: 24, endereco: 'Rua J, 2223' },
       
      ];  
      
      console.log( dadosIniciais[0]);
      console.log( dadosIniciais[1]);
      console.log( dadosIniciais[2]);
      console.log( dadosIniciais[3]);
      console.log( dadosIniciais[4]);
      console.log( dadosIniciais[5]);
      console.log( dadosIniciais[6]);
      console.log( dadosIniciais[7]);
      console.log( dadosIniciais[8]);
      console.log( dadosIniciais[9]);
    
      useEffect(() => {
        setDados(dadosIniciais);

      }, []);



  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agendar</Text>

        <View style={styles.model}> 
                <TextInput placeholder='Adicionar' style={styles.inp}/>
                <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.form}>{item.nome} {item.idade} {item.endereco}</Text>
     

        )}
      />


                <TouchableOpacity style={styles.btn}>
                    <View>
                        <Text style={styles.text}>+</Text>
                    </View>
                </TouchableOpacity>


        </View>



            <TouchableOpacity style={styles.btn}>
                    <View>
                        <Text style={styles.text}>Alterar</Text>
                    </View>
                </TouchableOpacity>




      <StatusBar style="auto" />
      <Link href="/Consulta">Consulta</Link>
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
  model:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',

  },

  inp:{
    textAlign:"left",
    color:"#fff",
    marginTop:10,
    padding:10,
    backgroundColor:"#FF7A00",
    borderRadius:10,
    width:332,
    height:42,

  },

  btn:{
    backgroundColor:"#FF7A00",
    borderRadius:5,
    width:48,
    height:41,
    textAlign:"center",
    marginLeft:400,
    bottom:505,
    margin:5,
  },

  text:{
    marginTop:12,
    color:"#fff"
  },

  form:{
    backgroundColor:"#BC0D0D",
    padding:10,
    margin:5,
    width:310,
    borderRadius:5,
    color:"#fff"
    
  }
});