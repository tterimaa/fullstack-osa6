import React from 'react'
import { voteNote } from '../reducers/anecdoteReducer'
import { voteAnecdoteNotif, emptyNotif } from '../reducers/notificationReducer'

const AnecdoteList = ({ store }) => {
  const { anecdotes, filter } = store.getState()
  const f = new RegExp(filter)
  const anecdotesToShow = anecdotes.filter(a => a.content.toLowerCase().match(f))
  const vote = (anecdote) => {
    store.dispatch(voteNote(anecdote.id))
    store.dispatch(voteAnecdoteNotif(anecdote.content))
    setTimeout(() => store.dispatch(emptyNotif()), 5000)
  }
  return (
    <div>
      {anecdotesToShow.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
