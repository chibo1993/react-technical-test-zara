import React, {useEffect, useState} from 'react'
import Podcasts from '../index'
import getPodcastList from '../../../services/getPodcastList';
import Spinner from '../../Spinner';



export default function ListOfPodcast ({keyword}) {

    const [loading, setLoading] = useState(false)
    const [podcasts, setPodcasts] = useState([])
    useEffect(function () {
        setLoading(true)
        getPodcastList()
        .then(pod =>
          keyword === '' ? setPodcasts(pod) : 
          setPodcasts(pod.filter(pod => pod.title.includes(keyword.toUpperCase())))
        );
        setLoading(false)
      }, [keyword])
      console.log('glug', podcasts)
      console.log(loading)
    if (loading) return <Spinner />
    return podcasts.map(({ title, summary, image, author, id}) => 
    <>
        {
            
            <Podcasts
                key={id}
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