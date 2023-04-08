import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [posts, setPosts] = useState(null);

  const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      // console.log(res.data);
      setPosts(res.data);
    });
  }, []);

  if (!posts) return null;

  return (
    <div className="App">
      <h3>{posts.title}</h3>
      <p>{posts.body}</p>
    </div>
  );
}
