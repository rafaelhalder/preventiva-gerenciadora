"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  ChartPieIcon,
  CloudArrowDownIcon,
  CloudIcon,
  Cog6ToothIcon,
  KeyIcon,
  UsersIcon,
  CogIcon,
  UserIcon,
  BookOpenIcon,
  StarIcon,
  HandThumbUpIcon,
  CheckIcon,
  CheckBadgeIcon
} from "@heroicons/react/24/solid";

import BackgroundCard from "@/components/background-card";

interface OptionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

function Option({ icon: Icon, title, children }: OptionProps) {
  return (
    <div className="flex gap-4">
      <div className="mb-4">
        <Icon className="text-gray-900 h-6 w-6" />
      </div>
      <div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="mb-2 md:w-10/12 font-normal !text-gray-500">
          {children}
        </Typography>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h2" className="text-center mb-2" color="blue-gray">
        Qual o nosso diferencial?
      </Typography>
      <Typography
        variant="lead"
        className="mb-16 w-full text-center font-normal !text-gray-500 lg:w-10/12"
      >
        Nossos diferenciais incluem otimização de processos com IA, análise inteligente de cadastros e seleção dos melhores motoristas para o transportador, garantindo eficiência e segurança.
      </Typography>
      <div className="mt-8">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <BackgroundCard image="/image/ai.png" title="Inteligência Artificial Avançada">
            Utilizamos IA para automatizar processos, validar informações em tempo real e otimizar a tomada de decisões, proporcionando mais agilidade, precisão e segurança para sua operação.
          </BackgroundCard>
          <div className="space-y-8">
            <div className="my-4">
                <Option icon={CogIcon} title="Análise Inteligente de Apólice">
                Nossa IA analisa e valida informações de apólices de forma rápida e precisa, garantindo segurança e eficiência na operação. Proporcionamos clareza para facilitar a tomada de decisão e o entendimento dos direitos e deveres dos nossos clientes.
                </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={ChartPieIcon} title="Relatórios Inteligentes">
          Geração automática de relatórios relevantes, com insights que realmente importam para o transportador, facilitando a gestão e a tomada de decisões.
              </Option>
            </div>
            <Option icon={Cog6ToothIcon} title="Otimização de Processos">
              Automatizamos tarefas repetitivas e otimizamos fluxos operacionais, reduzindo erros e aumentando a produtividade através de soluções baseadas em IA.
            </Option>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-8">
            <div className="my-4">
              <Option icon={UserIcon} title="Seleção de Motoristas">
          Avaliamos e ranqueamos motoristas com critérios personalizados, assegurando qualidade e eficiência no transporte.
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={BookOpenIcon} title="Capacitação Contínua">
          Oferecemos cursos e treinamentos para manter os motoristas sempre atualizados e preparados para as demandas do mercado.
              </Option>
            </div>
            <Option icon={StarIcon} title="Reconhecimento por Mérito">
              Monitoramos o desempenho dos motoristas, reconhecendo e recompensando os melhores, promovendo um ambiente produtivo.
            </Option>
          </div>
          <BackgroundCard image="/image/cart.png" title="Ranking de Motoristas">
            Ranqueamento transparente dos motoristas, facilitando a escolha dos mais qualificados para cada operação.
          </BackgroundCard>
        </div>
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <BackgroundCard image="/image/maozinha.png" title="Suporte ao Cliente Humanizado e Inteligente">
            Oferecemos suporte dedicado que combina tecnologia de IA com atendimento humano, garantindo respostas rápidas, precisas e acolhimento tanto para pessoas físicas quanto jurídicas. Nossa equipe está sempre pronta para ajudar, transmitindo confiança e proximidade em cada interação.
          </BackgroundCard>
          <div className="space-y-8">
            <div className="my-4">
              <Option icon={UsersIcon} title="Atendimento Personalizado">
          Unimos inteligência artificial e especialistas humanos para oferecer um suporte ágil, confiável e adaptado às necessidades de cada cliente, seja pessoa física ou empresa.
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={HandThumbUpIcon} title="Confiança e Transparência">
          Priorizamos a confiança em todas as etapas do atendimento, fornecendo informações claras e acompanhamento próximo para garantir tranquilidade e segurança aos nossos clientes.
              </Option>
            </div>
            <Option icon={CheckBadgeIcon} title="Disponibilidade Total">
              Nosso suporte está disponível em múltiplos canais e horários estendidos, utilizando IA para respostas imediatas e equipe humana para casos que exigem atenção especial.
            </Option>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
