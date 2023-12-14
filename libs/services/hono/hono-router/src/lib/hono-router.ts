import { notesApp } from "@fsd-ddd/infra";
import { Hono } from "hono/quick";

export const app = new Hono()
  .basePath("/api")
  .route("/notes", notesApp)

export type AppType = typeof app;