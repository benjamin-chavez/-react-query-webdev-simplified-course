// client/src/CreatePost.tsx

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import Post from './Post';
import { createPost } from './api/posts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CreatePost({ setCurrentPage }: { setCurrentPage: any }) {
  const titleRef = useRef();
  const bodyRef = useRef();
  const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      queryClient.setQueryData(['posts', data.id], data, (oldData) => {
        // NOTE THAT YOU CANNOT MUTATE `oldData` directly
      });
      queryClient.invalidateQueries(['posts'], { exact: true });
      setCurrentPage(<Post id={data.id} />);
    },

    // mutationFn: (variables) => {
    //   createPost(variables);
    // },

    // retry: 2

    // onSuccess: (data, variables, context) => {
    //   console.log(context);
    // },
    // onError: (error, variables, context),
    // onSettled: (data, error, variables, context),

    // onMutate: (variables) => {
    //   return { hi: 'Bye' };
    // },

    // onSuccess: (data) => {
    //   queryClient.setQueryData(['posts', data.id], data);
    //   queryClient.invalidateQueries(['posts'], { exact: true });
    // },
  });

  // createPostMutation.status;
  // createPostMutation.mutateAsync().then(() => {});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    createPostMutation.mutate({
      title: titleRef.current.value,
      body: bodyRef.current.value,
    });
  }

  return (
    <>
      {createPostMutation.isError && JSON.stringify(createPostMutation.error)}

      <h1>CreatePost</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" ref={titleRef} />
        </div>

        <div>
          <label htmlFor="body">Body</label>
          <input id="body" ref={bodyRef} />
        </div>

        <button disabled={createPostMutation.isLoading}>
          {createPostMutation.isLoading ? 'Loading...' : 'Create'}
        </button>
      </form>
    </>
  );
}
export default CreatePost;
