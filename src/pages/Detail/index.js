import getPodcastDetails from "../../services/getPodcastDetails";

export default function DetailsPodcast() {
   const id = '1678378239'
return getPodcastDetails({id});
}