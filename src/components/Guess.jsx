import React from 'react'

function Guess({handleChange, handleSubmit, currentVal}) {
  return (
    <div>
        <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="myguess">
                Guess the answer here:
                <input type="text" id='myguess'
                placeholder='Type in your Guess...'
                onChange={handleChange}
                className={`textbox ${currentVal}`} />
            </label>
        </form>

    </div>
  )
}

export default Guess