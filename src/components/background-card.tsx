import React from "react";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";

interface BackgroundCardProps {
  title: string;
  children: React.ReactNode;
}

export function BackgroundCard({ title, children, image }: BackgroundCardProps & { image?: string }) {
  return (
    <div className="grid place-items-center h-full px-8 py-6 bg-gray-900 rounded-xl">
      <div className="flex flex-col items-center mb-16">
        <Image
          src={image || "/default-image.png"}
          alt={title}
          width={75}
          height={75}
          className="object-cover shadow-lg mb-4"
        />
        <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}     variant="h2" className="text-center" color="white">
          {title}
        </Typography>
        <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}    
          color="white"
          className="my-2 text-base w-full text-center font-normal"
        >
          {children}
        </Typography>
      </div>
    </div>
  );
}
export default BackgroundCard;