"use client";

import React, { useState, useRef, FormEvent, useEffect } from "react";

interface ContactFormProps {
  defaultMessage?: string;
}

export const ContactForm = ({ defaultMessage }: ContactFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(defaultMessage || "");

  useEffect(() => {
    if (defaultMessage) {
      setMessage(defaultMessage);
    }
  }, [defaultMessage]);

  // Phone input mask – formats Russian phone numbers as +7 (___) ___-__-__
  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    let value = input.value.replace(/\D/g, "");

    if (!value.length) {
      input.value = "";
      return;
    }

    if (value[0] === "8") value = "7" + value.slice(1);
    if (value[0] !== "7") value = "7" + value;

    let formatted = "+7";
    if (value.length > 1) formatted += " (" + value.slice(1, 4);
    if (value.length > 4) formatted += ") " + value.slice(4, 7);
    if (value.length > 7) formatted += "-" + value.slice(7, 9);
    if (value.length > 9) formatted += "-" + value.slice(9, 11);
    input.value = formatted;
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSuccess) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    formRef.current?.reset();
    setMessage("");
    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
  };

  return (
    <form
      id="contactForm"
      ref={formRef}
      onSubmit={handleFormSubmit}
      className="w-full text-left space-y-6"
    >
      {/* Row 1: Name and Phone side-by-side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {/* Name Input */}
        <div className="relative flex flex-col items-start w-full">
          <label
            htmlFor="name"
            className="font-heading text-[10px] font-extrabold tracking-widest text-pencil/50 uppercase mb-1 select-none"
          >
            Ваше имя
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Как вас зовут?"
            required
            className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-line-blue/70 dark:border-slate-800 rounded-none px-0 py-2 text-ink-dark dark:text-white placeholder:text-pencil/25 focus:border-coral focus:ring-0 focus:outline-none transition-all duration-300"
          />
        </div>

        {/* Phone Input */}
        <div className="relative flex flex-col items-start w-full">
          <label
            htmlFor="phone"
            className="font-heading text-[10px] font-extrabold tracking-widest text-pencil/50 uppercase mb-1 select-none"
          >
            Телефон
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+7 (___) ___-__-__"
            required
            onChange={handlePhoneInput}
            className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-line-blue/70 dark:border-slate-800 rounded-none px-0 py-2 text-ink-dark dark:text-white placeholder:text-pencil/25 focus:border-coral focus:ring-0 focus:outline-none transition-all duration-300"
          />
        </div>
      </div>

      {/* Row 2: Message Input (Single line instead of large textarea) */}
      <div className="relative flex flex-col items-start w-full">
        <label
          htmlFor="message"
          className="font-heading text-[10px] font-extrabold tracking-widest text-pencil/50 uppercase mb-1 select-none"
        >
          Расскажите о проекте
        </label>
        <input
          type="text"
          id="message"
          name="message"
          placeholder="Чем занимается ваш бизнес? Какие задачи хотите решить?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-line-blue/70 dark:border-slate-800 rounded-none px-0 py-2 text-ink-dark dark:text-white placeholder:text-pencil/25 focus:border-coral focus:ring-0 focus:outline-none transition-all duration-300"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || isSuccess}
        className={`px-8 py-3 rounded-full text-white font-heading text-xs font-extrabold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed mx-auto mt-8 active:scale-95 hover:shadow-lg group ${
          isSuccess
            ? "bg-emerald-600 hover:bg-emerald-600 shadow-md"
            : "bg-ink-dark hover:bg-coral hover:shadow-coral/20"
        }`}
      >
        {isSubmitting && "Отправка..."}
        {isSuccess && "Заявка отправлена!"}
        {!isSubmitting && !isSuccess && (
          <>
            Отправить заявку
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </>
        )}
      </button>
    </form>
  );
};
