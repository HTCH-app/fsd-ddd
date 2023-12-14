import { notesApp } from "@fsd-ddd/infra";
import { Hono } from "hono";

const authorsApp = new Hono()
  .get("/", (c) => c.json({ result: "list authors" }))
  .post("/", (c) => c.json({ result: "create an author" }, 201))
  .get("/:id", (c) => c.json({ result: `get ${c.req.param("id")}` }));

const booksApp = new Hono()
  .get("/", (c) => c.json({ result: "list books" }))
  .post("/", (c) => c.json({ result: "create a book" }, 201))
  .get("/:id", (c) => c.json({ result: `get ${c.req.param("id")}` }));

export const app = new Hono()
  .basePath("/api")
  .route("/authors", authorsApp)
  .route("/notes", notesApp)
  .route("/books", booksApp);

export type AppType = typeof app;