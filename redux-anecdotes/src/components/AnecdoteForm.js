import React from 'react'
import { addAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = ({ store }) => {
    
    const add = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        store.dispatch(addAnecdote(content))
        event.target.anecdote.value = ''
    }
    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={add}>
              <div>
                  <input name='anecdote' />  
              </div>
              <button type='submit'>create</button>
            </form>
        </div>
    )
}


export default AnecdoteForm