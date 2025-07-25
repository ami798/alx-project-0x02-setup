import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

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
