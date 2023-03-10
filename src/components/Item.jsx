import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

const Item = (props) => {
  const {todo, completeTodo, deleteTodo, refs} = props

  return (
    <li ref={refs} className={` p-2 bg-white/5  flex justify-between  `}>
      <div>
        <input checked={todo.isCompleted} type="checkbox" onChange={() => completeTodo(todo.id)}/>
        <span className={`text-white ml-10  ${todo.isCompleted ? 'line-through text-white/40' : ''} `}>{todo.title}</span>
      </div>
      <button onClick={() => deleteTodo(todo.id)} className='rounded-full px-2 py-4 text-white '><AiOutlineClose/></button>
    </li>
  )
}

export default Item