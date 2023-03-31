import React from 'react'
import Podcasts from './Podcasts'

export default function ListOfPodcast ({podcasts}) {

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