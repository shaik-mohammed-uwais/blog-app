import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components/export";
import services from "../appwrite/config";

function AllPostspage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    services
      .getPosts([])
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPostspage;
