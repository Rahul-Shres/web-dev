import React from 'react'

const Message = (props) => {
  return (
    <div>
        
        <p>You have read <strong>{props.count}</strong> advice</p>
        
    </div>
  )
}

export default Message