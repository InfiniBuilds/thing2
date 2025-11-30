import Layout from '@/components/Layout';

export default function Ethos() {
  const principles = [
    {
      title: "Open Knowledge",
      desc: "We believe knowledge grows when shared. All our code, datasets, and findings are open-source by default."
    },
    {
      title: "Quality Over Hype",
      desc: "We don't chase trends blindly. We prioritize engineering rigor, reproducibility, and first-principles thinking."
    },
    {
      title: "Inclusivity",
      desc: "Neural Hive is for everyone. Whether you are a PhD researcher or a first-year student, your voice matters here."
    },
    {
      title: "Build to Learn",
      desc: "We don't just read papers; we implement them. The best way to understand a neural network is to break it."
    }
  ];

  return (
    <Layout title="Our Ethos">
      <div className="max-w-6xl mx-auto px-6 py-20">
        
        {/* Header */}
        <header className="mb-20 text-center max-w-3xl mx-auto">
          {/* UPDATED: text-foreground ensures it is Black in Light Mode, White in Dark Mode */}
          <h1 className="text-6xl font-heading font-bold mb-6 text-foreground tracking-tighter">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">Ethos</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-zinc-400 font-light">
            The code we write defines the future we build. These are the core principles that drive Neural Hive.
          </p>
        </header>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((item, index) => (
            <div key={index} className="group relative bg-card border border-border p-10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl dark:hover:shadow-purple-900/20">
              
              {/* Background Number */}
              <span className="absolute -right-4 -top-8 text-9xl font-black text-gray-100 dark:text-white/5 opacity-50 group-hover:text-purple-500/10 group-hover:scale-110 transition-all duration-500 pointer-events-none select-none">
                0{index + 1}
              </span>

              <div className="relative z-10">
                {/* UPDATED: text-foreground for the title */}
                <h3 className="text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
}