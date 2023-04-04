import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen} from '@testing-library/react';
import ListenToPodcastEpidose from './index'


const mockPodcastList = [
    {
      trackName: 'Episode 614 | "Strike 1"',
      shortDescription: 'Description 1',
      episodeUrl: 'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_614_Edit.mp3?dest-id=2422538',
    },
    {
      trackName: 'Episode 613 | "Stand In It',
      shortDescription: 'Dwescription 2',
      episodeUrl: 'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_613.mp3?dest-id=2422538',
    },
  ];
  const customRender = (podCastState = {}) => {  
    render(<BrowserRouter> <ListenToPodcastEpidose episodesPodcast={mockPodcastList}/> </BrowserRouter>); 
}  ;  

describe('ListenToPodcastEpidose component', () => { 
  it('renders correctly first trackname', () => {
    customRender(); 
    expect(screen.getByText(/^Episode 614 | "Strike 1$/i)).toBeInTheDocument();
  });
  it('renders correctly second trackname', () => {
    customRender(); 
    expect(screen.getByText(/^Episode 613 | "Strike 1$/i)).toBeInTheDocument();
    
  });
})