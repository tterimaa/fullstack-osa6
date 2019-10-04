export const setNotification = (content, time) => {
  const timeInMs = time * 1000
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIF',
      data: {
        content
      }
    })
    setTimeout(() => {
      dispatch({
        type: 'EMPTY_NOTIFICATION'
      })
    }, timeInMs)
  }
}

const reducer = (state = "", action) => {
  switch (action.type) {
  case 'SET_NOTIF':
    return action.data.content
  case 'EMPTY_NOTIFICATION':
    return ''
  default:
    return state
  }
}

export default reducer