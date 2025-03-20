import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  noticeText: string;
  textPrev: string;
  title: string;
  href: string;
}

function New(props: Props) {
  const { src, noticeText, textPrev, title, href } = props;
  return (
    <div className="flex flex-col md:flex-row gap-3 w-full ">
      <div className="w-full md:w-1/3">
        <Image src={src} alt="image" width={200} height={200} className="rounded-xl w-36 " />
      </div>
      <div className="w-full md:w-2/3 flex flex-col span-y-2">
        <Link href={href} className="font-bold md:text-2xl hover:text-gray-500 cursor-pointer">{title}</Link>
        <p className="text-[12px]">{textPrev}</p> 
      </div>
    </div>
  );
}

export default New;
