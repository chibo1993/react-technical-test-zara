import React, { useEffect } from "react";
import useFetchPodcastDetail from "../../../hooks/useFetchPodcastDetail";
import DetailsPodcast from "../../../components/Podcast/DetailPodcast";
import Header from "../../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchPodcastDetailsList } from "../../../store/podcast/slice";
import { getPodcastEpisodesList } from "../../../store/podcast/slice";
import { useParams } from "react-router-dom";
import Spinner from "../../../components/Spinner/index";

export default function DetailsPod() {
  let spinner = false;
  const { podcastId } = useParams();
  const dispatch = useDispatch();
  const detailsPodcast = useFetchPodcastDetail(podcastId);
  const episodesPodcast = useSelector(getPodcastEpisodesList);
  useEffect(() => {
    dispatch(fetchPodcastDetailsList(podcastId));
  }, [dispatch, podcastId]);
  return (
    <>{
      <Header />
      }
      {
        <DetailsPodcast
          detailsPodcast={detailsPodcast}
          episodesPodcast={episodesPodcast}
        />
      }
    </>
  );
}
