import { searchRequestAction } from "./home.duck";

describe("searchRequestAction", () => {
  it("works", () => {
    expect({ payload: undefined, type: "@@Home/FETCH_SEARCH_REQUEST" }).toEqual(
      searchRequestAction()
    );
  });
});
