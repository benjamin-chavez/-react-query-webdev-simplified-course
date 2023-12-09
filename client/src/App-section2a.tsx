// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// const POSTS = [
//   { id: 1, title: 'Post 1' },
//   { id: 2, title: 'Post 2' },
// ];

// function wait(milliseconds: number) {
//   return new Promise((resolve) => setTimeout(resolve, milliseconds));
// }

// // api/posts -> ["posts"]
// // api/posts/:id -> ["posts", post.id]
// // api/posts?authorId=:id -> ["posts", {authorId: id}]
// // api/posts/:id/comments -> ["posts", post.id, "comments"]

// function App() {
//   const postsQuery = useQuery({
//     queryKey: ['posts'],
//     // queryFn: (obj) =>
//     queryFn: ({ queryKey }) =>
//       wait(1000).then(() => {
//         // console.log(obj);
//         console.log(queryKey);
//         return [...POSTS];
//       }),
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
//       </div>
//     </>
//   );
// }

// export default App;
