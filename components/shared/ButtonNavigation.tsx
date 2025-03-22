"use client";

import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft, LucideProps } from "lucide-react";

interface Props {
  titleButton: string;
  icon: React.FC;
}

function ButtonNavigation(props: Props) {
  const { titleButton, icon: Icon } = props;
  return (
    <Button className="bg-slate-600">
      <ChevronLeft/>
    </Button>
  );
}

export default ButtonNavigation;
