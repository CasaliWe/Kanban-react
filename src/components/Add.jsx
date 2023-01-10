import React from 'react'

//CSS
import "./Add.css"

//Components
import { useState, useRef, useEffect } from 'react'





const Add = ({salvarTexto, fecharAdd}) => {


  const [text, setText] = useState("")
  const [select, setSelect] = useState("")
  const [alert, setAlert] = useState("")

  const inputRef = useRef()


  const chamarSalvaTexto = ()=>{
        if(text != '' && select != ''){
            salvarTexto({text, select});
            setText("");
            setSelect("");
        } else {
              setAlert("Digite o texto e selecione o bloco!")
        }
  }

  useEffect(()=>{
        inputRef.current.focus() 
  }, [])



  return (
    <div className='Add'>
          <div className='add_box'>
               <h4>Digite sua tarefa!</h4>

               <input ref={inputRef} type="text" onChange={(e)=>setText(e.target.value)} value={text}/>

               <div className='select'>
                     <select onChange={(e)=> setSelect(e.target.value)}>
                           <option value="sem">-- -- </option>
                           <option value="fazer">À fazer</option>
                           <option value="fazendo">Fazendo</option>
                           <option value="feito">Feito</option>
                     </select>
               </div>

               <p className='alert'>{alert}</p>

               <div className='btns'>
                 <button onClick={fecharAdd}>Cancelar</button>
                 <button onClick={chamarSalvaTexto}>Confirmar</button>
               </div>
          </div>
    </div>
  )
}

export default Add