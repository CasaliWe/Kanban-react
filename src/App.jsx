//CSS
import './App.css'

//Componetes
import Container from './components/Container'
import Add from './components/Add'

//Hooks
import { useState, useEffect } from 'react'








function App() {

  const [fazer, setFazer] = useState([])
  const [fazendo, setFazendo] = useState([])
  const [feito, setFeito] = useState([])

  const [add, setAdd] = useState(false)

  const [taskAnimation, setTaskAnimation] = useState(false)
  const [taskAnimation1, setTaskAnimation1] = useState(false)
  const [taskAnimation2, setTaskAnimation2] = useState(false)
  

  const abrirAdd = ()=>{
         setAdd(true)
  }

  const fecharAdd = ()=>{
         setAdd(false)
  }


  
  //func que salva o texto na box selecionada
  const salvarTexto = ({text, select})=>{
          setAdd(false)

          if(select == 'fazer'){
                setFazer((prev)=>[...prev, text])
          } else if(select == 'fazendo'){
                setFazendo((prev)=>[...prev, text])
          } else if(select == 'feito'){
                setFeito((prev)=>[...prev, text])
          }
  }


  //CHECK
  const check = ({i, status})=>{
         if(status == 'Fazer'){
                setFazendo((prev)=>[...prev, fazer[i]])
                setFazer(fazer.filter((texto)=>{return texto !== fazer[i]}))
         } else  if(status == 'Fazendo'){
                setFeito((prev)=>[...prev, fazendo[i]])
                setFazendo(fazendo.filter((texto)=>{return texto !== fazendo[i]}))
         } 
  }


  //DELETE
  const deletar = ({i, status})=>{
        if(status == 'Fazer'){
            setFazer(fazer.filter((texto)=>{return texto !== fazer[i]}))
        } else if(status == 'Fazendo'){
            setFazendo(fazendo.filter((texto)=>{return texto !== fazendo[i]}))
        } else if(status == 'Feito'){
            setFeito(feito.filter((texto)=>{return texto !== feito[i]}))
        }
  }


  //ORDER
  const ordenar = ({i, status})=>{

          if(status == 'Fazer'){
               var firstText = fazer[i]
               setFazer(fazer.filter((texto)=>{return texto !== fazer[i]}))
               setFazer((prev)=>[firstText, ...prev])
          } else if(status == 'Fazendo'){
               var firstText = fazendo[i]
               setFazendo(fazendo.filter((texto)=>{return texto !== fazendo[i]}))
               setFazendo((prev)=>[firstText, ...prev])
          } else if(status == 'Feito'){
                var firstText = feito[i]
                setFeito(feito.filter((texto)=>{return texto !== feito[i]}))
                setFeito((prev)=>[firstText, ...prev])
          }
  }



//Animação actions task 1
  useEffect(()=>{
      if(fazer.length > 0){
            setTaskAnimation(true)
      }
  },[fazer])

  useEffect(()=>{
      setTimeout(() => {
          setTaskAnimation(false)
      }, 1200);
  },[taskAnimation])



//Animação actions task 2
  useEffect(()=>{
      if(fazendo.length > 0){
           setTaskAnimation1(true)
      }
  },[fazendo])

  useEffect(()=>{
      setTimeout(() => {
          setTaskAnimation1(false)
      }, 1200);
  },[taskAnimation1])


//Animação actions task 3
  useEffect(()=>{
      if(feito.length > 0){
          setTaskAnimation2(true)
      }
  },[feito])

  useEffect(()=>{
      setTimeout(() => {
          setTaskAnimation2(false)
      }, 1200);
  },[taskAnimation2])








  return (
    <div className="App">
          <h1>Projeto Kanban REACT</h1>

          <div className='div_containers'>
             <Container taskAnimation={taskAnimation} h1Bkg='blue' ordenar={ordenar} deletar={deletar} btnCheck={true} check={check} conteudo={fazer} color='rgba(0, 0, 0, 0.397)' status='Fazer'/>
             <Container taskAnimation={taskAnimation1} h1Bkg='orangered' ordenar={ordenar} deletar={deletar} btnCheck={true} check={check} conteudo={fazendo} color='rgba(0, 0, 0, 0.397)'  status='Fazendo'/>
             <Container taskAnimation={taskAnimation2} h1Bkg='rgba(172, 255, 47, 0.747)' ordenar={ordenar} deletar={deletar} btnCheck={false} check={check} conteudo={feito} color='rgba(0, 0, 0, 0.397)'  status='Feito'/>
          </div>

          <button onClick={abrirAdd} className='btnAdd'>+ Adicionar nova tarefa</button>
          
          {add == true && <Add salvarTexto={salvarTexto} fecharAdd={fecharAdd}/>}
    </div>
  )
}

export default App
