import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Posts Page</h2>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
            id={post.id}
          />
        ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}
