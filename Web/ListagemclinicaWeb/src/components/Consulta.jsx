import React, { useContext } from 'react'
import { dadosrender } from '../context/dadosrender'
const Consulta  = () => {

  const [tasks,address,taskText,age,cpf,phone] = useContext(dadosrender);
  c

  return (
    <div>
      <p> {cpf}</p>
    </div>
  )
}

export default Consulta
