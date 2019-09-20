import React from 'react'

const Notification = ({ store }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const notification = store.getState().notification

  return (
    <>
      {notification ?
        <div style={style}>
          {notification}
        </div>
        : <></>}
    </>
  )
}

export default Notification