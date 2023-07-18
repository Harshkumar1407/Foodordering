import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Body from "../Body";
import store from "../../utilits/store";
import { StaticRouter, StaticRouterProvider } from "react-router-dom/server";
import { RESTURANT_DATA } from "../../mocks/mockData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTURANT_DATA);
    },
  });
});

test("Shimmer should load on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const Shimmer = body.getByTestId("Shimmer");

  expect(Shimmer).toBeInTheDocument();

  console.log(Shimmer);
});

test("search for string(food)  on Homepage", async() => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(()=>expect(body.getByTestId("search-input")));

  const input = body.getByTestId("search-input");
  fireEvent.change(input, {
    target: {
      value: "food",
    },
  });
  const searchBtn=body.getByTestId("search-btn");

  fireEvent.click(searchBtn)

 // console.log(Shimmer);
});
