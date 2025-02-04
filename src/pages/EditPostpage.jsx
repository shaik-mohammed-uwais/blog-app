import React, { useEffect, useState } from "react";
import { Container, Postform } from "../components/export";
import services from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPostpage() {
  const [post, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      services.getPost(slug).then((fetchedPost) => {
        if (fetchedPost) {
          setPosts(fetchedPost);
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-8">
      <Container>
        <Postform post={post} />
      </Container>
    </div>
  );
}
export default EditPostpage;
