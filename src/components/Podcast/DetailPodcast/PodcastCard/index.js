import { useNavigate } from "react-router-dom";
import { getPodcastDescription } from "../../../../store/podcast/slice";
import { useSelector } from "react-redux";

export default function PodcastCard({ podcastFirstElement }) {
  const navigate = useNavigate();
  const backButton = () => {
    navigate(-1);
  };
  const description = useSelector(getPodcastDescription)
  if (!podcastFirstElement) return null
  return podcastFirstElement.map(
    ({ artistName, artworkUrl600, trackName }) => (
      <div className="content_podcast_card_value">
        <div className="img_container">
          <img onClick={backButton} src={artworkUrl600} alt="artwork" />
        </div>
        <div className="trackname_container">
            <span onClick={backButton} className="bold">{trackName}</span>
            <br />
            <span>by {artistName}</span> 
        </div>
        <div className="description_container">
          <span className="bold">Description:</span><br></br>
          <p>{description}</p>
        </div>
      </div>
    )
  );
}
