// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header style={{borderBottom:'1px solid #eee', padding:'1rem 0'}}>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Link href="/"><a style={{fontWeight:700, fontSize:20, color:'#5b21b6'}}>Neural Hive - ML Mondays</a></Link>
        <nav>
          <Link href="/"><a style={{marginRight:16}}>Home</a></Link>
          <Link href="/posts/example-getting-started"><a style={{marginRight:16}}>Posts</a></Link>
          <Link href="/ethos"><a style={{marginRight:16}}>Ethos</a></Link>
          <Link href="/write-for-us"><a style={{marginRight:16}}>Write for Us</a></Link>
          <Link href="/about"><a>About</a></Link>
        </nav>
      </div>
    </header>
  )
}
