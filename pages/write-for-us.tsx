import Layout from '@/components/Layout';

export default function WriteForUs() {
  return (
    <Layout title="Write For Us">
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">
          Contribute to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">ML Mondays</span>
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-zinc-400 mb-12">
          Have an idea for a blog post? We are always looking for technical deep-dives, tutorials, and research summaries.
        </p>

        <div className="bg-card border border-border p-8 rounded-2xl inline-block text-left w-full">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">How to Submit</h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-zinc-400">
            <li>Fork our GitHub repository.</li>
            <li>Create a new Markdown file in the <code className="bg-gray-200 dark:bg-white/10 px-2 py-1 rounded text-sm">content/posts</code> folder.</li>
            <li>Add the required frontmatter (title, date, author).</li>
            <li>Write your article and submit a Pull Request (PR).</li>
          </ul>
          
          <div className="mt-8 text-center">
            <a 
              href="https://github.com/YOUR_GITHUB_USERNAME/my-mlmondays" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Go to GitHub Repo &rarr;
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}