import useFetchPodcastDetail from "../../hooks/useFetchPodcastDetail";

export default function DetailsPodcast() {
   console.log('entra', useFetchPodcastDetail());
   const detailsPodcast = useFetchPodcastDetail()
   console.log('detailsPodcast', detailsPodcast)
return detailsPodcast.map(({country}) =>
   <>
   {
   <p>{country}</p>
   }
   </>
   )
}