import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { getSortedPostsData } from '@/lib/posts';
import { GetStaticProps } from 'next';

type PostData = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
};

export default function Posts({ allPostsData }: { allPostsData: PostData[] }) {
  return (
    <Layout title="All Posts">
      <Head>
        <title>All Posts | Neural Hive</title>
      </Head>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        
        {/* Header Section - Big & Styled */}
        <div className="mb-16 text-center">
           <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-foreground tracking-tighter">
            Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Archive</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Explore our complete library of articles, tutorials, and research notes.
          </p>
        </div>

        {/* Grid - Switched to 2 columns for BIGGER cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <Link href={`/posts/${id}`} key={id} className="group">
              <article className="h-full bg-card border border-border p-8 rounded-3xl hover:border-purple-500/50 transition-all duration-300 shadow-sm hover:shadow-xl dark:hover:shadow-purple-900/20 flex flex-col">
                
                {/* Date Badge */}
                <div className="flex items-center gap-3 text-sm font-mono text-cyan-600 dark:text-cyan-400 mb-4">
                  <span>{date}</span>
                  <span className="w-1 h-1 bg-current rounded-full" />
                  <span>Article</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed mb-6 flex-grow">
                  {excerpt}
                </p>

                {/* Read More Link */}
                <div className="text-sm font-bold text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-500 transition-colors pt-6 border-t border-border mt-auto flex items-center gap-2">
                  READ ARTICLE <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};