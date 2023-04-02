import PodcastCard from "../DetailPodcast/PodcastCard/index";
import PodcastCountEpisodes from "../DetailPodcast/PodcastCountEpisodes/index";
import PodcastEpisodes from "../DetailPodcast/PodcastEpisodes/index";

export default function DetailsPodcast({ detailsPodcast, episodesPodcast }) {
  return (
    <div className="information_podcast_conatiner">
      <div className="podcast_cart_container">
        <PodcastCard podcastFirstElement={[detailsPodcast]} />
      </div>
      <div className="podcast_episodes_container">
        <PodcastCountEpisodes podcastEpisodesLenght={episodesPodcast.length} />
        <PodcastEpisodes episodesPodcast={episodesPodcast} />
      </div>
    </div>
  );
}
