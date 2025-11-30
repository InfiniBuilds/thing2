import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { getSortedPostsData } from '@/lib/posts';
import CyberBee from '@/components/CyberBee';

type PostData = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
};

export default function Home({ allPostsData }: { allPostsData: PostData[] }) {
  const featuredPost = allPostsData[0];
  const morePosts = allPostsData.slice(1);

  return (
    <Layout title="Home">
      <Head>
        <title>Neural Hive | ML Mondays</title>
      </Head>

      

      {/* Hero Section */}
      <div className="relative mb-16 -mx-6 px-6 lg:-mx-[calc((100vw-100%)/2)] lg:px-[calc((100vw-100%)/2)] overflow-hidden">
        <section className="relative text-center py-24 max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-6 animate-bounce-slow">
            <CyberBee className="w-20 h-20 md:w-24 md:h-24 drop-shadow-xl dark:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
          </div>

          {/* BADGE FIX: text-purple-900 for Light Mode visibility */}
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-200 text-xs font-mono font-bold tracking-wider mb-6 border border-purple-200 dark:border-purple-500/30">
            NEURAL HIVE PRESENTS
          </span>
          
          <h1 className="text-5xl md:text-8xl font-bold text-foreground mb-6 tracking-tighter">
            ML Mondays
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
            Weekly insights into <span className="text-purple-600 dark:text-purple-400 font-medium">Machine Learning</span>, Engineering, and the future of Intelligence.
          </p>
        </section>
      </div>

      {/* Featured Post Card */}
      {featuredPost && (
        <section className="mb-16">
          <h2 className="text-xs font-mono text-gray-500 dark:text-zinc-500 uppercase tracking-widest mb-6">
            Latest Drop
          </h2>
          <Link href={`/posts/${featuredPost.id}`} className="group block">
            <article className="relative overflow-hidden rounded-2xl bg-card border border-border p-8 md:p-12 transition-all duration-500 hover:border-purple-500/50 hover:shadow-xl dark:hover:shadow-purple-500/10">
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-sm font-mono text-cyan-600 dark:text-cyan-400 mb-4">
                  <span>{featuredPost.date}</span>
                  <span className="w-1 h-1 bg-current rounded-full" />
                  <span>Featured</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6 text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all duration-300">
                  {featuredPost.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-zinc-300 mb-8 max-w-3xl leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold group-hover:gap-4 transition-all">
                  Read Article <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </article>
          </Link>
        </section>
      )}

      {/* The Grid */}
      {morePosts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs font-mono text-gray-500 dark:text-zinc-500 uppercase tracking-widest">
              More Insights
            </h2>
            <div className="h-[1px] bg-gray-200 dark:bg-white/10 flex-grow ml-6"></div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {morePosts.map(({ id, date, title, excerpt }) => (
              <Link href={`/posts/${id}`} key={id} className="group h-full">
                <article className="flex flex-col h-full p-6 rounded-xl bg-card border border-border hover:border-cyan-500/50 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none hover:-translate-y-1">
                  <span className="text-xs font-mono text-zinc-500 mb-3 block">{date}</span>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-500 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-600 dark:text-zinc-400 text-sm line-clamp-3 mb-4 flex-grow">
                    {excerpt}
                  </p>
                  <div className="text-xs font-bold text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-500 transition-colors pt-4 mt-auto border-t border-gray-100 dark:border-white/5">
                    READ POST
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
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