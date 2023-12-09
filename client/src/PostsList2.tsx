// client/src/PostsList2.tsx

import { useQuery } from '@tanstack/react-query';
import { getPosts } from './api/posts.ts';
import { Post } from './App.tsx';

function PostsList2() {
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.isError) {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  }

  return (
    <>
      <h1>Posts List 2</h1>
      <ol>
        {postsQuery.data?.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </>
  );
}

export default PostsList2;
