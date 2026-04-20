"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

interface ServiceCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  tag: string;
  delay: number;
}

export const ServiceCard = ({
  imageUrl,
  imageAlt,
  title,
  description,
  tag,
  delay,
}: ServiceCardProps) => {
  return (
    <Reveal delay={delay} className="service-card">
      <div className="relative z-10">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={80}
          height={80}
          className="service-card-icon mb-6"
          loading="lazy"
        />
        <h3 className="font-heading text-lg font-bold text-ink-dark mb-3">
          {title}
        </h3>
        <p className="text-pencil text-sm leading-relaxed mb-4">{description}</p>
        <span className="inline-block font-handwritten text-sm text-ink-blue bg-line-blue/20 border-1 dashed border-line-blue px-3.5 py-1 rounded-full">
          {tag}
        </span>
      </div>
    </Reveal>
  );
};
