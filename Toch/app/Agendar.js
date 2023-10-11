import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native';

const Agendar = () => {
  const [taks, setTaks] = useState([]);
  const [text, setText] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [idade, setIdade] = useState('');
  const [telefone, setTelefone] = useState('');

  const adicionarPaciente = () => {
    if (text.trim() !== '' && cpf.trim() !== '' && endereco.trim() !== '' && idade.trim() !== '' && telefone.trim() !== '') {
      const novoPaciente = {
        id: taks.length + 1, // Adiciona um ID único para cada paciente
        text: text,
        cpf: cpf,
        telefone: telefone,
        endereco: endereco,
        idade: idade
      };
      setTaks([...taks, novoPaciente]);
      setText('');
      setCpf('');
      setTelefone('');
      setIdade('');
      setEndereco('');
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
            placeholder='PACIENTE'
            value={text}
            onChangeText={text => setText(text)}
            style={styles.inp}
          />

          <TextInput
            placeholder='CPF'
            value={cpf}
            onChangeText={cpf => setCpf(cpf)}
            style={styles.inp}
          />

          <TextInput
            placeholder='ENDEREÇO'
            value={endereco}
            onChangeText={endereco => setEndereco(endereco)}
            style={styles.inp}
          />

          <TextInput
            placeholder='IDADE'
            value={idade}
            onChangeText={idade => setIdade(idade)}
            style={styles.inp}
          />

          <TextInput
            placeholder='TELEFONE'
            value={telefone}
            onChangeText={telefone => setTelefone(telefone)} //adicionado, (onchangeTexte fornece como um argumento uma string quando a uma chamada(função))
            style={styles.inp}
          />

          <TouchableOpacity onPress={adicionarPaciente} style={styles.btn}>
            <Text style={styles.text}>Adicionar</Text>
          </TouchableOpacity>

          {/* Listando os itens com FlatList */}
          <FlatList
            data={taks}
            keyExtractor={(item) => item.id.toString()} // Use item.id como chave
            renderItem={({ item }) => (
              <View style={styles.pacienteItem}>
                <Text>Nome: {item.text}</Text>
                <Text>CPF: {item.cpf}</Text>
                <Text>Endereço: {item.endereco}</Text>
                <Text>Idade: {item.idade}</Text>
                <Text>Telefone: {item.telefone}</Text>
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
    marginTop:150
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
      backgroundColor:'#131313',   
      borderRadius:5,  
  }, 
  text:{
    color:'#fff',
    textAlign:'center',
    marginTop:4,
  },
  inp:{
    padding:10,
    margin:10,
    width:300, 
    height:50,
    backgroundColor:'#ff8800',   
    borderRadius:5,
  },

});

export default Agendar;
