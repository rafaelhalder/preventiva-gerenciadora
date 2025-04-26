import React from "react";
import Image from "next/image";

export function MobileCard() {
  return (
    <div className="grid place-items-center h-full px-8 py-6 rounded-xl">
    <Image src={"/image/mobile3.png"} alt={""} width={500} height={500}></Image>
    </div>
  );
}
export default MobileCard;