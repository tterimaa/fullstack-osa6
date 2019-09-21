import React from 'react'
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { addAnecdoteNotif, emptyNotif } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {

  const add = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    props.addAnecdote(newAnecdote)
    props.addAnecdoteNotif(newAnecdote.content)
    setTimeout(() => props.emptyNotif(), 5000)
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

const mapDispatchProps = {
  addAnecdote,
  addAnecdoteNotif,
  emptyNotif
}

const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchProps
)(AnecdoteForm)
export default ConnectedAnecdoteForm