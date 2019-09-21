import React from 'react'
import { connect } from 'react-redux'
import { voteNote } from '../reducers/anecdoteReducer'
import { voteAnecdoteNotif, emptyNotif } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const vote = (anecdote) => {
    props.voteNote(anecdote.id)
    props.voteAnecdoteNotif(anecdote.content)
    setTimeout(() => props.emptyNotif(), 5000)
  }
  return (
    <div>
      {props.anecdotes.map(anecdote =>
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

const anecdotesToShow = ({ anecdotes, filter}) => {
  const f = new RegExp(filter)
  return anecdotes.filter(a => a.content.toLowerCase().match(f))
}

const mapStateToProps = (state) => {
  return {
    anecdotes: anecdotesToShow(state),
    filter: state.filter
  }
}

const mapDispatchProps = {
  voteNote,
  voteAnecdoteNotif,
  emptyNotif
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchProps
)(AnecdoteList)
export default ConnectedAnecdotes
