import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export default function Layout({ children, title = "ML Mondays" }: LayoutProps) {
  return (
    // Note: We removed 'bg-background' from here because 'body' in globals.css handles it.
    // This prevents the div from painting over the grid.
    <div className="min-h-screen flex flex-col text-foreground transition-colors duration-300 relative">
      <Head>
        <title>{title} | Neural Hive</title>
        <meta name="description" content="Weekly insights into Machine Learning, Engineering, and Neural Networks." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* GLOBAL GRID: Fixed background that stays on all pages */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />
      
      {/* Content Wrapper: Z-Index 10 ensures text sits ON TOP of the grid */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </div>
    </div>
  );
}