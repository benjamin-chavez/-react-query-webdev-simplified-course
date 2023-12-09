// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// const POSTS = [
//   { id: 1, title: 'Post 1' },
//   { id: 2, title: 'Post 2' },
// ];

// function wait(milliseconds: number) {
//   return new Promise((resolve) => setTimeout(resolve, milliseconds));
// }

// function App() {
//   const queryClient = useQueryClient();
//   const postsQuery = useQuery({
//     queryKey: ['posts'],
//     queryFn: () => wait(1000).then(() => [...POSTS]),
//     // queryFn: () => Promise.reject('Error Message'),
//   });

//   const newPostMutation = useMutation({
//     mutationFn: (title: string) => {
//       return wait(1000).then(() =>
//         POSTS.push({ id: crypto.randomUUID(), title })
//       );
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(['posts']);
//     },
//   });

//   if (postsQuery.isLoading) return <h1>Loading...</h1>;
//   if (postsQuery.isError) {
//     return <pre>{JSON.stringify(postsQuery.error)}</pre>;
//   }

//   return (
//     <>
//       <h1>TanStack Query</h1>
//       <div>
//         {postsQuery.data?.map((post) => (
//           <div key={post.id}>{post.title}</div>
//         ))}
//         <button
//           onClick={() => newPostMutation.mutate('New Post Title')}
//           type="button"
//           disabled={newPostMutation.isLoading}
//           className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50  disabled:text-gray-900/20"
//         >
//           Add New
//         </button>
//       </div>
//     </>
//   );
// }

// export default App;
