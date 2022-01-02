import React from "react";
import { render, screen } from "@testing-library/react";
import { Cats } from "../index";
import { Provider } from "react-redux";
import { store } from "../../../Store/index";
import configureStore from "redux-mock-store";

const { configureStore } = require("redux-mock-store");

describe("testing the Cats Page", () => {
  test("just check the page with the cats with a snapshot", () => {
    render(
      <Provider store={store}>
        <Cats />
      </Provider>
    );
    const actions = store.getActions();
    const firstActions = actions[0];
    // const linkElement = screen.getByText(/Ошибочка/i);
    expect(firstActions).toEqual(getCatActionWithThunk());
  });
});
