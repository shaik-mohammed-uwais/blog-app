import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container, Button } from "../components/export";
import { useSelector } from "react-redux";
import services from "../appwrite/config";
import parse from "html-react-parser";

export default function Postpage() {
  const [post, setPost] = useState(null);
  const [image, setimage] = useState(null);

  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userdata);

  const isAuthor = post && userData ? post.userid === userData.$id : false;
  const featuredImage =
    post?.["featured-image"] || post?.post?.["featured-image"];

  useEffect(() => {
    if (slug) {
      services.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    services.deletepost(post.$id).then((status) => {
      if (status) {
        if (featuredImage) {
          services.deleteFile(featuredImage);
        }
        navigate("/");
      }
    });
  };

  useEffect(() => {
    async function getImage() {
      if (!featuredImage) {
        console.warn("featuredImage is undefined, skipping getfilepreview");
        return;
      }
      try {
        const filePreview = await services.getfilepreview(featuredImage);
        setimage(filePreview);
      } catch (error) {
        console.error("Error fetching file preview:", error);
      }
    }
    getImage();
  }, [featuredImage]);

  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img src={image} alt={post.title} className="rounded-xl" />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css">{parse(post.content)}</div>
      </Container>
    </div>
  ) : null;
}
