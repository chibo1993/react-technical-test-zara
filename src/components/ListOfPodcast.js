import React from 'react'
import Podcasts from './Podcasts'

export default function ListOfPodcast ({podcasts}) {
 // [] es la dependencia de las veces que se va a repetir.

    return podcasts.map(({ title, summary, image, author, id}) => 
    <>
        {
        <Podcasts
            id={id}
            title={title}
            summary={summary}
            image={image}
            author={author}
        />
        }
    </>
)
}