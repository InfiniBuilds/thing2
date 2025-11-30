import Link from 'next/link';
import Layout from '@/components/Layout';
import CyberBee from '@/components/CyberBee';

export default function Custom404() {
  return (
    <Layout title="404 - Lost in the Hive">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
        
        {/* Glitching Bee */}
        <div className="mb-8 relative">
          <CyberBee className="w-32 h-32 opacity-50 grayscale" />
          <div className="absolute inset-0 bg-red-500/20 mix-blend-overlay animate-pulse rounded-full blur-xl" />
        </div>

        <h1 className="text-6xl md:text-8xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 mb-4">
          404
        </h1>
        
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Signal Lost
        </h2>
        
        <p className="text-gray-600 dark:text-zinc-400 max-w-md mb-8">
          The page you are looking for has been moved, deleted, or possibly consumed by a rogue neural network.
        </p>

        <Link 
          href="/" 
          className="px-8 py-3 rounded-full bg-foreground text-background font-bold hover:opacity-90 transition-opacity"
        >
          Return to Base
        </Link>
      </div>
    </Layout>
  );
}