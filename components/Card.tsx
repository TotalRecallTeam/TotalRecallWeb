import React from "react";

type CardProps = {
  content: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ content }) => {
  return (
    <div className=" text-white p-4 shadow-md border border-white rounded-md w-[100%] h-full">
      {content}
    </div>
  );
};
