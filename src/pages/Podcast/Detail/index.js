import React, { useEffect } from "react";
import useFetchPodcastDetail from "../../../hooks/useFetchPodcastDetail";
import DetailsPodcast from "../../../components/Podcast/DetailPodcast";
import Header from "../../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchPodcastDetailsList, getPodcastEpisodesList, getIsLoading } from "../../../store/podcast/slice";
import { useParams } from "react-router-dom";

export default function DetailsPod() {
  const { podcastId } = useParams();
  const dispatch = useDispatch();
  const detailsPodcast = useFetchPodcastDetail(podcastId);
  const episodesPodcast = useSelector(getPodcastEpisodesList);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchPodcastDetailsList(podcastId));
  }, [dispatch, podcastId]);

  return (
    <div className={isLoading&&'--loading'}>{
      <Header />
      }
      {
        <DetailsPodcast
          detailsPodcast={detailsPodcast}
          episodesPodcast={episodesPodcast}
        />
      }
    </div>
  );
}
