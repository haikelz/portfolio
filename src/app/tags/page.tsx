import Link from "next/link";
import { useMemo } from "react";
import { cxm } from "~lib/helpers";
import { getAllNotes } from "~lib/services";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";
import Main from "~ui/main";
import { Heading, Paragraph, Underline } from "~ui/typography";

const baseMetadata = {
  title: "Tags",
  description: "Select spesific notes based on the list of tags below.",
  url: `${SITE_URL}/tags`,
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

export default function Tags() {
  // Merge all tags in the notes into one array and sort it alphabetically
  const tagsList = useMemo(
    () =>
      [
        ...new Set(
          getAllNotes()
            .map((item) => [...new Set(item.meta.tags)].join(" "))
            .join(" ")
            .split(" ")
        ),
      ].sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      }),
    []
  );

  return (
    <Main
      className={cxm("flex min-h-screen flex-col items-start justify-start", "py-8", "md:py-12")}
    >
      <section className="flex w-full flex-wrap items-start justify-start">
        <div>
          <Heading as="h2" className="text-left">
            Tags
          </Heading>
          <Underline />
        </div>
        <div className="w-full leading-relaxed">
          <Paragraph>Select spesific notes based on the list of tags below.</Paragraph>
        </div>
      </section>
      <section className="mt-6 flex flex-wrap gap-4">
        {tagsList.map((item) => (
          <Link key={item} href={`/tags/${item}`}>
            <button
              type="button"
              aria-label={`tag ${item}`}
              className={cxm(
                "bg-base-5 px-4 py-1 transition-all",
                "hover:scale-110 dark:bg-base-1"
              )}
            >
              <Paragraph className="text-center font-medium">{item}</Paragraph>
            </button>
          </Link>
        ))}
      </section>
    </Main>
  );
}