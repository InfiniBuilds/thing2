import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 dark:border-white/10 bg-white/80 dark:bg-black/50 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo Text: Black in light mode, White in dark mode */}
        <Link href="/" className="text-xl font-bold tracking-tighter text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
          NEURAL HIVE
        </Link>
        
        <div className="flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-zinc-400">
          <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">About</Link>
          <Link href="/posts" className="hover:text-black dark:hover:text-white transition-colors">Posts</Link>
          <Link href="/ethos" className="hover:text-black dark:hover:text-white transition-colors">Ethos</Link>
          
          <div className="pl-4 border-l border-gray-300 dark:border-gray-700">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}