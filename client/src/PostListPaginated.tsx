// client/src/PostListPaginated.tsx

// client/src/PostsList1.tsx

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Post, getPostsPaginated } from './api/posts.ts';

function PostListPaginated() {
  const [page, setPage] = useState(1);

  const { status, error, data, isPreviousData } = useQuery({
    queryKey: ['posts', { page }],
    keepPreviousData: true,
    queryFn: () => getPostsPaginated(page),
  });

  if (status === 'loading') return <h1>Loading...</h1>;
  if (status === 'error') {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  return (
    <>
      <h1>Posts List Paginated</h1>
      <br />
      <div>{isPreviousData && 'Previous Data'}</div>

      <div>
        {data.posts.map((post: Post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>

      {data.previousPage && (
        <button onClick={() => setPage(data.previousPage)}>Previous</button>
      )}

      {data.nextPage && (
        <button onClick={() => setPage(data.nextPage)}>Next</button>
      )}
    </>
  );
}

export default PostListPaginated;
