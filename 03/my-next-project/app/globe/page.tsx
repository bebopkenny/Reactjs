'use client'
import { useState, useEffect, useRef } from 'react'

  interface Post {
    id: number;
    title: string;
  }

const page = () => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(0);

  const abortControllerRef = useRef<AbortController | null>(null)>

  useEffect(() => {
    const fetchPosts = async() => { // wait until the data has arrived
      setIsLoading(true);

      try {  // trying to fetch the data if it fails then runs catch for any error
        const response = await fetch(`${BASE_URL}/posts?page=${page}`); // wait until the data has loaded from the website
        const posts = await response.json() as Post[]; // turn the response to json nad put it in Post
        setPosts(posts) // put posts to the setPost
      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [page]);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong! Please try again.</div>;
  }
 
  return (
    <div>
      <h1 className="mb-4 text-2xl">Data Fetching in React</h1>
      <button onClick={() => setPage(page + 1)}>Increase page ({page})</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default page