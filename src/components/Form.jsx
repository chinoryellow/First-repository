import React, { useState } from 'react'

const Form = (props) => {
    const { addTodo } = props
    const [value, setValue] = useState('')

    function onSubmit (event) {
        event.preventDefault()
        if(value !== '' && !!value.trim()){
            addTodo(value)
        }
        setValue('')
    }

    return (
        <form onSubmit={onSubmit} className=' flex p-2 bg-white/10 rounded-md'>
            <input value={value} onChange={(event) => setValue(event.target.value)} type="text" className='w-full bg-transparent rounded-full outline-none text-white' placeholder='Todo Title' />
        </form>
    )
}

export default Form