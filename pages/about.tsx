import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout title="About Us">
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          {/* UPDATED: text-foreground */}
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-foreground">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">Neural Hive</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-zinc-400">
            Bridging the gap between academic research and real-world engineering.
          </p>
        </div>

        {/* Mission Card */}
        <section className="bg-card border border-border p-10 rounded-3xl shadow-sm dark:shadow-none mb-12">
          {/* UPDATED: text-foreground */}
          <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">Our Mission</h2>
          <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-lg">
            ML Mondays is the dedicated knowledge-sharing platform of Neural Hive. 
            We believe that Machine Learning shouldn't be a "black box." Our goal is to 
            democratize AI knowledge through open-source collaboration, clear writing, 
            and hands-on experiments. We are a community of students, engineers, and 
            researchers building the future together.
          </p>
        </section>

        {/* Grid Stats */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border p-8 rounded-2xl hover:border-purple-500/50 transition-colors">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-heading font-bold mb-3 text-foreground">Innovation</h3>
            <p className="text-gray-600 dark:text-zinc-400">
              Pushing the boundaries of what's possible with LLMs, Computer Vision, and Reinforcement Learning.
            </p>
          </div>

          <div className="bg-card border border-border p-8 rounded-2xl hover:border-cyan-500/50 transition-colors">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-2xl font-heading font-bold mb-3 text-foreground">Community</h3>
            <p className="text-gray-600 dark:text-zinc-400">
              A safe space to ask questions, share failures, and celebrate breakthroughs in engineering.
            </p>
          </div>
        </div>

      </div>
    </Layout>
  );
}