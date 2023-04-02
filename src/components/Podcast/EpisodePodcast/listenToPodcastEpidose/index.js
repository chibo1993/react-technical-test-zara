import React from "react";
import { useTable } from "react-table";
import { Link, useParams } from "react-router-dom"

export default function listenToPodcastEpisode({ episodesPodcast }) {
  console.log('episodesPodcast', episodesPodcast)
  return episodesPodcast.map(({trackName, shortDescription, episodeUrl}) => {
    return <div className="container_player_episode">
      <h1>{trackName}</h1>
      <div
        className="__player_tex_italic"
        dangerouslySetInnerHTML={{ __html: shortDescription }}
      />
      <audio name="audio-source"  controls className="__player_podcast">
        <source src={episodeUrl} type="audio/mp3" />
      </audio>
    </div>
  });
  
}
