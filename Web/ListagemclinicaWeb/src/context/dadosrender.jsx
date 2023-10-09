import { createContext,useState } from "react";

export const dadosrender = createContext();

export const dadosProider =  ({children}) =>{
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

        return(
            <dadosrender.Provider value={{tasks,taskText,cpf,address,age,phone}}>
                {children}
            </dadosrender.Provider>
        )
      
}
}