import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  url: string;
  icon: string;
  titleRrss: string;
}

function Rrss(props: Props) {
  const { url, icon, titleRrss } = props;
  return (
    <Link href={url}>
      <Image src={icon} alt={`rrss-${titleRrss}`} className="w-16" />
    </Link>
  );
}

export default Rrss;
