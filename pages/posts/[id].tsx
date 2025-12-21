import Head from 'next/head';
import Layout from '@/components/Layout';
import { getSortedPostsData, getPostData } from '@/lib/posts';
import { GetStaticProps, GetStaticPaths } from 'next';

// This component renders the actual blog post
export default function Post({ postData }: { postData: any }) {
  return (
    <Layout title={postData.title}>
      <Head>
        <title>{postData.title} | Neural Hive</title>
      </Head>
      
      <article className="max-w-3xl mx-auto mt-10 px-6">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            {postData.title}
          </h1>
          <div className="text-zinc-500 text-sm font-mono border-b border-white/10 pb-6 inline-block">
            <span>{postData.date}</span> • <span>{postData.author || 'Neural Hive Team'}</span>
          </div>
        </header>
        
        {/* Render the Markdown HTML content */}
        <div 
          className="prose prose-invert prose-purple max-w-none prose-headings:text-cyan-400 prose-a:text-purple-400 hover:prose-a:text-purple-300"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
      </article>
    </Layout>
  );
}

// 1. Tell Next.js which IDs (slugs) exist so it can build them
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSortedPostsData().map((post) => ({
    params: { id: post.slug as string },
  }));
  return {
    paths,
    fallback: false,
  };
};

// 2. Fetch the data for a single post based on the ID in the URL
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};