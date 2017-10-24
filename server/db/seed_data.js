use to_do_list;
db.dropDatabase();

db.instructions.insert([
  {
    first: "Seed DB",
    second: "Get data from DB to JS",
    third: "Get data into controller on server",
    fourth: "Serve data as JSON",
    fifth: "Request data from API",
    sixth: "Render data in page"
  },
  {
    first: "Go to sleep",
    second: "Get up and start again"
  }
]);
