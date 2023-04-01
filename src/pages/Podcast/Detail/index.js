import useFetchPodcastDetail from "../../../hooks/useFetchPodcastDetail";
import DetailsPodcast from "../../../components/Podcast/DetailPodcast";

export default function DetailsPod() {
   const detailsPodcast = useFetchPodcastDetail()
   return <DetailsPodcast 
         detailsPodcast={detailsPodcast} 
         />
}