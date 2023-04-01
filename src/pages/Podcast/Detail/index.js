import useFetchPodcastDetail from "../../../hooks/useFetchPodcastDetail";
import DetailsPodcast from "../../../components/Podcast/DetailPodcast";

export default function DetailsPod() {
   console.log('entra', useFetchPodcastDetail());
   const detailsPodcast = useFetchPodcastDetail()
   console.log('detailsPodcast', detailsPodcast)
   return <DetailsPodcast 
         detailsPodcast={detailsPodcast} 
         />
}