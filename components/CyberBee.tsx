export default function CyberBee({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Wings - Digital/Geometric Look */}
      <path d="M50 35 C50 35 20 10 20 40 C20 60 50 55 50 55" className="fill-purple-400/20 stroke-purple-500" strokeWidth="2" />
      <path d="M50 35 C50 35 80 10 80 40 C80 60 50 55 50 55" className="fill-purple-400/20 stroke-purple-500" strokeWidth="2" />
      
      {/* Body */}
      <ellipse cx="50" cy="50" rx="15" ry="25" className="fill-yellow-400" />
      
      {/* Stripes */}
      <path d="M38 45 H62" stroke="black" strokeWidth="3" className="dark:stroke-black/80" />
      <path d="M38 55 H62" stroke="black" strokeWidth="3" className="dark:stroke-black/80" />
      
      {/* Head */}
      <circle cx="50" cy="30" r="10" className="fill-gray-900 dark:fill-gray-200" />
      
      {/* Antennae */}
      <path d="M45 22 L35 10" stroke="currentColor" strokeWidth="2" className="text-gray-500" />
      <path d="M55 22 L65 10" stroke="currentColor" strokeWidth="2" className="text-gray-500" />
    </svg>
  );
}