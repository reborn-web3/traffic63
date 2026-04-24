// traffic63\components\Process.tsx
"use client";

import { Reveal } from "./Reveal";

/**
 * Process section component.
 * Shows a brief description of the workflow with numbered steps.
 */
import { processSteps } from "@/lib/data";

/**
 * Process section component.
 * Shows a brief description of the workflow with numbered steps.
 */
export const Process = () => {
  const steps = processSteps;

  return (
    <section className="section" id="process">
      <div className="container mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Reveal delay={0}>
            <span className="section-label">📋 Как это работает</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title">Наш процесс</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="section-subtitle mx-auto"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              Прозрачный и понятный путь от брифа до первых результатов
            </p>
          </Reveal>
        </div>

        {/* Steps */}
        <div className="process-steps grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <Reveal
              key={idx}
              delay={0.3 + idx * 0.1}
              className="process-step flex flex-col items-center text-center p-6"
            >
              <div className="step-number text-4xl font-bold text-coral mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-ink-dark mb-2">
                {step.title}
              </h3>
              <p className="text-base text-pencil">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
