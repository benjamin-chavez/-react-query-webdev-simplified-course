// client/src/PostsList1.tsx

import { useQueries, useQuery } from '@tanstack/react-query';
import { Post, getPost, getPosts } from './api/posts.ts';

function PostsList1() {
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    // initialData: [{ id: 1, title: 'Initial Data' }],
    placeholderData: [{ id: 1, title: 'Initial Data' }],

    // staleTime: 1000,
    // refetchInterval: 1000,
  });

  // const queries = useQueries({
  //   queries: (postsQuery?.data ?? []).map((post: Post) => {
  //     return {
  //       queryKey: ['posts', post.id],
  //       queryFn: () => getPost(post.id),
  //     };
  //   }),
  // });

  // console.log(queries.map((q) => q.data));

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
