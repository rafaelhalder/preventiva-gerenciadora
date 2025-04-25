"use client";

import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/course.jpg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <img
          src="/image/preventiva.png"
          alt="Preventiva Logo"
          className="h-64 w-64 object-contain md:h-80 md:w-80 lg:h-36 lg:w-96 "
        />
        <Typography
          variant="h2"
          color="white"
          className="mt-6 mb-4 w-full md:max-w-full lg:max-w-2xl font-bold"
          placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}  
        >
          Eleve a gestão de riscos da sua empresa ao próximo nível!
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mb-8 w-full md:max-w-full lg:max-w-2xl"
          placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}  
        >
          Descubra como otimizar a gestão de riscos da sua empresa com soluções inovadoras e eficientes. Garanta mais segurança, conformidade e tranquilidade para o seu negócio!
        </Typography>
        <div>
          <Button
              variant="gradient"
              color="green"
              size="lg"
              className="flex items-center gap-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 6L0 24l6.29-1.65A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.74.98 1-3.64-.23-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.28-.97.95-.97 2.3 0 1.35.99 2.66 1.13 2.85.14.18 1.95 2.99 4.74 4.07.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
            </svg>
            Entrar em contato
          </Button>
          </div>
      </div>
    </div>
  </div>
  );
}
export default Hero;
