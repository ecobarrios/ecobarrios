import React from "react";

interface Props {
  src: string;
}

function ImageBottom(props: Props) {
  const { src } = props;
  return (
    <div
      className="h-44 md:bg-contain bg-no-repeat md:h-96 rounded-xl"
      style={{ background: `url(${src})` }}
    ></div>
  );
}

export default ImageBottom;
