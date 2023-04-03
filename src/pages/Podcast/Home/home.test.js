import { render, screen } from "@testing-library/react";
import Home from "./index";
import { Provider,  } from "react-redux";
import storeReduce from "../../../store/index";
import React from "react";
import { configureStore } from "@reduxjs/toolkit";

describe("test home", () => {
  const store = configureStore(storeReduce);
  test("Podcast List not empty and return 100 elements", () => {
    const { getByText } = render(<Provider store={store}><Home /></Provider>)

  });
});
