import React from 'react'
import '../../pages/Home/_home.scss'

export default function Podcasts ({title, summary, image, author}) {
    return <div className='content-podcast'>
              <img src={image} alt="img"/>
              <h2>{title}</h2>
              <p>Author: {author}</p>
            </div>
}