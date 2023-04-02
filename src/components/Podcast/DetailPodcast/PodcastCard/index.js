import { useNavigate } from "react-router-dom";

export default function PodcastCard({ podcastFirstElement }) {
  const navigate = useNavigate();
  const backButton = () => {
    navigate(-1);
  };

  console.log("podcastFirstElement111", podcastFirstElement);
  if (!podcastFirstElement) return null
  return podcastFirstElement.map(
    ({ artistName, description, artworkUrl600, trackName }) => (
      <div className="content_podcast_card_value">
        <div className="img_container">
          <img onClick={backButton} src={artworkUrl600} alt="artwork" />
        </div>
        <div className="trackname_container">
            <span onClick={backButton} className="bold">{trackName}</span>
            <br />
            <span>{trackName}</span> 
        </div>
        <div className="description_container">
          <span className="bold">Description:</span><br></br>
          <p>A podcast where musicians take apart their songs, and piece by piece, tall the story of how they were made</p>
        </div>
      </div>
    )
  );
}
