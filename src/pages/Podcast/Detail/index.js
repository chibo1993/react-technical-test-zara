import useFetchPodcastDetail from "../../../hooks/useFetchPodcastDetail";
import DetailsPodcast from "../../../components/Podcast/DetailPodcast";
import Header from "../../../components/Header";
export default function DetailsPod() {
   const detailsPodcast = useFetchPodcastDetail()
   console.log('ADIOS', detailsPodcast);
   return (
      <>
      <Header />
      <DetailsPodcast 
            detailsPodcast={detailsPodcast} 
            />
      </>
      )
}