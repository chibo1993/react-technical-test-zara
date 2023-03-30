export default function getPodcastList() {
    const apiURL = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const data = response.feed.entry;
      const podcasts = data.map(podcast => {
        const title = podcast.title.label.toUpperCase()
        const summary = podcast.summary
        const image = podcast['im:image'][2].label
        const author = podcast['im:artist'].label.toUpperCase()
        const id = podcast['id'].label
        return {title, summary, image, author, id}
      })
      console.log('podcasts', podcasts)
      return podcasts;
    })
}