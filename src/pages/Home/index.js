import React, {useState} from 'react'
import ListOfPodcast from '../../components/ListOfPodcast';
import SearchFilter from '../../components/SearchFilter'
import SearchChip from '../../components/SearchChip'
import useFetchPodcastList from '../../hooks/useFetchPodcastList';

export default function Home() {
 
  const dataPodcastList = useFetchPodcastList();
  const [keyword, setKeyword] = useState('')
  console.log(document.getElementById('SearchPodcasts'));

  const onSearcherhandlerChange = evt => {   
    console.log('evt', evt)
    setKeyword(evt);
  }
    return (
        <>
        {
          <section className="App-header">
            <h1>Podcaster</h1>
              <div className='header__searcher__container'>
               <SearchChip 
                numberOfPodcast={dataPodcastList.length}
               />
                <SearchFilter 
                  keyword={keyword}
                  onSearcher={onSearcherhandlerChange}  
                /> 
              </div>
            <div className='Podcasts__container'>
              <ListOfPodcast  
                podcasts={dataPodcastList}
              />
            </div>
          </section>
          }
        </>
      );
}