import React, { useState, useEffect } from "react";

const Fetch = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [clicked, setClicked] = useState(false);
  const handlerClicked = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [clicked]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(evt) => setId(evt.target.value)}
      />
      <button type="button" onClick={handlerClicked}>
        {" "}
        GetPost{" "}
      </button>
      {posts.title}
    </div>
  );
};

export default Fetch;
