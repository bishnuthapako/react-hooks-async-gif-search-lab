import React, {useState} from 'react'

function GifSearch({onFormSubmit}) {
    // The `GifSearch` component will render a form that receives the user input
    // for the Giphy search. The text input should be a _controlled component_ that
    // stores the value of the input in its component state and renders the DOM
    // accordingly. The React component is always in charge of what the DOM looks like.

    const [inputHandle, setInputHandle]=useState("")

    function handleFormSubmit(e){
        e.preventDefault()

        onFormSubmit(inputHandle)

    }

  return (
    <form onSubmit={handleFormSubmit}>
        <label>Enter a search term:</label>
        <input type="text" value={inputHandle} onChange={(e)=>setInputHandle(e.target.value)}/>
        <input type="submit"></input>
    </form>
  )
}

export default GifSearch