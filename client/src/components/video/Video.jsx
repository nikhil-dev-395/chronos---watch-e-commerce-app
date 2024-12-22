import React from "react";

const Video = ({ videoSrc }) => {
  return (
    <video
      src={videoSrc}
      className="rounded-3xl w-full max-h-[40vh] md:w-auto md:max-w-[20vw] object-cover"
    />
  );
};

export default Video;
