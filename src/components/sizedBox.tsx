import React from "react";

interface SBProps {
  width?: string;
  height?:string
}

function SizedBox({ width = "w-0",height ="w-0" }: SBProps) {
  return <div className={`${width} ${height}`}></div>;
}

export default SizedBox;
