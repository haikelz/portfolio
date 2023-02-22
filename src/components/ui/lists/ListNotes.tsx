import Link from "next/link";
import { twJoin, twMerge } from "tailwind-merge";
import { spaceGrotesk } from "~lib/utils/fonts";
import type { NoteMetaProps } from "~types";
import { Paragraph } from "~ui/typography";

type NotesArticlesProps = {
  filteredNotes: NoteMetaProps[];
};

const ListNotes = ({ filteredNotes }: NotesArticlesProps) => {
  return (
    <>
      {filteredNotes.map((note) => (
        <div key={note.slug} className="h-full">
          <Paragraph className={twMerge("text-left", spaceGrotesk.className)}>
            {note.date}
          </Paragraph>
          <div className="mt-2">
            <Link href={`/notes/${note.slug}`}>
              <span
                className={twMerge(
                  "cursor-pointer text-xl font-bold",
                  "hover:text-crayola",
                  spaceGrotesk.className
                )}
              >
                {note.title}
              </span>
            </Link>
          </div>
          <Paragraph className="my-2 tracking-wide">{note.description}</Paragraph>
          <div className={twMerge("flex space-x-2 font-medium", spaceGrotesk.className)}>
            {note.tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`} aria-label={tag}>
                <span
                  className={twJoin(
                    "cursor-pointer rounded-sm border-2 border-gray-300 px-1 font-medium",
                    "dark:border-gray-500",
                    "hover:text-crayola hover:decoration-crayola"
                  )}
                >
                  {tag}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ListNotes;
