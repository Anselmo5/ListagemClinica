import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 import './Agendar.css'

 
function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [cpf, setCPF] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '' && cpf.trim() !== '' && address.trim() !== '' && age.trim() !== '' && phone.trim() !== '') { 
      const newTask = {
        text: taskText,
        cpf: cpf,
        address: address,
        age: age,
        phone: phone,
      };
      setTasks([...tasks, newTask]);
      setTaskText('');
      setCPF('');
      setAddress('');
      setAge('');
      setPhone('');
    } else {
      alert('Preencha todos os campos obrigatórios.');
    }
  };

  return (
    <div>
      <h1 className='text'>Lista de Tarefas</h1>
      <div className='aling'>
        <input
          type="text"
          placeholder="Paciente"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className='inp'
        />
        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCPF(e.target.value)}
          className='inp'
        />
        <input
          type="text"
          placeholder="Endereço"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className='inp'
        />
        <input
          type="text"
          placeholder="Idade"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className='inp'
        />
        <input
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className='inp'
        />
        <button onClick={addTask} className='btn'>Adicionar</button>
      </div>
      <ul className='form'>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.text} - CPF: {task.cpf} - Endereço: {task.address} - Idade: {task.age} - Telefone: {task.phone}
          </li>
        ))}
      </ul>

          <div className='end'>
              <Link to="/consulta">Consulte Seus Dados</Link>
          </div>
    </div>
  );
}

export default TaskList;
