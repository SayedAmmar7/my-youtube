import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/config";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();

    setVideo(json.items);
  };
  if (video.length === 0) return <Shimmer />;

  return (
    <div className="flex flex-wrap">
      {video.map((vid, index) => (
        <Link key={vid.id} to={"/watch?v=" + vid.id}>
          <VideoCard info={vid} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
