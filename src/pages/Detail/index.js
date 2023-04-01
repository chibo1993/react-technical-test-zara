import useFetchPodcastDetail from "../../hooks/useFetchPodcastDetail";

export default function DetailsPodcast() {
   console.log('entra', useFetchPodcastDetail());
   const detailsPodcast = useFetchPodcastDetail()
   console.log('detailsPodcast', detailsPodcast)
return detailsPodcast.map(({artistName, artworkUrl160, trackName, description, trackId}) =>
   <>
   {
      <div className='content__details__podcast'>
         <div className="content_podcasts_values">
         <p>{artistName} <br />
      by </p>
      <img src={artworkUrl160} />
      <p>{trackName}</p>
      <p>{description}</p>
      <p>{artistName}</p>
      <p>{artistName}</p>
         </div>
      
   </div>
   }
   </>
   )
}