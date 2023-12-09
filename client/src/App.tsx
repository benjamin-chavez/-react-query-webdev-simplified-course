import { useState } from 'react';
import PostsList1 from './PostsList1';
import PostsList2 from './PostsList2';

export type Post = {
  id: number;
  title: string;
};

function App() {
  const [currentPage, setCurrentPage] = useState(<PostsList1 />);

  return (
    <>
      <button
        onClick={() => {
          setCurrentPage(<PostsList1 />);
        }}
      >
        Posts List 1
      </button>

      <button
        onClick={() => {
          setCurrentPage(<PostsList2 />);
        }}
      >
        Posts List 2
      </button>
      <br />

      {currentPage}
    </>
  );
}

export default App;
