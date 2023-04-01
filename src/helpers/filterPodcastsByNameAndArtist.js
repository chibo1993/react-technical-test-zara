export const filterPodcastByName = (allPodcast, text) =>{
    const podcastFilter = allPodcast.filter((item) => {
      return (
        item["im:name"].label.toLowerCase().includes(text.toLowerCase()) ||
        item["im:artist"].label.toLowerCase().includes(text.toLowerCase())
      );
    });
   return podcastFilter ?  podcastFilter :  allPodcast;
}