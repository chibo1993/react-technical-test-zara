import PodcastCard from "../DetailPodcast/PodcastCard/index";
import PodcastCountEpisodes from '../DetailPodcast/PodcastCountEpisodes/index'
export default function DetailsPodcast({ detailsPodcast }) {
    console.log('hola', detailsPodcast)
  return (
    <div className="information_podcast_conatiner">
      <PodcastCard podcastFirstElement={[detailsPodcast[0]]} />
      <PodcastCountEpisodes podcastEpisodes={detailsPodcast.length-1}/>
    </div>
  );
  //<div padre>
  // componente coutn episode
  // componente card
  // componente lista de episodios
  //</div>
}
