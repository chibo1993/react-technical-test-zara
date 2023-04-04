import React from "react";

export default function listenToPodcastEpisode({ episodesPodcast }) {
  return episodesPodcast.map(({trackName, shortDescription, episodeUrl}, index) => {
    return <div key={index} className="container_player_episode">
      <h2>{trackName}</h2>
      <div
        className="__player_tex_italic"
        dangerouslySetInnerHTML={{ __html: shortDescription }}
      />
      <audio name="audio-source"  controls className="__player_podcast" data-testid="audio-element">
        <source src={episodeUrl} type="audio/mp3" />
      </audio>
    </div>
  });
  
}
