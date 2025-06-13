import express from "express";

const app = express();

import cors from "cors";
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is joke 1",
    },
    {
      id: 2,
      title: "A joke",
      content: "This is joke 2",
    },
    {
      id: 3,
      title: "A joke",
      content: "This is joke 3",
    },
    {
      id: 4,
      title: "A joke",
      content: "This is joke 4",
    },
  ];
  res.send(jokes);
});

app.listen(3005, () => {
  console.log("server is running on port 3005");
});
