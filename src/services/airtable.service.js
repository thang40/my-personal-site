import Airtable from "airtable";

const TABLE_NAME = "322 details";
const { REACT_APP_AIRTABLE_API_KEY, REACT_APP_BASE_TABLE } = process.env;

let base;

export const initService = () => {
  base = new Airtable({
    apiKey: REACT_APP_AIRTABLE_API_KEY
  }).base(REACT_APP_BASE_TABLE);
};

export const getRecords = (numOfRecords, curPage = 1, callback, callErr) => {
  let _page = 0;
  base(TABLE_NAME)
    .select({
      // Selecting the first 3 records in Grid view:
      pageSize: numOfRecords,
      view: "Grid view"
    })
    .eachPage(
      function page(records, fetchNextPage) {
        _page++;
        // This function (`page`) will get called for each page of records.
        if (_page === curPage) {
          callback(records);
          return;
        }

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          callErr(err);
          return;
        }
      }
    );
};
