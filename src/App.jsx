import React, { createRef, useState } from 'react'
import Form from './components/Form'
import List from './components/List'
import {BsFillSunFill} from 'react-icons/bs'

const App = () => {
  const [todos, setTodos] = useState([{
    id: 1,
    isCompleted: true,
    title: 'Lorem ipsum ....'
  }, 
  {
    id: 2, 
    isCompleted: false,
    title: 'Lorem ipsum ....'
  },
  {
    id: 3, 
    isCompleted: false,
    title: 'Lorem ipsum ....'
  }, 
  {
    id: 4, 
    isCompleted: false,
    title: 'Lorem ipsum ....'
  },
  {
    id: 5, 
    isCompleted: false,
    title: 'Lorem ipsum ....'
  },
  {
    id: 6, 
    isCompleted: false,
    title: 'Lorem ipsum ....'
  },])

  function addTodo(title){
    const todo = {
      id: Date.now(),
      isCompleted: false,
      nodeRef: createRef(null),
      title,
    }
    setTodos([...todos, todo])
  }

  function completeTodo(id){
    setTodos(todos.map((todo) => {
      if(todo.id === id){
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }
      return todo
    }))
  }

  function deleteTodo(id){
    setTodos(todos.filter((todo) => {
      if(todo.id !== id){
        return todo
      }
    }))
  }

  return (
    <div className='h-screen flex justify-center  bg-gray-900 ' >
      <img className='w-[100%] h-[400px] flex justify-center' src="https://t3.ftcdn.net/jpg/04/52/52/12/360_F_452521243_7NGV2AjTeVhEwXkabCyeNsHeWqItcxO6.webp" alt="" />
      <div className="w-1/3 mx-auto absolute pt-[20vh]"> <BsFillSunFill className=' text-white flex ml-[600px] w-[50px] h-[25px] '/>
        <h1 className='text-4xl text-white   py-4  border-slate-700 mb-4'>T O D O </h1> 
       
        <Form addTodo={addTodo}/>
        <List completeTodo={completeTodo} deleteTodo={deleteTodo} todos={todos}/>
        <div>
          <ul  className={` p-2 bg-white/5  flex justify-center text-white gap-[40px] `} >
            <li>5 items left</li>
            <li>All Activate Complete</li>
            <li>Clear completed</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default App