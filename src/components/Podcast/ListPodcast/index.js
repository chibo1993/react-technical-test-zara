import Podcasts from '../index'
import  {Link } from 'react-router-dom'

export default function ListOfPodcast ({podcastList}) {
    if (!podcastList) return null; 
    return podcastList.map(({ title, description, image, author, id}) => 
                <Link
                    key={id}
                    to={`/podcast/${id}`}
                >
                    <Podcasts
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        image={image}
                        author={author}
                    />
                </Link>
    )
}