"use client";

import { usePathname } from "next/navigation";
import GridItem from "~/components/grid-item";
import { Media } from "~/lib/data";
import type { Categories } from "~/lib/data";

export default function Page() {
  const pathName = usePathname();
  const category = pathName?.replace("/", "");

  const media = Media.filter((m) =>
    m.categories.includes(category as Categories)
  );

  return (
    <div className="justify-items-center md:grid md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {media.map(({ src, poster, loop, externalLink }) => (
        <div key={src} className="grid place-items-center hover:opacity-90">
          <GridItem
            src={src}
            poster={poster}
            loop={loop}
            externalLink={externalLink}
          />
        </div>
      ))}
    </div>
  );
}
