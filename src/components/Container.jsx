import React from 'react'

//CSS
import "./Container.css"


//Componetes
import Task from './Task'



const Container = ({taskAnimation, h1Bkg, ordenar, deletar, btnCheck, check, conteudo, color, status}) => {



  return (
    <div className='container' style={{backgroundColor: `${color}`}}>
          <h4 style={{backgroundColor: `${h1Bkg}`}}>{status == 'Fazer' ? 'À Fazer' : `${status}`}</h4>

          {conteudo.length < 1 && <p className='vazio'>Sem tarefas!</p>} 
          
          {taskAnimation == true ? (<p className='animaTask'></p>) : (<>{conteudo.map((task, i)=>(<Task ordenar={ordenar} deletar={deletar} btnCheck={btnCheck} check={check} status={status} key={i} task={task} i={i}/>))}</>)}
    </div>
  )
}

export default Container