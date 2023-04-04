import React from "react";
import { render, screen } from "@testing-library/react";
import PodcastCountEpisodes from "../PodcastCountEpisodes/index";

describe("PodcastCountEpisodes", () => {
  it("renders the correct number of episodes", () => {
    const episodesCount = 10;
    render(<PodcastCountEpisodes podcastEpisodesLenght={episodesCount} />);
    expect(screen.getByText(`Episodes: ${episodesCount}`)).toBeInTheDocument();
  });
});