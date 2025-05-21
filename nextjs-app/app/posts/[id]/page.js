import Comments from "@/app/components/Comments";
import getPost from "@/app/lib/getPost";
import getPostComment from "@/app/lib/getPostComment";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({ params }) {
  const { id } = await params;
  const postPromise = getPost(id);
  const commentsPromise = getPostComment(id);

  //   const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  const post = await postPromise;

  return (
    <div className="mt-6">
      <h2 className="text-blue-500">{post.title}</h2>
      <p className="mt-3">{post.body}</p>

      <hr />
      <Suspense fallback="<h1>Loading Comments....</h1>">
        <Comments promise={commentsPromise} />
      </Suspense>
    </div>
  );
}
