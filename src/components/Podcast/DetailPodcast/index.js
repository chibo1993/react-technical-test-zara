import PodcastCard from "../DetailPodcast/PodcastCard/index";
import PodcastCountEpisodes from "../DetailPodcast/PodcastCountEpisodes/index";
import PodcastEpisodes from "../DetailPodcast/PodcastEpisodes/index";

export default function DetailsPodcast({ detailsPodcast, episodesPodcast }) {
  return (
    <div className="information_podcast_conatiner">
        <PodcastCard podcastFirstElement={[detailsPodcast]} />
        <PodcastCountEpisodes podcastEpisodesLenght={episodesPodcast.length} />
        <PodcastEpisodes episodesPodcast={episodesPodcast} />
    </div>
  );
}
