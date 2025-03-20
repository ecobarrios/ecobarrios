import React from "react";

interface Props {
  url: string;
}
function VideoSite(props: Props) {
  const { url } = props;
  return (
    <iframe
      width="280"
      height="500"
      src={url}
      title="ECOBARRIOS SANTIAGO COLABORACION"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
}

export default VideoSite;
