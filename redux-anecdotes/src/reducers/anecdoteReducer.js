import anecdoteService from '../services/anecdotes'

export const voteNote = anecdote => {
  return async dispatch => {
    const updated = await anecdoteService.vote(anecdote)
    dispatch({
      type: 'VOTE',
      data: updated
    })
  }
} 

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export const addAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'ADD',
      data: newAnecdote
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  let stateToReturn = []
  switch (action.type) {
  case 'VOTE':
    stateToReturn = state.map((anecdote) => (anecdote.id === action.data.id ? { ...anecdote, votes: anecdote.votes + 1 } : anecdote))
    break
  case 'ADD':
    stateToReturn = [...state, action.data]
    break
  case 'INIT_ANECDOTES':
    stateToReturn = action.data
    break
  default:
    stateToReturn = state
  }
  return stateToReturn.sort((a, b) => b.votes - a.votes)
}

export default anecdoteReducer
