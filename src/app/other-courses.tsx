"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const OTHER_COURSES = [
  {
    img: "/image/i1.png",
    title: "Novas Diretrizes da Gestão de Riscos",
    desc: "Confira as últimas atualizações e normas sobre Gestão de Riscos (GR) no setor industrial.",
    buttonLabel: "saiba mais",
  },
  {
    img: "/image/i2.jpg",
    title: "Seminário: Boas Práticas em GR",
    desc: "Participe do seminário sobre melhores práticas e cases de sucesso em Gestão de Riscos.",
    buttonLabel: "inscreva-se",
  },
  {
    img: "/image/i3.jpg",
    title: "Entrevista: Especialistas em GR",
    desc: "Especialistas comentam os desafios e tendências para a Gestão de Riscos em 2025.",
    buttonLabel: "ler entrevista",
  },
  {
    img: "/image/i4.jpg",
    title: "Inclusão da GR em Processos Corporativos",
    desc: "Saiba como integrar a Gestão de Riscos aos processos estratégicos da sua empresa.",
    buttonLabel: "ver detalhes",
  },
];

export function OtherCourses() {
  return (
    <section className="pb-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}    >
          Notícias sobre Gestão de Riscos
        </Typography>
        <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}    
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Fique por dentro das principais notícias, eventos e tendências em Gestão de Riscos (GR).
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {OTHER_COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default OtherCourses;
