/**
 * PromiseSection Component
 * Promise section with stats and benefits
 * @module childcare/PromiseSection
 */

import { Check, MessageCircle, DoorOpen } from 'lucide-react';
import type { PromiseSectionProps, StatCardProps } from '../types/childcare.types';

const StatCard = ({ value, label }: StatCardProps) => (
  <div className="rounded-xl border p-4 text-center border-black/10 bg-black/5">
    <div className="text-2xl tracking-tight font-nunito font-semibold">
      {value}
    </div>
    <div className="mt-1 text-[11px] text-black/60 font-nunito">
      {label}
    </div>
  </div>
);

export const PromiseSection = ({
  title,
  description,
  benefits,
  stats,
  image,
  imageAlt,
  askQuestionLink = '#contact',
  tourCenterLink = '#visit',
  className = '',
}: PromiseSectionProps) => {
  return (
    <section className={`sm:py-20 pt-16 pb-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl tracking-tight font-nunito font-semibold">
              {title}
            </h2>
            <p className="mt-3 text-sm text-black/70 font-nunito">
              {description}
            </p>
            <ul className="mt-6 grid gap-3 text-sm">
              {benefits.map((benefit, index) => (
                <li key={index} className="inline-flex items-start gap-3 font-nunito">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-black text-neutral-100">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={askQuestionLink}
                className="inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition border-black/10 bg-black/0 text-black hover:bg-black/5 font-nunito"
              >
                <MessageCircle className="h-4 w-4" />
                Ask a Question
              </a>
              <a
                href={tourCenterLink}
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition bg-black text-neutral-100 hover:bg-black/90 font-nunito"
              >
                <DoorOpen className="h-4 w-4" />
                Tour the Center
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden bg-black/5 border-black/10 border rounded-2xl pt-2 pr-2 pb-2 pl-2 relative shadow-xl">
              <img
                className="aspect-video w-full rounded-xl object-cover"
                src={image}
                alt={imageAlt}
              />
              <div className="mt-4 grid grid-cols-3 gap-3">
                {stats.map((stat, index) => (
                  <StatCard key={index} {...stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
