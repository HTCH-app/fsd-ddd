import { NoteToModelAdapter } from "./adapters";
import { InMemoryNoteRepo } from "./db/note-repo";

export const notesRepo = new InMemoryNoteRepo();
export const noteToModelAdapter = new NoteToModelAdapter()