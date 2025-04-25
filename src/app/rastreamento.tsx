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
    title: "Monitoramento em Tempo Real",
    description:
      "Acompanhe a localização e o status de suas cargas em tempo real, garantindo maior controle e segurança.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Análise de Riscos",
    description:
      "Identifique áreas de risco e tome decisões proativas para evitar incidentes e minimizar perdas.",
  },
  {
    icon: AcademicCapIcon,
    title: "Relatórios Inteligentes",
    description:
      "Obtenha insights detalhados sobre o desempenho da frota e otimize suas operações com base em dados.",
  },
];

export function Rastreamento() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src="/image/callcenter.png"
            className="h-full max-h-[500px] w-full object-cover scale-110 rounded-2xl"
            alt="online course"
          />
        </div>
        <div className="col-span-2 lg:pl-24">
        <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}     variant="h5" color="gray" className="mb-4">
            Rastreamento de Cargas
          </Typography>
          <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}     variant="h3" color="blue-gray" className="mb-4">
            Mais agilidade nas atuações de suspeita de roubo e acidentes
          </Typography>
            <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}     
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-800 lg:px-0"
            >
            Tecnologia e inteligência para monitoramento e rastreamento de frotas.
            </Typography>
            <ul className="mb-5 max-w-lg px-4 text-left text-lg text-gray-700 list-none lg:px-0">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✔</span>
                Score Risk: direcionamento das ocorrências de forma inteligente, considerando histórico de sinistralidade, tipo de produto, região de risco e outros.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✔</span>
                Inteligência artificial: sistema gamificado que orienta os procedimentos que devem ser executados para cada ocorrência, promovendo mais agilidade nas ações.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✔</span>
                Workflow: sistema com procedimentos claros que padronizam e automatizam as ações.
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

export default Rastreamento;
