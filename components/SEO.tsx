// components/SEO.tsx
import Head from "next/head";

type Props = {
  title: string;
  description?: string;
  image?: string;
  url?: string;
};

export default function SEO({ title, description, image, url }: Props) {
  const sitename = "ML Mondays - Neural Hive";
  return (
    <Head>
      <title>{title} | {sitename}</title>
      <meta name="description" content={description || ''} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || ''} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
    </Head>
  );
}
