import React from "react";

const Video = ({ videoSrc }) => {
  return (
    <>
      <video
        src={videoSrc}
        className="rounded-3xl absolute bottom-8 right-0 max-w-[20vw]"
      ></video>
    </>
  );
};

export default Video;
