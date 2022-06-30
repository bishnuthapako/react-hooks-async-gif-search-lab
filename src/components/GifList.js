import React from 'react'

function GifList({giphy}) {

  return (
    <ul>

        {giphy.map(({url, index})=><li key={index}><img src={url} /></li>)}
    </ul>
  )
}

export default GifList