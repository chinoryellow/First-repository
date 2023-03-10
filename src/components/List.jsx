import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Item from './Item'

const List = (props) => {
  const { todos, completeTodo, deleteTodo } = props

  return (
    <ul className='mt-4 pt-4 '>
      <TransitionGroup>
        {
          todos.map((todo, index) => {
            return (
              <CSSTransition key={todo.id} timeout={300} nodeRef={todo.nodeRef}>
                <div className='item' ref={todo.nodeRef}>
                  <Item todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
                </div>
              </CSSTransition>
            )
          })
        }
      </TransitionGroup>
    </ul>
  )
}

export default List