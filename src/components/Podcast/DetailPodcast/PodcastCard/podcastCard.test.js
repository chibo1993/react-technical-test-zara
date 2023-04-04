import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import PodcastCard from "../PodcastCard/index";

const defaultStatePodcast = [{
  artistName: "THIS LITTLE LIGHT - CADENCE13 AND PARALLEL",
  artworkUrl600:
    "https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/170x170bb.png",
  trackName: "CADENCE13 AND PARALLEL",
  description:
    "Hosted by Flea, founding member and bassist of the Red Hot Chili Peppers, This Little Light is a podcast about falling in love with music. Flea interviews musical guests from all genres to discuss the teachers who guided them, the influences that inspired them, and how the lessons they learned as young musicians have shaped their creativity, resilience, and careers. Guests range from legends to rising stars, and include Rick Rubin, Patti Smith, Thundercat Margo Price, and Cynthia Erivo. The podcast is produced by Cadence13 and Parallel, with proceeds benefiting the Silverlake Conservatory of Music, a Los Angeles-based non-profit that Flea co-founded in 2001.",
}];
const customRender = (podCastState = {}) => {
  render(
    <BrowserRouter><PodcastCard podcastFirstElement={defaultStatePodcast}/> </BrowserRouter>
  );
};
describe("PodcastCard component", () => {
  it("renders without crashing", () => {
    customRender();
    expect(screen.getByText(/THIS LITTLE LIGHT - CADENCE13 AND PARALLEL/i)).toBeInTheDocument();
  });
  it("image is include in the component", () => {
    customRender();
    expect(screen.getByAltText(/artwork/i)).toBeInTheDocument();
  })
  it("author is include in the component", () => {
    customRender();
    expect(screen.getByText(/^CADENCE13 AND PARALLEL$/i)).toBeInTheDocument();
  })
  it("description is include in the component", () => {
    customRender();
    expect(screen.getByText(/Hosted by Flea/i)).toBeInTheDocument();
  })

});
