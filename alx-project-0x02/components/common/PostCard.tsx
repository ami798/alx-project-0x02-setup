import { PostProps } from "@/interfaces";

export default function PostCard({ title, body, userId }: PostProps) {
  return (
    <div className="border rounded-xl shadow-md p-4 mb-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-700 mt-2">{body}</p>
      <p className="text-sm text-gray-500 mt-1">User ID: {userId}</p>
    </div>
  );
}
