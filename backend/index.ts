import * as express from "express";

export namespace Models {
  export interface Mock {
    id: string;
    title: string;
  }
}

function randomData(): Models.Mock {
  const id = new Date().getTime().toString();
  return {
    id,
    title: `Hello World ${id}`,
  };
}

const app = express();

app.get("/data", (_req, res) => {
  const data: Models.Mock[] = Array.from({ length: 10 }).map(randomData);
  res.json(data);
});

app.listen(5000);

console.log("API started on port 5000");
