import { getSlugs } from "./getSlugs";
import { getNoteFromSlug } from "./getNoteFromSlug";
import { NoteProps } from "../types";

export const getAllNotes = () => {
  // sort notes based on date
  const notes: NoteProps[] = getSlugs()
    .map((slug) => getNoteFromSlug(slug))
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
  return notes;
};