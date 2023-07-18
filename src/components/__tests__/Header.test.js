import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utilits/store";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rendering  header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //console.log(header);

const logo=header.getAllByTestId("logo");
//console.log(logo)

});

test("online statuse  should be online on rendering  header", () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    //console.log(header);
  
  const onlineStatus=header.getByTestId("online-status");
  expect(onlineStatus.innerHTML).toBe(" online");

 // console.log(onlineStatus)
  
  });

  test("Cart should have 0 items on rendering  header", () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
   // console.log(header);
  
  const cart=header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart-0 items")
  
  
  });
