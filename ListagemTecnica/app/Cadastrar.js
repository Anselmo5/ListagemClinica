import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,FlatList,TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Link } from "expo-router";

export default function Consulta() {
  const [taks, setTaks] = useState([]);
  const [text, setText] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [idade, setIdade] = useState('');
  const [telefone, setTelefone] = useState('');

  const adicionarTreinador = () => {
    if (text.trim() !== '' && cpf.trim() !== '' && endereco.trim() !== '' && idade.trim() !== '' && telefone.trim() !== '') {
      const novoTreinador = {
        id: taks.length + 1, // Adiciona um ID único para cada paciente
        text: text,
        cpf: cpf,
        telefone: telefone,
        endereco: endereco,
        idade: idade,
      };
      setTaks([...taks, novoTreinador]);
      setText('');
      setCpf('');
      setTelefone('');
      setIdade('');
      setEndereco('');
      alert('O Seu Treinador Foi Cadastrado')
    } else {
      alert('Preencha todos os campos');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.aling}>
        <Text style={styles.titulo}>Agendamento de Pacientes</Text>
        <View style={styles.inpaling}>
          <TextInput
            placeholder='Nome do técnico'
            value={text}
            onChangeText={text => setText(text)}
            style={styles.inp}
          />

          <TextInput
            placeholder='Idade do técnico'
            value={cpf}
            onChangeText={cpf => setCpf(cpf)}
            style={styles.inp}
          />

          <TextInput
            placeholder='Nacionalidade do técnico'
            value={endereco}
            onChangeText={endereco => setEndereco(endereco)}
            style={styles.inp}
          />

          <TextInput
            placeholder='Experiência do técnico (em anos)'
            value={idade}
            onChangeText={idade => setIdade(idade)}
            style={styles.inp}
          />

          <TextInput
            placeholder='Telefone Treinador'
            value={telefone}
            onChangeText={telefone => setTelefone(telefone)} //adicionado, (onchangeTexte fornece como um argumento uma string quando a uma chamada(função))
            style={styles.inp}
          />

          <TouchableOpacity onPress={adicionarTreinador} style={styles.btn}>
            <Text style={styles.text}>Adicionar</Text>
          </TouchableOpacity>

          <Link href="/listagemJogadores" style={styles.titulo}>Consulte Sua Lista De Jogadores</Link>

          {/* Listando os itens com FlatList */}
          <FlatList
            data={taks}
            keyExtractor={(item) => item.id.toString()} // Use item.id como chave
            renderItem={({ item }) => (
              <View style={styles.pacienteItem}>
                <Text style={styles.textrender}>Nome: {item.text}</Text>
                <Text style={styles.textrender}>CPF: {item.cpf}</Text>
                <Text style={styles.textrender}>Endereço: {item.endereco}</Text>
                <Text style={styles.textrender}>Idade: {item.idade}</Text>
                <Text style={styles.textrender}>Telefone: {item.telefone}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontWeight: 'bold',
    fontSize: 17,
    color:'#fff',
    textAlign:'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#131313',
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
  pacienteItem: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  btn:{

      padding:10,
      margin:10,
      width:300, 
      height:50,
      backgroundColor:'#fff',   
      borderRadius:5,  
  }, 
  text:{
    color:'#000000',
    textAlign:'center',
    marginTop:8,
  },
  inp:{
    padding:10,
    margin:10,
    width:300, 
    height:50,
    backgroundColor:'#7e087e',   
    borderRadius:5,
    color:'#fff'
  },
  textrender:{
    color:'#fff'
  }
});