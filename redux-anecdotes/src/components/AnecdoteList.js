import React from 'react'
import { connect } from 'react-redux'
import { voteNote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const vote = (anecdote) => {
    props.voteNote(anecdote)
    props.setNotification(`you voted ${anecdote.content}`, 10)
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
  setNotification
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchProps
)(AnecdoteList)
export default ConnectedAnecdotes
