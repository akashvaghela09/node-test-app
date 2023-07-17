const express = require("express");
const app = express();
const PORT = 6060;

app.get("/", (req, res) => {
  res.send(`<div>It's a Sample Node App</div>`);
});

app.get("/app", (req, res) => {
  res.send(`GET Request`);
});

app.post("/app", (req, res) => {
  res.send(`POST Request`);
});

app.patch("/app", (req, res) => {
  res.send(`PATCH Request`);
});

app.put("/app", (req, res) => {
  res.send(`PUT Request`);
});

app.delete("/app", (req, res) => {
  res.send(`DELETE Request`);
});

// Check if the module is being run directly
if (require.main === module) {
  app.listen(process.env.PORT || PORT, () => {
    console.log(`Node running at ${PORT} | Test at http://localhost:${PORT}/`);
  });
} else {
  // Export the app instance for importing
  module.exports = app;
}
