import EpisodePodcastComp from "../../../components/Podcast/EpisodePodcast/index";
import { getPodcastDetailsList } from "../../../store/podcast/slice";
import { useSelector } from "react-redux";
import useFilterPodcastEpisode from "../../../hooks/useFilterPodcastEpisode";
import Header from "../../../components/Header";

export default function EpisodePodcast() {
  const filterPodcastEpisode = useFilterPodcastEpisode();
  return (
    <>
      {<Header />}
      {
        <EpisodePodcastComp
          podcastDetailsList={useSelector(getPodcastDetailsList)}
          podcastListEpisodes={filterPodcastEpisode}
        />
      }
    </>
  );
}
