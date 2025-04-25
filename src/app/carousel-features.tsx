"use client";

import Image from "next/image";
import React from "react";
import { Typography, Carousel } from "@material-tailwind/react";


export function CarouselFeatures() {
  return (
    <section className="px-8 pt-40 pb-20">
      <div className="flex mb-16 flex-col items-center">
        <Typography variant="h2" className="text-center mb-2" color="blue-gray" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          Oque nossos investidores falam?
        </Typography>
        <Typography
          variant="lead"
          className="mb-3 w-full text-center font-normal !text-gray-500 lg:w-10/12"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
         Um pouco sobre o que nossos investidores falam sobre nós e como a nossa plataforma tem ajudado eles a crescerem e se desenvolverem.
        </Typography>
      </div>
      <div className="container mx-auto !rounded-lg bg-[url('/image/Background.png')] bg-center py-10 lg:px-16">
        <Carousel
          transition={{ duration: 1 }}
          nextArrow={() => <></>}
          prevArrow={() => <></>}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute left-16 bottom-0 z-50 flex h-5 w-20 -translate-x-2/4 gap-2 md:left-2/4">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 w-10 cursor-pointer transition-all content-[''] ${
                    activeIndex === i ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {new Array(1).fill("").map((_, i) => (
            <div
              key={i}
              className="!relative flex grid-cols-1 flex-col-reverse gap-6 px-10 py-14 md:grid md:grid-cols-5  md:gap-14 md:py-20"
            >
              <div className="col-span-3 flex flex-col items-start justify-center">
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-5 text-xl font-normal "  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  Investir e utilizar o sistema da Preventiva foi uma excelente decisão. A plataforma facilitou todo o processo e trouxe ótimos resultados para o meu negócio.
                </Typography>
                <Typography
                  variant="small"
                  color="white"
                  className="font-medium uppercase"
                  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}  
                >
                  Fernando Corrales,{" "}
                  <span className="font-normal opacity-60">
                    Dono Master @ Tecnorisk LTDA.
                  </span>
                </Typography>
              </div>
              <div className="col-span-2 flex w-full shrink-0 md:!justify-end">
                <Image
                  width={256}
                  height={256}
                  src="/image/fer.png"
                  alt="testimonial image"
                  className="h-full w-2/4 object-contain md:!w-2/3 rounded-full"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default CarouselFeatures;