import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');
export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  tags?: string[];
  [key: string]: unknown;
};
const calculateReadingTime = (content: string) => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/g).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
};

export function getSortedPostsData() {
  // 1. Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData: PostMeta[] = fileNames
    .filter((fileName) => {
      // 2. SAFETY FILTER: Only process .md or .mdx files.
      // This ignores system files like .gitkeep which cause the crash.
      return fileName.endsWith('.md') || fileName.endsWith('.mdx');
    })
    .map((fileName) => {
      // 3. Remove ".md" or ".mdx" from file name to get the id
      const id = fileName.replace(/\.mdx?$/, '');

      // 4. Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // 5. Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // 6. Combine the data with the slug and normalized summary field
      const data = matterResult.data as Record<string, any>;
      return {
        slug: id,
        title: data.title,
        date: data.date,
        summary: data.excerpt ?? data.summary ?? data.description,
        tags: data.tags ?? null,
      } as PostMeta;
    });

  // 7. Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string) {
  // 8. Smart path finding: Check for .md first, if not found try .mdx
  let fullPath = path.join(postsDirectory, `${id}.md`);
  
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${id}.mdx`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string; author: string }),
  };
}