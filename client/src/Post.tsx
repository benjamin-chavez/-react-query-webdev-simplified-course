// client/src/Post.tsx
// client/src/PostsList1.tsx

import { useQuery } from '@tanstack/react-query';
import { getPost } from './api/posts.ts';
import { getUser } from './api/users.ts';

function Post({ id }: { id: number }) {
  const postQuery = useQuery({
    queryKey: ['posts', id],
    queryFn: () => getPost(id),
  });

  const userQuery = useQuery({
    queryKey: ['users', postQuery?.data?.userId],
    // enabled: true,
    enabled: postQuery?.data?.userId != null,
    queryFn: () => getUser(postQuery.data.userId),
  });

  if (postQuery.isLoading) return <h1>Loading...</h1>;
  if (postQuery.isError) {
    return <pre>{JSON.stringify(postQuery.error)}</pre>;
  }

  return (
    <>
      <h1>{postQuery.data.title}</h1>
      {/* <h2>{postQuery.data.userId}</h2> */}
      {userQuery.isLoading
        ? 'Loading User...'
        : userQuery.isError
        ? 'Error Loading User'
        : userQuery.data.name}
      <br />
      <p>{postQuery.data.body}</p>
    </>
  );
}

export default Post;
