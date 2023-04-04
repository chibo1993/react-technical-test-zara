import React from "react"; 
import {BrowserRouter} from 'react-router-dom'; 
import {Provider} from "react-redux"; 
import {render, screen} from "@testing-library/react"; 
import Header from "./index.js";   
import configureStore from "redux-mock-store";

jest.mock('../Spinner', () => ({  __esModule: true,  default: () => <stub-spinner data-testid="spinner" />, })); 
 const mockStore = configureStore(); 
 const defaultStatePodcast = {  
    podcastList: [  {  
        title: 'THIS LITTLE LIGHT - CADENCE13 AND PARALLEL',  
        image: 'https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/170x170bb.png',  
        author: 'CADENCE13 AND PARALLEL',  
        id: '1678378239',  
        description: 'Hosted by Flea, founding member and bassist of the Red Hot Chili Peppers, This Little Light is a podcast about falling in love with music. Flea interviews musical guests from all genres to discuss the teachers who guided them, the influences that inspired them, and how the lessons they learned as young musicians have shaped their creativity, resilience, and careers. Guests range from legends to rising stars, and include Rick Rubin, Patti Smith, Thundercat Margo Price, and Cynthia Erivo. The podcast is produced by Cadence13 and Parallel, with proceeds benefiting the Silverlake Conservatory of Music, a Los Angeles-based non-profit that Flea co-founded in 2001.'  
    },  ],  
    podcastDetailList: [],  
    podcastEpisodesList: [],  
    podcastDescription: '',  
    lastUpdate: '"2023-04-03T17:12:26.860Z"',  
    isLoading: true };  
    const customRender = (podCastState = {}) => {  
        const store = mockStore({podcast: {...defaultStatePodcast, podCastState}});  
        render(  <Provider store={store}> <BrowserRouter> <Header/> </BrowserRouter> </Provider> ); 
    }  ;   
    describe("Header component", () => {  
        it("renders without crashing", () => {  
            customRender();  
            expect(screen.getByText(/Podcaster/i)).toBeInTheDocument();  
        });  
    });  
    describe("Header component a", () => {  
        it("renders without crashing", () => {  
            customRender();  
            expect(screen.getByText("Podcaster")).toBeInTheDocument();  
        });   
        it("shows spinner when isLoading is true", () => {  
            customRender({isLoading: true});
            expect(screen.getByTestId("spinner")).toBeInTheDocument();  
        });  
    });;