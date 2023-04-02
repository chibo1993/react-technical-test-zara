export default function PodcastCard({ podcastFirstElement }) {
  console.log("podcastFirstElement111", podcastFirstElement);
  if (!podcastFirstElement) return null
  return podcastFirstElement.map(
    ({ artistName, description, artworkUrl100, trackName }) => (
      <div className="content_podcast_card_value">
        <div className="img_container">
          <img src={artworkUrl100} alt="artwork" />
        </div>
        <div className="trackname_container">
          <p className="bold">
            {trackName}
            <br />
          </p>
        </div>
        <div className="description_container">
          <p>
            Description <br /> {trackName}
          </p>
        </div>
      </div>
    )
  );
}
