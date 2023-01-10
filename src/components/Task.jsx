import React from 'react'

//CSS
import "./Task.css"



const Task = ({ordenar, deletar, btnCheck, check, status, task, i}) => {


  return (
    <div className='task'>
         <p>{task}</p>
         <div className='icones'>
            <i className="fas fa-solid fa-sort" onClick={()=>ordenar({i, status})}></i>
            {btnCheck && <i onClick={()=>check({i, status})} className="fas fa-check"></i>}
            <i className="fas fa-trash" onClick={()=>deletar({i, status})}></i>
         </div>
    </div>
  )
}

export default Task