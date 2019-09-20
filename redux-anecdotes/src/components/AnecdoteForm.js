import React from 'react'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { addAnecdoteNotif, emptyNotif } from '../reducers/notificationReducer'

const AnecdoteForm = ({ store }) => {

  const add = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    store.dispatch(addAnecdote(content))
    store.dispatch(addAnecdoteNotif(content))
    setTimeout(() => store.dispatch(emptyNotif()), 5000)
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