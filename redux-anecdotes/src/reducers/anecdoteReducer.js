export const voteNote = (id) => ({
  type: 'VOTE',
  data: {
    id,
  },
})

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  }
}

export const addAnecdote = (data) => {
  return {
    type: 'ADD',
    data,
  }
}

const anecdoteReducer = (state = [], action) => {
  console.log(action)
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
