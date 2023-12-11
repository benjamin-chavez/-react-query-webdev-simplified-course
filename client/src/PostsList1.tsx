// client/src/PostsList1.tsx

import { useQuery } from '@tanstack/react-query';
import { getPosts } from './api/posts.ts';
import { Post } from './App.tsx';

function PostsList1() {
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,

    // staleTime: 1000,
    // refetchInterval: 1000,
  });

  // 22:06
  // postsQuery.fetchStatus === 'fetching';
  // postsQuery.status === 'loading';

  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.isError) {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  }

  return (
    <>
      <h1>Posts List 1</h1>
      <ol>
        {postsQuery.data?.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </>
  );
}

export default PostsList1;
