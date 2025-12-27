import React from 'react'

const Washroom = (props) => {
    const color = props.user == 'Male'?'#0000ff':'#b1003c';
  return (
    <div style={{ background:color}} className='wash'>
      {props.user} Washroom
    </div>
  )
}

export default Washroom
