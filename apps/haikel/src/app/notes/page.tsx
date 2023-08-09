import { NoteMetaProps } from "~interfaces";
import { cxm } from "~lib/helpers";
import { getAllNotes } from "~lib/services";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";
import Main from "~ui/main";
import { Heading, Paragraph, Underline } from "~ui/typography";

import NotesClient from "./client";

const baseMetadata = {
  title: "Notes",
  description:
    "Sometimes i write something. Mostly about technical stuff. So yeah, i call this as Notes.",
  url: `${SITE_URL}/notes`,
};

const { title, description, url } = baseMetadata;

export const metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: "haikel.app",
    images: [
      {
        url: DEFAULT_OG_URL,
        alt: "OG Image",
      },
    ],
  },
  twitter: {
    title,
    description,
    site: url,
    card: "summary_large_image",
  },
  metadataBase: new URL(url),
};

export default function Notes() {
  const notes: NoteMetaProps[] = getAllNotes()
    .slice(0, getAllNotes().length)
    .map((note) => note.meta);

  return (
    <Main className={cxm("flex min-h-screen flex-col items-start justify-start", "py-8")}>
      <section className="flex w-full flex-wrap items-start justify-start">
        <div>
          <Heading as="h2" className="text-left">
            Notes
          </Heading>
          <Underline />
        </div>
        <div className="w-full leading-relaxed">
          <Paragraph>
            Sometimes, i write something. Mostly about technical stuff. So yeah, i call this as{" "}
            <b>Notes</b>.
          </Paragraph>
        </div>
      </section>
      <NotesClient notes={notes} />
    </Main>
  );
}