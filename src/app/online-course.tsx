"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/feature-card";

const FEATURES = [
  {
    icon: InboxIcon,
    title: "Validação de Documentos",
    description:
      "Conferimos a autenticidade de CNH, CRLV e outros documentos essenciais para o cadastro do motorista.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Análise de Histórico",
    description:
      "Verificamos antecedentes, multas e histórico profissional para garantir segurança e confiabilidade.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Aprovação Ágil",
    description: "Processo automatizado que agiliza a aprovação e reduz erros humanos.",
  },
];

export function OnlineCourse() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src="/image/motorista1.png"
            className="h-full max-h-[500px] w-full object-cover scale-110 rounded-2xl"
            alt="online course"
          />
        </div>
        <div className="col-span-2 lg:pl-24">
        <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}     variant="h5" color="gray" className="mb-4">
            Cadastro de Motoristas
          </Typography>
          <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}     variant="h3" color="blue-gray" className="mb-4">
            Identifique o motorista e veículo mais adequado para sua carga
          </Typography>
            <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}    
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-800 lg:px-0"
            >
            Solução prática e confiável para verificar os dados de veículos e profissionais que farão o transporte de sua carga.
            </Typography>
            <ul className="mb-5 max-w-lg px-4 text-left text-lg text-gray-700 list-none lg:px-0">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✔</span>
                Avalie motoristas e veículos 92% mais rápido e com 95% de confiabilidade nas análises.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✔</span>
                Realizamos verificações em 520 fontes de dados.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✔</span>
                Concluímos pesquisas em 20 minutos em média, agilizando as operações logísticas de Embarcadores, Transportadoras e Operadores Logísticos.
              </li>
            </ul>

          <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
            {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineCourse;
