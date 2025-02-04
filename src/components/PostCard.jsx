import React, { useEffect, useState } from "react";
import services from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, "featured-image": featuredImage, title }) {
  const [first, setfirst] = useState(null);
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageUrl = await services.getfilepreview(featuredImage);
        setfirst(imageUrl);
      } catch (error) {
        console.error("Error fetching image preview", error);
      }
    };
    fetchImage();
  }, [featuredImage]);

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img src={first} alt={title} className="rounded-xl" />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
