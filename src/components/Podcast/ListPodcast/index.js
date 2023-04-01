import React, {useState} from 'react'
import Podcasts from '../index'
import Spinner from '../../Spinner';
import useFetchPodcastList from '../../../hooks/useFetchPodcastList';
import  {Link } from 'react-router-dom'



export default function ListOfPodcast ({keyword}) {

    const [loading, setLoading] = useState(false)
    const dataPodcast = useFetchPodcastList({keyword});
    if (loading) return <Spinner />
    return dataPodcast.map(({ title, summary, image, author, id}) => 
    <>
        {
                <Link
                    key={id}
                    to={`/podcast/${id}`}
                >
                    <Podcasts
                        key={id}
                        id={id}
                        title={title}
                        summary={summary}
                        image={image}
                        author={author}
                    />
                </Link>
        }
    </>
    )
}