import PodcastCard from "../DetailPodcast/PodcastCard/index";
import ListenToPodcastEpisode from "./listenToPodcastEpidose/index";

export default function DetailsPodcast({ podcastDetailsList, podcastListEpisodes }) {
  return (
    <div className="information_podcast_conatiner">
        <PodcastCard podcastFirstElement={[podcastDetailsList]} />
        <ListenToPodcastEpisode episodesPodcast={podcastListEpisodes} />
    </div>
  );
}