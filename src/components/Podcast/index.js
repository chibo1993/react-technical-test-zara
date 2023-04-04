import React from 'react'
import '../../pages/Podcast/Home/_home.scss'

export default function Podcasts ({title, image, author, description}) {
    return <div className='content-podcast'>
              <img src={image} alt="img"/>
              <h3>{title}</h3>
              <p>Author: {author}</p>
            </div>
}