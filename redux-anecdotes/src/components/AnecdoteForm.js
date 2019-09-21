import React from 'react'
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { addAnecdoteNotif, emptyNotif } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const add = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    props.addAnecdote(content)
    props.addAnecdoteNotif(content)
    setTimeout(() => props.emptyNotif(), 5000)
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