
export default function SearcherChip ({numberOfPodcast}) {
    console.log('numberOfPodcast', numberOfPodcast);
    return <>
         <input id="SearchChip" type="number" size={35} height={20} value={numberOfPodcast} readOnly/>
    </>

}