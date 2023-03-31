import React, {useEffect, useState} from 'react'
import Podcasts from './Podcasts'
import getPodcastList from '../services/getPodcastList';

export default function ListOfPodcast ({keyword}) {

    const [podcasts, setPodcasts] = useState([])
    useEffect(function () {
        getPodcastList()
        .then(pod =>
          keyword === '' ? setPodcasts(pod) : 
          setPodcasts(pod.filter(pod => pod.title.includes(keyword.toUpperCase())))
        );
      }, [keyword])
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