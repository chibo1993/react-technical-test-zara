import Podcasts from '../index'
import  {Link } from 'react-router-dom'



export default function ListOfPodcast ({podcastList}) {
    if (!podcastList) return null; 
    return podcastList.map(({ title, summary, image, author, id}) => 
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
    )
}