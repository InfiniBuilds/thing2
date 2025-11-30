// components/PostCard.tsx
import Link from "next/link";
import { PostMeta } from "../lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article style={{border:'1px solid #eee', padding:16, borderRadius:8, marginBottom:12}}>
      <h3 style={{margin:'0 0 .5rem 0'}}>
        <Link href={`/posts/${post.slug}`}><a>{post.title}</a></Link>
      </h3>
      <p style={{margin:'0 .0 8px 0', color:'#555'}}>{post.summary}</p>
      <div style={{display:'flex', gap:8, fontSize:12, color:'#777'}}>
        <span>{new Date(post.date).toLocaleDateString()}</span>
        <span>•</span>
        <span>{post.tags?.join(", ")}</span>
      </div>
    </article>
  )
}
