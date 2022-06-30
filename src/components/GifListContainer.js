import React, {useState, useEffect} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

function GifListContainer() {
const [giphy, setGiphy]=useState([])
const [inputGiphy, setInputGiphy]=useState("dolphin")


useEffect(()=>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${inputGiphy}&api_key=AiEyS1qXzEsjAFQ438FCYVeF8FzqXyEA&rating=g`)
    .then((res)=>res.json())
    .then(({data})=>{
      const newGiphy = data.slice(0,3).map((giphy)=>{ return {url: giphy.images.original.url}} )
        
        setGiphy(newGiphy)
    })
},[inputGiphy])
    function onFormSubmit(inputData){
        // console.log("form handling")
       
        setInputGiphy(inputData)
           
    }

  return (
    <div>
        <GifSearch onFormSubmit={onFormSubmit}/>
        <GifList giphy={giphy}/>
    </div>
  )
}

export default GifListContainer