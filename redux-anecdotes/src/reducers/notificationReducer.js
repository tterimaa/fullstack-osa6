export const addAnecdoteNotif = (content) => ({
  type: 'ADD_NOTIFICATION',
  data: {
    content
  }  
})

export const voteAnecdoteNotif = (content) => ({
  type: 'VOTE_NOTIFICATION',
  data: {
    content
  }  
}) 

export const emptyNotif = () => ({
  type: 'EMPTY_NOTIFICATION'  
})


const reducer = (state = "", action) => {
  switch (action.type) {
  case 'VOTE_NOTIFICATION':
    return `you voted ${action.data.content}`
  case 'ADD_NOTIFICATION':
    return `you added ${action.data.content}`
  case 'EMPTY_NOTIFICATION':
    return ''
  default:
    return state
  }
}

export default reducer